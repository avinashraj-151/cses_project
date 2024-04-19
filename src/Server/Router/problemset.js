import express from "express";
import Problemset from "../Model/userModel.js";
const Route = express.Router();
// console.clear();
Route.get("/all", async (req, res, next) => {
  //   res.send("");
  try {
    const data = await Problemset.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

Route.get("/:page", async (req, res, next) => {
  try {
    const { page } = req.params;
    const data = await Problemset.find({ page: page });
    res.json(data);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});
Route.get("/singleproblem/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    const data = await Problemset.find({ problem_section: name });
    res.json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
export default Route;
