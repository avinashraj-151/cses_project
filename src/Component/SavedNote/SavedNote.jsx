import { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import Accordion from "./Accordion";
import { Context } from "../../Contextapi/Contextapi";
const try_ = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
function SavedNote() {
  const { setusername, setsidebarpage } = useContext(Context);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdetails"));
    // console.log(user.username);
    // console.log(user);
    if (user != null) {
      setusername(user.username);
    }
    setsidebarpage(4);
  });
  return (
    <Box className="w-full h-full bg-[#1A1A1A] flex flex-col p-7">
      <Box>
        <h1 className="text-white text-center text-4xl">SavedNote</h1>
      </Box>
      <Box className="w-full h-full overflow-auto scrollbar-thin">
        <Box className="p-5 flex flex-col gap-2">
          {try_.map(function (items, index) {
            return <Accordion key={index} index={index}></Accordion>;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default SavedNote;
