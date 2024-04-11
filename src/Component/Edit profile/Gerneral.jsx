import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box, Divider, TextField } from "@mui/material";
function Gerneral() {
  return (
    <div>
      <Box>
        <Box className="mb-3 text-white text-xl">
          <h1>General Information</h1>
        </Box>
        <Divider></Divider>
      </Box>
      <Box>
        <Box>
          <label for="fileInput">
            <Box className="w-80 mt-4 border-2 border-dashed justify-center items-center flex flex-col p-2 border-[#52525B] cursor-pointer text-[#9CA3AF] relative">
              <Box>
                <FileUploadIcon></FileUploadIcon>
              </Box>
              <Box>
                <h1 className="text-center">
                  Click to upload or drag and drop
                </h1>
                <p className="text-center">PNG, JPG or JPEG (Max. 1mb)</p>
              </Box>
              <input id="fileInput" type="file" className="hidden"></input>
            </Box>
          </label>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Name</h3>
          <input
            type="text"
            placeholder="Enter your name"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Date of birth</h3>
          <input
            type="date"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Gender</h3>
          <Box className="flex flex-row gap-4 text-white">
            <label className="flex flex-row gap-2 items-center">
              <input type="radio" className="outline-none"></input>
              <span className="">Female</span>
            </label>
            <label className="flex flex-row gap-2 items-center">
              <input type="radio" className="outline-none"></input>
              <span className="">Male</span>
            </label>
            <label className="flex flex-row gap-2 items-center">
              <input type="radio" className="outline-none"></input>
              <span className="">Other</span>
            </label>
          </Box>
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

export default Gerneral;
