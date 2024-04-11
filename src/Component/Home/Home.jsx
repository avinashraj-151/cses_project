import React from "react";
import { Typography, Box } from "@mui/material";
import Card from "./Card";

function Home() {
  // console.log("Home");
  return (
    <>
      <Box className="flex flex-col bg-[#1A1A1A] w-full h-full overflow-y-auto overflow-x-hidden mb-2 scrollbar-thin scrollbar-webkit">
        <Box className="mb-6">
          <Box className="p-7 w-full h-full">
            <Box className="flex flex-col p-2">
              <Typography
                variant="h3"
                className="text-center text-balance font-extrabold text-white capitalize"
                component="h2"
              >
                Sharpen Your Skills{" "}
                <span className="text-red-700">Master </span>
                Algorithms
              </Typography>
              <Typography className="text-center font-thin text-gray-300 p-1">
                Explore the CSES Problem Set
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* overflow-y-auto overflow-x-hidden mb-2 scrollbar-thin scrollbar-webkit */}
        <Box className=" ">
          <Card></Card>
        </Box>
      </Box>
    </>
  );
}

export default Home;
