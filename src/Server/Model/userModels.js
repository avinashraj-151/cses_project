import mongoose from "mongoose";
const Schema = mongoose.Schema;

const problemSchema = new Schema({
  problemId: {
    type: Schema.Types.ObjectId,
    ref: "problemsets",
  },
  note: {
    type: String,
    default: "",
  },
  problemsection: {
    type: String,
    default: "",
  },
});
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  Totalproblemsolved: {
    type: Number,
    default: 0,
  },
  Name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  Country_Name: {
    type: String,
  },
  College: {
    type: String,
  },
  problemset: [problemSchema],
  Github: {
    type: String,
  },
  LinkedIn: {
    type: String,
  },
  Twitter: {
    type: String,
  },
  Other: {
    type: String,
  },
  Dob: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Language_Preference: {
    type: String,
  },
  Programming_Since: {
    type: String,
  },
  Highest_Degree_Earned: {
    type: String,
  },
  Graduation_Year: {
    type: String,
  },
  current_profession: {
    type: String,
  },
});

export const Problem = mongoose.model("Problem", problemSchema);
const User = mongoose.model("User", userSchema);
export default User;
