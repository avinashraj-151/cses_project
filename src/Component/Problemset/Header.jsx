import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import intro from "../../assert/introductionbadge.png";
import sort_and_search from "../../assert/12.png";
import Dynamic_pro from "../../assert/13.png";
import graph_algo from "../../assert/14.png";
import Range_query from "../../assert/15.png";
import tree_algo from "../../assert/16.png";
import math_algo from "../../assert/17.png";
import string_algo from "../../assert/18.png";
import Gemotry_algo from "../../assert/19.png";
import advance_algo from "../../assert/20.png";
import additional_algo from "../../assert/21.png";

import { Context1 } from "./Contexapi";
const problem_image = [
  {
    name: "Introductory Problems",
    image: intro,
  },
  {
    name: "Sorting and Searching",
    image: sort_and_search,
  },
  {
    name: "Dynamic Programming",
    image: Dynamic_pro,
  },
  {
    name: "Graph Algorithms",
    image: graph_algo,
  },
  {
    name: "Range Queries",
    image: Range_query,
  },
  {
    name: "Tree Algorithms",
    image: tree_algo,
  },
  {
    name: "Mathematics",
    image: math_algo,
  },
  {
    name: "String Algorithms",
    image: string_algo,
  },
  {
    name: "Geometry",
    image: Gemotry_algo,
  },
  {
    name: "Advanced Techniques",
    image: advance_algo,
  },
  {
    name: "Additional Problems",
    image: additional_algo,
  },
];
function Header({ problemset_name }) {
  // console.log(problemset_name);
  const image_of_badge = problem_image.find(
    (problem) => problem.name === problemset_name
  );
  const { total_problem, challengesSolved, setchallengesSolved } =
    useContext(Context1);
  const precentage_solved = (challengesSolved / total_problem) * 100;
  // console.log(precentage_solved);
  return (
    <Box>
      <Box className="flex justify-center items-center flex-row ">
        <Box className="w-full h-full flex flex-col gap-5 p-4 text-center justify-center items-center">
          <Box className="w-full h-full  flex flex-row justify-between items-center">
            <Box>
              <h1 className="text-white text-4xl capitalize font-bold">
                {problemset_name}
              </h1>
            </Box>
            <Box className="flex flex-row gap-2">
              <Box className="p-2 mt-8 flex flex-col justify-center">
                <Box>
                  <Typography
                    variant="body2"
                    className="text-white text-center"
                  >
                    {challengesSolved}/{total_problem} challenges Solved
                  </Typography>
                </Box>
                <Box className="w-full m-1">
                  <LinearProgress
                    variant="determinate"
                    value={precentage_solved > 0 ? precentage_solved : 0}
                    style={{
                      height: 12,
                      borderRadius: 5,
                      backgroundColor: "#152832",
                      padding: 1,
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <img src={image_of_badge.image} className="w-40 h-40"></img>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
