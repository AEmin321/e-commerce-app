import { Router } from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(password, process.env.SECRET),
  });
  try {
    const response = await user.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default authRouter;
