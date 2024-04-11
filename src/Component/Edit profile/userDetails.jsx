import React from "react";
import { Box, Avatar, Typography, Divider } from "@mui/material";
import profile from "../../assert/perfect.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
const information = [
  {
    id: 1,
    name: "General",
  },
  {
    id: 2,
    name: "Personal",
  },
  {
    id: 3,
    name: "Social Links",
  },
  {
    id: 4,
    name: "Login",
  },
  {
    id: 5,
    name: "Professional",
  },
];
function UserDetails({ clicked, selected }) {
  return (
    <Box className="w-72 bg-[#282828] h-full flex flex-col">
      <Box className="p-1 rounded-lg">
        <Link to="/profile">
          <button className="hover:bg-[#666666] flex justify-center items-center rounded-lg p-2 bg-[#282828]">
            <ArrowBackIcon
              className="text-white"
              fontSize="medium"
            ></ArrowBackIcon>
          </button>
        </Link>
      </Box>
      <Box className="flex flex-col p-7">
        <Box className="flex justify-center items-center">
          <Avatar
            src={profile}
            sx={{ width: 100, height: 100 }}
            className="border-yellow-500 border-2 cursor-pointer hover:border-white"
          ></Avatar>
        </Box>
        <Box>
          <Box className="text-center p-4">
            {/* name */}
            <Typography va variant="h4" className="text-white">
              AvinashRaj
            </Typography>
            {/* username */}
            <Typography className="text-sm text-gray-200">
              #AvianashRaj
            </Typography>
          </Box>
        </Box>
        <Box className="p-4 flex flex-col gap-4 text-white">
          {information.map((item, index) => {
            return (
              <Box key={index}>
                <h1
                  className={`cursor-pointer hover:ml-4 duration-300 transition-all ${
                    selected === index ? "text-[#666666]" : "text-white"
                  }`}
                  onClick={() => clicked(index)}
                >
                  {item.name}
                </h1>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default UserDetails;
