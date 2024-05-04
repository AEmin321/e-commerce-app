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
