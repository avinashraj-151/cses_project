import { Box, Skeleton } from "@mui/material";
import { abc } from "../../Data/Data.js";
import SingleProblem from "./Singleproblem.jsx";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import Leaderboard from "./Leaderboard.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
const abc1 = [
  {
    id: 4,
    title: "Graph Algorithms",
    description: "Conquer Graphs: Navigate Complex Networks with Ease!",
    cover: abc[3].cover,
    tagline: "Navigate Networks: Graph Mastery Unleashed!",
    link: "/single/Graph Algorithms",
  },
  {
    id: 6,
    title: "Tree Algorithms",
    description: "Unlock Trees: Traverse Data Structures Seamlessly!",
    cover: abc[5].cover,
    tagline: "sameless Traversal: Unlock Tree Algorithm Mastery!",
    link: "/single/Tree Algorithms",
  },
  {
    id: 3,
    title: "Dynamic Programming",
    description: "Empower Your Code: Dynamic Programming Solutions Await!",
    cover: abc[2].cover,
    tagline: "Dynamic Solutions: Code Empowerment Awaits!",
    link: "/single/Advanced Techniques",
  },
];
function WProblem() {
  const [loading, setloading] = useState(true);
  const [randomproblem, setrandomproblem] = useState("");
  const [allproblem, setallproblem] = useState([]);
  function handelpickone(problem) {
    // console.log(problem);
    setallproblem(problem);
  }
  // console.log(allproblem);
  function chooseone() {
    let random = Math.floor(Math.random() * allproblem.length);
    console.log(allproblem[random].problem_link);
    setrandomproblem(allproblem[random].problem_link);
    // console.log(abc1);
  }
  return (
    <>
      <div className="p-7 bg-[#1A1A1A] w-full h-full flex flex-row gap-5">
        <Box className="w-[70%] overflow-auto ">
          <Box className="w-full h-full flex flex-col overflow-auto scrollbar-thin">
            <Box className="text-[#f5f5f5bf] mb-4">
              <h1 className="text-xl">ProblemSet</h1>
            </Box>
            <Box>
              <Box className="grid grid-flow-row gap-4 grid-cols-3">
                {abc1.map((item, index) => {
                  return (
                    <Box key={index}>
                      <Link to={item.link}>
                        <Box className="shadow-inner rounded-xl bg-[#282828] flex flex-row gap-3 hover:bg-[#363636]  items-center cursor-pointer">
                          <Box>
                            <img
                              src={item.cover}
                              alt="cover"
                              className="w-16 rounded-lg hover:animate-pulse cursor-pointer p-3"
                            ></img>
                          </Box>
                          <Box>
                            <Box className="flex justify-center items-start justify-items-start">
                              <h6 className="text-sm text-white ">
                                {item.title}
                              </h6>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            {!loading && (
              <Box className="w-full h-full flex flex-row justify-between mt-8 mb-8">
                <Box>
                  <Box className="bg-white p-2 rounded-2xl flex justify-center items-center">
                    <h1 className="text-sm text-black text-center">
                      ALL Problem
                    </h1>
                  </Box>
                </Box>
                <Box className="flex flex-row gap-2 justify-center items-center">
                  <button className="bg-[#46CE76] p-1 rounded-3xl flex justify-center items-center">
                    <a
                      href={randomproblem.length > 0 ? randomproblem : ""}
                      target="_blank"
                    >
                      <ShuffleIcon
                        fontSize="medium"
                        className="text-white text-center"
                        onClick={(event) => {
                          chooseone();
                        }}
                      />
                    </a>
                  </button>
                  <h4 className="text-white">Pick one</h4>
                </Box>
              </Box>
            )}
            {loading === true && (
              <Box className="w-full h-full flex flex-col justify-between mt-4 mb-2">
                <Skeleton
                  animation="pulse"
                  sx={{
                    background: "linear-gradient(to right, #D65E64, #5E3D54)",
                  }}
                ></Skeleton>
                <Skeleton
                  animation="pulse"
                  sx={{
                    background: "linear-gradient(to right, #D65E64, #5E3D54)",
                  }}
                ></Skeleton>
                <Skeleton
                  animation="pulse"
                  sx={{
                    background: "linear-gradient(to right, #D65E64, #5E3D54)",
                  }}
                ></Skeleton>
                <Skeleton
                  animation="pulse"
                  sx={{
                    background: "linear-gradient(to right, #D65E64, #5E3D54)",
                  }}
                ></Skeleton>
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  sx={{
                    background: "linear-gradient(to right, #D65E64, #5E3D54)",
                  }}
                ></Skeleton>
                <Skeleton
                  animation="pulse"
                  sx={{
                    background: "linear-gradient(to right, #D65E64, #5E3D54)",
                  }}
                ></Skeleton>
                <Skeleton
                  animation="pulse"
                  sx={{
                    background: "linear-gradient(to right, #D65E64, #5E3D54)",
                  }}
                ></Skeleton>
              </Box>
            )}
            <Box className="">
              <SingleProblem
                loading={setloading}
                handelpickone={handelpickone}
              ></SingleProblem>
            </Box>
          </Box>
        </Box>
        <Box className="w-[30%] overflow-auto scrollbar-thin">
          <Leaderboard></Leaderboard>
        </Box>
      </div>
    </>
  );
}

export default WProblem;
