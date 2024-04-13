import React, { useContext } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import profile from "../../assert/perfect.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Context } from "../../Contextapi/Contextapi";
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
  const { username } = useContext(Context);
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
            <Typography va variant="h5" className="text-white">
              {username}
            </Typography>
            {/* username */}
            <Typography className="text-sm text-gray-200">
              user_real_name
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
