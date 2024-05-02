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

productRouter.delete("/:id", userAdminAuthorization, async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json("Product deleted successfully.");
  } catch (error) {
    res.status("500").json("Can't find the product.");
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

productRouter.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json("Can't find the product.");
  }
});

productRouter.get("/", async (req, res) => {
  try {
    const newestQuery = req.query.new;
    const categoryQery = req.query.category;
    let products;
    if (newestQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (categoryQery) {
      products = await Product.find({
        categories: { $in: [categoryQery] },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default productRouter;
