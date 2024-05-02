import express from "express";
import Product from "../models/Product.js";
import { userAdminAuthorization } from "../middlewares/verifyToken.js";

const productRouter = express.Router();

productRouter.post("/", userAdminAuthorization, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const response = await newProduct.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default productRouter;
