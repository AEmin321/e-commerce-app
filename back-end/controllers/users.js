import express from "express";

const userRouter = express.Router();

userRouter.get("/user/hi", (req, res) => {
  res.send("hellooo welcome");
});

export default userRouter;
