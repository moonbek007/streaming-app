import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  favourites: [],
  friends: [],
  notifications: [],
});

export default mongoose.model("users", userSchema);
