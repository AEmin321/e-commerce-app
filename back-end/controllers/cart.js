import express from "express";
import Cart from "../models/Cart";
import { verifyUser } from "../middlewares/verifyToken";

const cartRouter = express.Router();

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
