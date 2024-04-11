import React from "react";
import { Box } from "@mui/material";
import Progressbar from "../Progressbar";
function Graph() {
  return (
    <div>
      <Box>
        <Box className="flex gap-5">
          <Box className="bg-[#282828] w-2/5  h-60 rounded-lg">
            <Box className="p-3 text-center">
              <h4 className="text-[#90A1A4]">Solved Problem</h4>
            </Box>
            <Box className="flex justify-center items-center">
              <Progressbar></Progressbar>
            </Box>
          </Box>
          <Box className="bg-[#282828] w-[60%]  h-60 rounded-lg">
            <Box>
              <Box className="p-3 text-center">
                <h4 className="text-[#90A1A4]">Total Topics</h4>
              </Box>
              <Box>{/* <Box className="grid"></Box> */}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Graph;
