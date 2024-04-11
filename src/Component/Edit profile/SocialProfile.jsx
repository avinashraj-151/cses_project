import React from "react";
import { Box, Divider } from "@mui/material";
function SocialProfile() {
  return (
    <div>
      <Box>
        <Box className="mb-3 text-white text-xl">
          <h1>Social Links</h1>
        </Box>
        <Divider></Divider>
      </Box>
      <Box className="text-sm">
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Github</h3>
          <input
            type="text"
            placeholder="Enter your Github link here"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">LinkedIn</h3>
          <input
            type="text"
            placeholder="Enter your LinkedIn link here"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Twitter</h3>
          <input
            type="text"
            placeholder="Enter your Twitter link here"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Other</h3>
          <input
            type="url"
            placeholder="Enter your Other link here"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="py-3 mt-4">
          <button className="bg-yellow-300 px-6 py-2 rounded-xl text-center text-pretty hover:bg-[#FFA116] text-black">
            Save
          </button>
        </Box>
      </Box>
    </div>
  );
}

export default SocialProfile;
