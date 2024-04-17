import { useEffect, useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Editor from "@monaco-editor/react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import { Code } from "@mui/icons-material";

export const Blog = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  return (
    <Box className="w-full h-full flex-row gap-3 flex p-7 bg-red-600">
      <Box className="w-1/2">
        <Box className="w-full h-full flex flex-col bg-green-600 rounded-xl">
          <Box className="bg-[#333333] rounded-t-lg">
            <Tabs
              value={value1}
              onChange={handleChange1}
              aria-label="basic tabs example"
            >
              <Tab
                label={
                  <Box className="flex flex-row justify-center items-center gap-1">
                    <DescriptionOutlinedIcon className="text-blue-700"></DescriptionOutlinedIcon>
                    <h3 className="text-white text-center font-bold">
                      Description
                    </h3>
                  </Box>
                }
              />
              <Tab
                label={
                  <Box className="flex flex-row justify-center items-center gap-1">
                    <AutoStoriesOutlinedIcon className="text-[#FFA116]"></AutoStoriesOutlinedIcon>
                    <h3 className="text-white text-center font-bold">
                      editorial
                    </h3>
                  </Box>
                }
              />
              <Tab
                label={
                  <Box className="flex flex-row justify-center items-center gap-1">
                    <ScienceOutlinedIcon className="text-blue-700"></ScienceOutlinedIcon>
                    <h3 className="text-white text-center font-bold">
                      Solution
                    </h3>
                  </Box>
                }
              />
              <Tab
                label={
                  <Box className="flex flex-row justify-center items-center gap-1">
                    <UpdateIcon className="text-blue-700"></UpdateIcon>
                    <h3 className="text-white text-center font-bold">
                      Submission
                    </h3>
                  </Box>
                }
              />
            </Tabs>
          </Box>
        </Box>
      </Box>
      <Box className="w-1/2">
        <Box className="w-full h-full bg-yellow-600 rounded-lg flex flex-col">
          <Box className="bg-[#333333] rounded-t-lg">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label={
                  <Box className="flex flex-row justify-center items-center gap-1">
                    <Code className="text-green-700"></Code>
                    <h3 className="text-white text-center font-bold">Code</h3>
                  </Box>
                }
              />
              <Tab
                label={
                  <Box className="flex flex-row justify-center items-center gap-1">
                    <TerminalOutlinedIcon className="text-green-700"></TerminalOutlinedIcon>
                    <h3 className="text-white text-center font-bold">
                      Console
                    </h3>
                  </Box>
                }
              />
            </Tabs>
          </Box>
          <Box
            className={`w-full h-full bg-pink-600 ${
              value === 0 ? "block" : "hidden"
            }`}
          >
            {/* ... Editor Component */}
            {/* {value === 0 && (
              <Editor
                className="rounded-lg"
                theme="vs-dark"
                defaultLanguage="cpp"
                defaultValue="//write some code"
                options={{ minimap: { enabled: false } }}
              />
            )} */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
