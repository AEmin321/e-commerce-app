import mongoose from "mongoose";

const productSchemma = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    categories: {
      type: Array,
    },
    img: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("User", productSchemma);
export default Product;
