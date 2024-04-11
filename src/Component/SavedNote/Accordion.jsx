import React from "react";
import { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LaunchIcon from "@mui/icons-material/Launch";
import { Delete, ExpandMore } from "@mui/icons-material";
import Professional from "../Edit profile/Professional";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const try_ = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
function Accordion_() {
  const [hidden, setHidden] = useState(false);
  return (
    <Accordion
      sx={{
        bgcolor: "#F5F5F5",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore className="text-black" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          className="flex w-full h-full justify-between"
          onMouseEnter={() => setHidden(true)}
          onMouseLeave={() => setHidden(false)}
        >
          <Box>
            <Box className="flex flex-row gap-4">
              <Box>
                <h1 className="font-bold">ProblemNo</h1>
              </Box>
              <Box>
                <h1 className="font-bold">
                  ProblemName{" "}
                  <span>
                    <a
                      href="https://cses.fi/problemset/task/1068"
                      target="_blank"
                    >
                      <LaunchIcon className="rounded-full text-[#40A9FF]" />
                    </a>
                  </span>
                </h1>
              </Box>
              <Box>
                <a
                  href="https://www.youtube.com/watch?v=hgi2MYAFgE8&ab_channel=Sanam"
                  target="_blank"
                >
                  <YouTubeIcon
                    className="text-red-600"
                    fontSize="medium"
                  ></YouTubeIcon>
                </a>
              </Box>
            </Box>
          </Box>
          <button
            className=""
            // onClick={() => {
            //   console.log("Check");
            // }}
          >
            <DeleteOutlineOutlinedIcon
              className={`text-[#1A1A1A]  transition-all duration-100 ${
                hidden ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </h1>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default Accordion_;
