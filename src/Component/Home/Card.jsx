import React from "react";
import { Box, Button } from "@mui/material";
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
import { Link } from "react-router-dom";
const abc = [
  {
    id: 1,
    title: "Introductory Problems",
    description: "Discover Basic Algorithms: Introductory Problems",
    cover: intro,
    tagline: " Discover Basic Algorithms: Introductory Problems",
    link: "/single/Introductory Problems",
  },
  {
    id: 2,
    title: "Sorting and Searching",
    description: "Master Sorting and Searching: Efficiency Unleashed!",
    cover: sort_and_search,
    tagline: "Efficiency Unleashed: Sort, Search Mastery!",
    link: "/single/Sorting and Searching",
  },
  {
    id: 3,
    title: "Dynamic Programming",
    description: "Empower Your Code: Dynamic Programming Solutions Await!",
    cover: Dynamic_pro,
    tagline: "Dynamic Solutions: Code Empowerment Awaits!",
    link: "/single/Dynamic Programming",
  },
  {
    id: 4,
    title: "Graph Algorithms",
    description: "Conquer Graphs: Navigate Complex Networks with Ease!",
    cover: graph_algo,
    tagline: "Navigate Networks: Graph Mastery Unleashed!",
    link: "/single/Graph Algorithms",
  },
  {
    id: 5,
    title: "Range Queries",
    description: "Optimize Queries: Range Problems, Solved!",
    cover: Range_query,
    tagline: "Range Problems Solved: Optimize Your Queries!",
    link: "/single/Range Queries",
  },
  {
    id: 6,
    title: "Tree Algorithms",
    description: "Unlock Trees: Traverse Data Structures Seamlessly!",
    cover: tree_algo,
    tagline: "sameless Traversal: Unlock Tree Algorithm Mastery!",
    link: "/single/Tree Algorithms",
  },
  {
    id: 7,
    title: "Mathematics",
    description: "Mathematics Made Simple: Explore Numerical Solutions!",
    cover: math_algo,
    tagline: "Solve Numerical Puzzles: Mathematics Simplified!",
    link: "/single/Mathematics",
  },
  {
    id: 8,
    title: "String Algorithms",
    description: "String Mastery: Decode Patterns with Precision!",
    cover: string_algo,
    tagline: "Pattern Decoding: Master String Algorithm",
    link: "/single/String Algorithms",
  },
  {
    id: 9,
    title: "Geometry",
    description: "Shape Your Solutions: Geometry Challenges Aplenty!",
    cover: Gemotry_algo,
    tagline: "Geometric Challenge: Shape Your Solutions!",
    link: "/single/Geometry",
  },
  {
    id: 10,
    title: "Advanced Techniques",
    description: "Advanced Techniques: Elevate Your Programming Skills!",
    cover: advance_algo,
    tagline: "Elevate Your Skills: Advanced Techniques Await!",
    link: "/single/Advanced Techniques",
  },
  {
    id: 11,
    title: "Additional Problems",
    description: "Dive Deeper: Additional Problems Await!",
    cover: additional_algo,
    tagline: "Explore Deeper: Additional Challenges Await!",
    link: "/single/Additional Problems",
  },
];

function Card() {
  return (
    <Box className="w-full h-full  p-5">
      <Box class="bg-[#1A1A1A]">
        <Box className="grid grid-flow-row gap-10 lg:grid-cols-2 grid-cols-1">
          {abc.map((item, index) => {
            return (
              <Box key={index}>
                <Box
                  className="border-2 hover:shadow-md 
                cursor-pointer hover:shadow-zinc-500 border-white p-4 rounded-xl bg-[#282828] relative transition-all duration-300"
                >
                  <Box>
                    <img
                      src={item.cover}
                      alt="cover"
                      className="w-32 rounded-md cursor-pointer absolute -right-3 -top-10"
                    ></img>
                  </Box>
                  <Box>
                    <Box className="px-2 flex flex-col gap-2">
                      <p className="text-xl font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-white">{item.tagline}</p>
                    </Box>
                    <Box className="p-2 mt-2">
                      <Link to={item.link}>
                        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent ">
                          Solve Now
                        </button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
