import express from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";

import userRouter from "./controllers/users.js";
import authRouter from "./controllers/auth.js";

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

app.use("/user/hi", userRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is running.");
});
