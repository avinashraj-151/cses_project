import express from "express";
import Problemset from "../Model/userModel.js";
const Route = express.Router();

Route.get("/all", async (req, res, next) => {
  //   res.send("");
  const data = await Problemset.find({});
  // res.json(data);
  // console.log(data.length);
  res.json(data);
});

export default Route;
