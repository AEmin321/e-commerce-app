import express from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";

dontenv.config();
const app = express();

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Can't connect to database");
  });

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is running.");
});
