import React, { useEffect, useContext } from "react";
import { Box, Avatar, Typography, Divider } from "@mui/material";
import profile from "../../assert/perfect.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Context } from "../../Contextapi/Contextapi";
function Userdetail() {
  const { username, setusername, setsidebarpage } = useContext(Context);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdetails"));
    setusername(user.username);
    setsidebarpage(1);
  }, []);
  return (
    <Box>
      <Box className="w-72 h-full">
        <Box className="bg-[#282828] h-full p-7 flex flex-col relative">
          <Box className="absolute -right-1 rounded-full -top-2  bg-yellow-500 p-1 cursor-pointer flex justify-center items-center">
            <Link to="/profile/edit">
              <Edit fontSize="medium" className="text-white"></Edit>
            </Link>
          </Box>
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
                {/* username*/}
                {username}
              </Typography>
              {/* username */}
              <Typography className="text-sm text-gray-200">
                user_real_name
              </Typography>
            </Box>
          </Box>
          <Box className="flex flex-row gap-4 justify-center items-center">
            <Box className="bg-[#111111] p-2 rounded-xl">
              <button>
                <GitHubIcon
                  className="text-white hover:scale-y-125 hover:scale-x-125"
                  fontSize="medium"
                />
              </button>
            </Box>
            <Box className="bg-[#111111] p-2 rounded-xl">
              <button>
                <LinkedInIcon
                  className="text-white hover:scale-y-125 hover:scale-x-125"
                  fontSize="medium"
                />
              </button>
            </Box>
            <Box className="bg-[#111111] p-2 rounded-xl">
              <button>
                <XIcon
                  className="text-white hover:scale-y-125 hover:scale-x-125"
                  fontSize="medium"
                />
              </button>
            </Box>
            <Box className="bg-[#111111] p-2 rounded-xl">
              <button>
                <LanguageIcon
                  className="text-white hover:scale-y-125 hover:scale-x-125"
                  fontSize="medium"
                />
              </button>
            </Box>
          </Box>
          <Box className="p-2 mt-2">
            <Divider
              style={{
                borderColor: "#212121",
                borderWidth: "1px",
              }}
            />
          </Box>
          <Box className="flex flex-col gap-4">
            <Box className=" p-2 rounded-xl flex flex-row  gap-2">
              <EmailIcon
                className="text-white hover:scale-y-125 hover:scale-x-125 flex justify-center items-center"
                fontSize="small"
              />
              <Box className="flex">
                <h6 className="text-white text-sm text-ellipsis">....</h6>
              </Box>
            </Box>
            <Box className="flex flex-row  gap-2 p-2 rounded-xl ">
              <LocationOnIcon
                className="text-white hover:scale-y-125 hover:scale-x-125"
                fontSize="small"
              />
              <Box className="flex">
                <h6 className="text-white text-sm text-ellipsis">...</h6>
              </Box>
            </Box>
            <Box className="flex flex-row  gap-2 p-2 rounded-xl ">
              <Box className="">
                <LocationCityIcon
                  className="text-white hover:scale-y-125 hover:scale-x-125 "
                  fontSize="small"
                />
              </Box>
              <Box className="flex">
                <h6 className="text-white text-sm text-wrap">...</h6>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Userdetail;
