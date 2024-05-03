import express from "express";
import Cart from "../models/Cart";
import { verifyUser, userAuthorization } from "../middlewares/verifyToken";

const cartRouter = express.Router();

cartRouter.delete("/:id", userAuthorization, async (req, res) => {
  const id = req.params.id;
  try {
    await Cart.findByIdAndDelete(id);
    res.status(200).json("item removed successfully.");
  } catch (error) {
    res.status("500").json("Can't delete the product.");
  }
});

cartRouter.put("/:id", userAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json("Authentication error");
  }
});

cartRouter.post("/", verifyUser, async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const response = await newCart.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default cartRouter;
