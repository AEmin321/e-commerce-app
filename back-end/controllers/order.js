import express from "express";
import Order from "../models/Order.js";
import {
  userAdminAuthorization,
  userAuthorization,
} from "../middlewares/verifyToken.js";

const orderRouter = express.Router();

orderRouter.delete("/:id", userAdminAuthorization, async (req, res) => {
  const id = req.params.id;
  try {
    await Order.findByIdAndDelete(id);
    res.status(200).json("cart removed successfully.");
  } catch (error) {
    res.status("500").json(error);
  }
});

orderRouter.get("/:userId", userAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

orderRouter.get("/", userAdminAuthorization, async (req, res) => {
  try {
    const orders = await order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

orderRouter.get("/monthly", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const monthly_data = await Order.aggregate([
      {
        $match: { createdAt: { $gte: previousMonth } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(monthly_data);
  } catch (error) {}
});

orderRouter.post("/", userAuthorization, async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const response = await newOrder.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

orderRouter.put("/:id", userAdminAuthorization, async (req, res) => {
  try {
    const updatedOrder = await Update.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json("Authentication error");
  }
});

export default orderRouter;
