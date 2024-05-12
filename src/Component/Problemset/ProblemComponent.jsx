import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Box, Divider, Checkbox } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import logo from "../../assert/logo (1).png";
import StarIcon from "@mui/icons-material/Star";
import Texteditor from "./Texteditor";
import { Context1 } from "./Contexapi";
import { Context } from "../../Contextapi/Contextapi";
import axios from "axios";
const ProblemComponent = ({ problem, solvedproblem }) => {
  console.log(solvedproblem);
  const [OpenDialog, setOpenDialog] = useState(false);
  const { challengesSolved, setchallengesSolved } = useContext(Context1);
  const { username } = useContext(Context);
  const [ischecked, setischecked] = useState(false);
  const openDialog1 = () => {
    setOpenDialog(true);
  };
  const closeDialog1 = () => {
    setOpenDialog(false);
  };
  const handleChange = async (event, problem) => {
    setischecked(!ischecked);
    if (event.target.checked === true) {
      setchallengesSolved(challengesSolved + 1);
    } else {
      if (challengesSolved > 0) setchallengesSolved(challengesSolved - 1);
    }
  };
  useEffect(() => {
    solvedproblem.find((problem1) => {
      if (problem1.problemId == problem._id) {
        setischecked(true);
      }
    });
  }, []);
  return (
    <>
      <Texteditor
        openDialog={OpenDialog}
        closeDialog={closeDialog1}
      ></Texteditor>
      <Box key={problem.id}>
        <Box className="flex flex-row justify-between bg-[#1A1A1A] text-white p-4 hover:bg-[#a88686] transition-all duration-300 hover:cursor-pointer">
          <Box className="w-[8%] flex justify-start  items-center">
            <Checkbox
              icon={
                <TaskAltIcon className="text-white text-center"></TaskAltIcon>
              }
              checkedIcon={
                <TaskAltIcon className="text-[#3FCA7D] text-center"></TaskAltIcon>
              }
              onChange={(e) => handleChange(e, problem)}
              checked={ischecked}
            />
          </Box>
          <Box className="w-[50%] justify-items-start flex items-center ">
            <a href={problem.problem_link} target="_blank">
              <h4>{problem.problem_name}</h4>
            </a>
          </Box>
          <Box className="w-[40%]">
            <Box className="flex flex-row justify-between justify-items-start text-center">
              <Box className="flex justify-center items-center justify-items-center">
                <a href={problem.problem_link} target="_blank">
                  <img src={logo} alt="logo" className="w-10 h-10"></img>
                </a>
              </Box>
              <Box className="flex justify-center items-center justify-items-center">
                <ArticleIcon></ArticleIcon>
              </Box>
              <Box className="flex justify-center items-center justify-items-center">
                <YouTubeIcon className="text-[#FF0000]"></YouTubeIcon>
              </Box>
              <Box className="flex justify-center items-center justify-items-center">
                <button onClick={() => openDialog1()}>
                  <AddBoxIcon></AddBoxIcon>
                </button>
              </Box>
              <Box className="flex justify-center items-center justify-items-center">
                <Checkbox
                  icon={
                    <StarBorderIcon className="text-white text-center"></StarBorderIcon>
                  }
                  checkedIcon={
                    <StarIcon className="text-[#EAB308] text-center"></StarIcon>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider className="bg-[#363636]"></Divider>
      </Box>
    </>
  );
};

export default ProblemComponent;
