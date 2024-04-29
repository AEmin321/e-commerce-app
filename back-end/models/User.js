import mongoose from "mongoose";

const userSchemma = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchemma);
export default User;
