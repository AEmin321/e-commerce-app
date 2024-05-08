import express from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";

import userRouter from "./controllers/users.js";
import productRouter from "./controllers/products.js";
import authRouter from "./controllers/auth.js";
import orderRouter from "./controllers/order.js";
import cartRouter from "./controllers/cart.js";
import stripeRouter from "./controllers/stripe.js";

dontenv.config();
const app = express();
app.use(express.json());

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Can't connect to database");
  });

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/carts", cartRouter);
app.use("/api", stripeRouter);

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is running.");
});
