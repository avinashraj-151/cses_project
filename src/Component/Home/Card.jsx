import React from "react";
import { Box, Button } from "@mui/material";
import { abc } from "../../Data/Data.js";
import { Link } from "react-router-dom";
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
                    {/* <Button
                    variant="outlined"
                    color="success"
                    sx={{
                      color: "white",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "green",
                      },
                    }}
                  >
                    Try it free
                  </Button> */}
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
