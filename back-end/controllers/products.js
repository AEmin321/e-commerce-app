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

productRouter.put("/:id", userAdminAuthorization, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json("Authentication error");
  }
});

export default productRouter;
