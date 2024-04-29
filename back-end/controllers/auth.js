import { Router } from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong Credentials!!!");
    }
    const hashed_password = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET
    );
    const pass = hashed_password.toString(CryptoJS.enc.Utf8);
    if (pass !== req.body.password) {
      return res.status(401).json("Wrong Password!!!");
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    const { password, ...other_data } = user._doc;
    res.status(200).json({ ...other_data, token });
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
