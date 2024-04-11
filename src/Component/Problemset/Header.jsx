import React from "react";
import { Box, Typography } from "@mui/material";
import problemimage from "../../assert/intro3.png";
import LinearProgress from "@mui/material/LinearProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Header() {
  return (
    <Box>
      <Box className="flex justify-center items-center flex-row">
        <Box>
          <Box className=" flex flex-row gap-5 p-4 text-center justify-center items-center">
            <Box>
              <img
                src={problemimage}
                className="w-28 h-28 animate-pulse cursor-pointer"
              ></img>
            </Box>
            <Box>
              <Box>
                <h1 className="text-white text-4xl capitalize font-bold">
                  Introductory Problems
                </h1>
              </Box>
              <Box className="p-2 mt-8 flex flex-row justify-center">
                <Box className="w-full m-1">
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    style={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "#152832",
                      padding: 1,
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    className="text-white text-center"
                  >
                    19/19
                  </Typography>
                </Box>
              </Box>
              {/* <Box className="flex items-center">
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress variant="determinate" value={56} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >{`${2}%`}</Typography>
                </Box>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
