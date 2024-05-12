import React, { useEffect, useContext } from "react";
import { Typography, Box } from "@mui/material";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Contextapi/Contextapi";
function Home() {
  // console.log("Home");
  const { username, setusername, setsidebarpage } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdetails"));
    if (user != null) {
      setusername(user.username);
    } else {
      navigate("/login");
    }
    if (username != "username") {
      setsidebarpage(0);
    }
  }, []);
  return (
    <>
      {username != "username" && (
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
          <Box className=" ">
            <Card></Card>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Home;
