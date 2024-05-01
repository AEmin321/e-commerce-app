import express from "express";
import { userAuthorization } from "../middlewares/verifyToken.js";
import User from "../models/User.js";

const userRouter = express.Router();

userRouter.get("/user/hi", (req, res) => {
  res.send("hellooo welcome");
});

userRouter.put("/:id", userAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    );
  }
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
