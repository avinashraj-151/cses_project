import React from "react";
import { Box } from "@mui/material";
import Userdetail from "./Userdetail";
import Graph from "./Graph";
import Total from "./Total";
function Profile() {
  return (
    <Box className="w-full h-full flex-row flex bg-[#1A1A1A] p-7 shadow-xl gap-5">
      <Userdetail></Userdetail>
      <Box className="w-full h-full flex flex-col gap-5 justify-between">
        <Graph></Graph>
        <Total></Total>
      </Box>
    </Box>
  );
}

export default Profile;
