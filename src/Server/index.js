import express from "express";
import cors from "cors";
import connectdb from "./Connectdb/Connectdb.js";
import ProblemsetRoute from "./Router/problemset.js";
import UserRouter from "./Router/UserRouter.js";
import bodyParser from "body-parser";
console.clear();
const app = express();
const port = 4000;
connectdb();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/problemset", ProblemsetRoute);
app.use("/auth", UserRouter);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
