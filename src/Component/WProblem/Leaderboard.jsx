import React from "react";
import { Box, Avatar } from "@mui/material";
import logo from "../../assert/perfect.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
const result = [1, 2, 3, 4, 5, 6];
function Leaderboard() {
  return (
    <div>
      <Box className="w-full h-full bg-[#282828] rounded-xl">
        <Box>
          <Box>
            {/* icons */}
            <Box className="flex flex-row justify-center items-center p-1 gap-2">
              <EmojiEventsIcon
                fontSize="large"
                className="text-[#FFA116] text-center "
              />
              <h1 className="text-white capitalize font-semibold">
                leaderboard
              </h1>
            </Box>
            {/* text */}
          </Box>
          <Box>
            <Box className="flex flex-col">
              {result.map((item, i) => {
                return (
                  <Box key={i}>
                    <Box className="flex gap-3 justify-items-start  items-center p-2 ml-2">
                      <Box className="text-[#FFA116] text-xl font-bold">
                        {i + 1}
                      </Box>
                      <Avatar
                        alt="Remy Sharp"
                        src={logo}
                        sx={{ width: 60, height: 60 }}
                        className="border-[#FFA116] border-2"
                      />
                      <Box>
                        <h1 className="text-[#FFA116] hover:text-[#0A70BA] cursor-pointer">
                          username
                        </h1>
                        <p className="text-[#9FA1A4] capitalize cursor-pointer">
                          problem solved :<span className="text-white">19</span>
                        </p>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <h6 className="text-sm text-white p-2"></h6>
        </Box>
      </Box>
    </div>
  );
}

export default Leaderboard;
