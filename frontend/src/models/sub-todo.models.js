import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  isActive: Boolean,
});

export const User = mongoose.models("User", userSchema);
