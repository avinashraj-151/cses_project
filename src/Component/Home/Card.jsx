import React from "react";
import { Box, Button } from "@mui/material";
import graph from "../../assert/graph.png";
import dp from "../../assert/dp.png";
import intro from "../../assert/intro.png";
import search from "../../assert/search.png";
import tree from "../../assert/tree1.png";
import math from "../../assert/math.png";
import gemo from "../../assert/gemo.png";
import range from "../../assert/range.png";
import string from "../../assert/string.png";
import adv from "../../assert/adv.png";
import { Link } from "react-router-dom";
import addition from "../../assert/addition.png";
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
    cover: search,
    tagline: "Efficiency Unleashed: Sort, Search Mastery!",
    link: "/single/Sorting and Searching",
  },
  {
    id: 3,
    title: "Dynamic Programming",
    description: "Empower Your Code: Dynamic Programming Solutions Await!",
    cover: dp,
    tagline: "Dynamic Solutions: Code Empowerment Awaits!",
    link: "/single/Dynamic Programming",
  },
  {
    id: 4,
    title: "Graph Algorithms",
    description: "Conquer Graphs: Navigate Complex Networks with Ease!",
    cover: graph,
    tagline: "Navigate Networks: Graph Mastery Unleashed!",
    link: "/single/Graph Algorithms",
  },
  {
    id: 5,
    title: "Range Queries",
    description: "Optimize Queries: Range Problems, Solved!",
    cover: range,
    tagline: "Range Problems Solved: Optimize Your Queries!",
    link: "/single/Range Queries",
  },
  {
    id: 6,
    title: "Tree Algorithms",
    description: "Unlock Trees: Traverse Data Structures Seamlessly!",
    cover: tree,
    tagline: "sameless Traversal: Unlock Tree Algorithm Mastery!",
    link: "/single/Tree Algorithms",
  },
  {
    id: 7,
    title: "Mathematics",
    description: "Mathematics Made Simple: Explore Numerical Solutions!",
    cover: math,
    tagline: "Solve Numerical Puzzles: Mathematics Simplified!",
    link: "/single/Mathematics",
  },
  {
    id: 8,
    title: "String Algorithms",
    description: "String Mastery: Decode Patterns with Precision!",
    cover: string,
    tagline: "Pattern Decoding: Master String Algorithm",
    link: "/single/String Algorithms",
  },
  {
    id: 9,
    title: "Geometry",
    description: "Shape Your Solutions: Geometry Challenges Aplenty!",
    cover: gemo,
    tagline: "Geometric Challenge: Shape Your Solutions!",
    link: "/single/Geometry",
  },
  {
    id: 10,
    title: "Advanced Techniques",
    description: "Advanced Techniques: Elevate Your Programming Skills!",
    cover: adv,
    tagline: "Elevate Your Skills: Advanced Techniques Await!",
    link: "/single/Advanced Techniques",
  },
  {
    id: 11,
    title: "Additional Problems",
    description: "Dive Deeper: Additional Problems Await!",
    cover: addition,
    tagline: "Explore Deeper: Additional Challenges Await!",
    link: "/single/Additional Problems",
  },
];

function Card() {
  return (
    <Box className="w-full h-full  p-5">
      <Box class="bg-[#1A1A1A]">
        <Box className="grid grid-flow-row gap-4 grid-cols-3">
          {abc.map((item, index) => {
            return (
              <Box key={index}>
                <Box className="border-2 border-white p-4  shadow-inner shadow-white rounded-xl bg-[#282828]">
                  <Box>
                    <img
                      src={item.cover}
                      alt="cover"
                      className="w-52 rounded-md hover:animate-pulse cursor-pointer"
                    ></img>
                  </Box>
                  <Box className="px-2 flex flex-col gap-2">
                    <p className="text-xl font-bold text-white">{item.title}</p>
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
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
