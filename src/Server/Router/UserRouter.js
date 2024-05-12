import express, { Router } from "express";
import User from "../Model/userModels.js";
import { Problem } from "../Model/userModels.js";
import bcrypt from "bcrypt";
const Route = express.Router();
Route.get("/signup/checkusername/:username", async (req, res, next) => {
  try {
    const username = req.params.username;
    //   console.log(username);
    const check = await User.findOne({ username: username });
    // console.log(check);
    if (check) {
      res.json({ message: "User name already exist" });
    } else {
      res.json({ message: "Usernotexist" });
    }
  } catch (err) {
    // console.log(err.message);
    // res.json({ message: err.message });
    next(err);
  }
});
Route.get("/signup/checkemail/:email", async (req, res, next) => {
  try {
    const email = req.params.email;
    // console.log(email);
    const check = await User.findOne({ email: email });
    // console.log(check);
    if (check) {
      res.json({ message: "User email already exist" });
    } else {
      res.json({ message: "Usernotexist" });
    }
  } catch (err) {
    next(err);
  }
});
Route.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.json({ message: "User Created" });
  } catch (err) {
    res.json(err.message);
    next(err);
  }
});

Route.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      //   console.log(isMatch);
      if (isMatch) {
        res.json({ message: user });
      } else if (isMatch == false) {
        res.json({ message: "Invalid Password" });
      }
    } else {
      res.json({ message: "Invalid Email" });
    }
  } catch (error) {
    // console.log(error)
    next(error);
  }
});

Route.post("/personal/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    // console.log(username);
    const user = req.body;
    // console.log(user);
    const user_country = await User.updateOne(
      {
        username: username,
      },
      {
        $set: {
          Country_Name: user.Country_Name,
        },
      }
    );
    // console.log(user_country);
    const user_College = await User.updateOne(
      { username: username },
      {
        $set: {
          College: user.College,
        },
      }
    );
    // console.log(user_College);
    res.json({ message: "Success updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

Route.get("/personalinfo/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    // console.log(username);
    // console.log(req.body);
    const userinfo = await User.findOne({
      username: username,
    });
    // console.log(userinfo);
    res.json({ message: userinfo });
  } catch (error) {
    next(error);
  }
});
Route.post("/SocialInfo/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    const { other, twitter, linkedin, github } = req.body;
    console.log(other, twitter, linkedin, github);
    const user = await User.findOne({ username: username });
    console.log(user);
    if (github.length > 0) {
      const user_github = await User.updateOne(
        {
          username: username,
        },
        {
          $set: {
            Github: github,
          },
        }
      );
      console.log(user_github);
    }
    if (twitter.length > 0) {
      const user_twitter = await User.updateOne(
        {
          username: username,
        },
        {
          $set: {
            Twitter: twitter,
          },
        }
      );
    }
    if (linkedin.length > 0) {
      const user_linkedin = await User.updateOne(
        {
          username: username,
        },
        {
          $set: {
            LinkedIn: linkedin,
          },
        }
      );
    }
    if (other.length > 0) {
      const user_other = await User.updateOne(
        {
          username: username,
        },
        {
          $set: {
            Other: other,
          },
        }
      );
    }
    res.json({ message: "updated" });
  } catch (error) {
    // console.log(error);
    next(error);
  }
});

Route.get("/SocialInfo/:username", async function (req, res, next) {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username });
    // console.log(user);
    res.json({ message: user });
  } catch (e) {
    res.json({ message: "Couldn't find" });
    next(e);
  }
});

Route.post("/logininfo/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    console.log(username);
    const userinfo = await User.findOne({
      username: username,
    });
    res.json({ message: userinfo });
  } catch (e) {
    res.json({ message: e.message });
    next(e);
  }
});

Route.post("/problemset/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    const problemdetails = req.body;
    const created_problemdetails = await Problem.create({
      problemId: problemdetails._id,
      problemsection: problemdetails.problem_section,
    });
    const userinfo = await User.findOne({ username: username });
    userinfo.problemset.push(created_problemdetails);
    await userinfo.save();
    res.json({ message: problemdetails });
  } catch (e) {
    res.json({ message: e.message });
    next(e);
  }
});

Route.get("/problemset/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    if (username != null) {
      const userinfo = await User.findOne({ username: username });
      res.json({ message: userinfo.problemset });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (e) {
    res.json({ message: e.message });
    next(e);
  }
});

export default Route;
