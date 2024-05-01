import express from "express";
import { userAuthorization } from "../middlewares/verifyToken.js";
import CryptoJS from "crypto-js";
import User from "../models/User.js";

const userRouter = express.Router();

userRouter.get("/user/hi", (req, res) => {
  res.send("hellooo welcome");
});

userRouter.delete("/:id", userAuthorization, async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("User deleted successfully.");
  } catch (error) {
    res.status("500").json("Can't find the user.");
  }
});

userRouter.put("/:id", userAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString();
  }
  console.log("authorized");
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json("Authentication error");
  }
});

export default userRouter;
