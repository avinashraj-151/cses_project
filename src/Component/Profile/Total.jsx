import React from "react";
import { Box } from "@mui/material";
import { abc } from "../../Data/Data";
function Total() {
  return (
    <>
      <Box className="w-full h-full bg-[#282828] flex flex-col overflow-auto">
        <Box className="">
          <Box className="p-3 text-center">
            <h4 className="text-[#90A1A4]">Topics Covered</h4>
          </Box>
        </Box>
        <Box className="overflow-auto scrollbar-webkit scrollbar-thin">
          <Box className="p-3 ">
            <Box className="grid grid-flow-row grid-cols-3 gap-4">
              {/* <Box className="bg-yellow-400">Array</Box> */}
              {abc.map((item, index) => {
                return (
                  <Box key={index}>
                    <Box className="bg-[rgb(33,33,33)] p-4 text-white rounded-md">
                      <Box className="flex flex-row justify-between gap-2">
                        <p>{item.title}</p>
                        <p>
                          <span className="text-sm">x</span>1
                        </p>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Total;
