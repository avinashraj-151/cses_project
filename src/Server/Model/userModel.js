import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  problem_name: {
    type: String,
    required: true,
  },
  problem_link: {
    type: String,
    required: true,
  },
  problem_section: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    default: 1, // Optional default value
  },
});
const UserModel = mongoose.model("problemset", userSchema);

export default UserModel;
