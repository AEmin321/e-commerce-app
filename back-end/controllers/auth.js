import { Router } from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";

const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json("Wrong Credentials!!!");
    }
    const hashed_password = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET
    );
    const pass = hashed_password.toString(CryptoJS.enc.Utf8);
    if (pass !== password) {
      return res.status(401).json("Wrong Password!!!");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
