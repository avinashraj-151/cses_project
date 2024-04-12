import express from "express";
import cors from "cors";
import connectdb from "./Connectdb/Connectdb.js";
import ProblemsetRoute from "./Router/problemset.js";
console.clear();
const app = express();
const port = 4000;
connectdb();

app.use(cors());

app.use("/api/problemset", ProblemsetRoute);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
