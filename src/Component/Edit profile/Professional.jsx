import React from "react";
import { Box, Divider } from "@mui/material";
function Professional() {
  return (
    <div className="">
      <Box>
        <Box className="mb-3 text-white text-xl">
          <h1>Professional Information</h1>
        </Box>
        <Divider></Divider>
      </Box>
      <Box className="text-sm">
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Programming Language Preference</h3>
          <input
            type="text"
            placeholder="your favorite langauage"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Programming Since</h3>
          <input
            type="text"
            placeholder="2021 or 2022"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Highest Degree Earned</h3>
          <input
            type="text"
            placeholder="bca or btech"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Are you a Student or a Professional</h3>
          <Box className="flex flex-row gap-4 text-white">
            <label className="flex flex-row gap-2 items-center">
              <input type="radio" className="outline-none"></input>
              <span className="">Student</span>
            </label>
            <label className="flex flex-row gap-2 items-center">
              <input type="radio" className="outline-none"></input>
              <span className="">Professional</span>
            </label>
            <label className="flex flex-row gap-2 items-center">
              <input type="radio" className="outline-none"></input>
              <span className="">Other</span>
            </label>
          </Box>
        </Box>
        {/* Where do you study */}
        {/* Expected Graduation Year: */}
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Expected Graduation Year</h3>
          <input
            type="text"
            placeholder="2024"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="mt-3">
          <button className="bg-yellow-300 px-6 py-2 rounded-xl text-center text-pretty hover:bg-[#FFA116] text-black">
            Save
          </button>
        </Box>
      </Box>
    </div>
  );
}

export default Professional;
