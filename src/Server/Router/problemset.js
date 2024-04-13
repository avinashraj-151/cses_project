import express from "express";
import Problemset from "../Model/userModel.js";
const Route = express.Router();
// console.clear();
Route.get("/all", async (req, res, next) => {
  //   res.send("");
  try {
    const data = await Problemset.find({});
    // res.json(data);
    // console.log(data.length);
    res.json(data);
  } catch (err) {
    // console.log(err);
    next(err);
  }
});

Route.get("/:page", async (req, res, next) => {
  const { page } = req.params;
  // console.log(name);
  // const data = await Problemset.find({ page: 1});
  const data = await Problemset.find({ page: page });
  // console.log(data);
  res.json(data);
});
Route.get("/singleproblem/:name", async (req, res, next) => {
  const { name } = req.params;
  // console.log(name);
  const data = await Problemset.find({ problem_section: name });
  // // console.log(data);
  res.json(data);
});
export default Route;
