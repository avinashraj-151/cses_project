import { useEffect, useState, useContext } from "react";
import { Box } from "@mui/material";
import { Context } from "../../Contextapi/Contextapi";
import sticker2 from "../../assert/Second.png";
import sticker1 from "../../assert/first.png";
import sticker3 from "../../assert/third.png";
import sticker4 from "../../assert/fourth.png";
import sticker5 from "../../assert/fifth.png";
import coin from "../../assert/coin.png";

export const Blog = () => {
  const { setusername, setsidebarpage } = useContext(Context);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdetails"));
    // console.log(user.username);
    // console.log(user);
    if (user != null) {
      setusername(user.username);
    }
    setsidebarpage(3);
  });
  const tryone = [
    {
      id: 1,
      image: sticker1,
      title: "First",
      description: "This is the first sticker",
      coin: 500,
    },
    {
      id: 2,
      image: sticker2,
      title: "Second",
      description: "This is the second sticker",
      coin: 200,
    },
    {
      id: 3,
      image: sticker3,
      title: "Third",
      description: "This is the third sticker",
      coin: 300,
    },
    {
      id: 4,
      image: sticker4,
      title: "Fourth",
      description: "This is the fourth sticker",
      coin: 400,
    },
    {
      id: 5,
      image: sticker5,
      title: "First",
      description: "This is the first sticker",
      coin: 600,
    },
  ];
  return (
    <Box className="w-full h-full flex-row gap-3 flex p-7 bg-[#1A1A1A] overflow-auto scrollbar-thin">
      <Box className="flex flex-col">
        <Box className="grid grid-cols-3 gap-4">
          {tryone.map((item, index) => {
            return (
              <Box className="grid grid-cols-3 grid-flow-row">
                <Box className="w-80 h-96 bg-white flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-slate-400">
                  <img src={item.image} className="w-70"></img>
                  <Box className="w-full h-full flex flex-row justify-between items-center">
                    <Box>
                      <h1 className="text-black text-center text-xl">
                        Exclusive Profile Look
                      </h1>
                    </Box>
                    <Box>
                      <button className="flex flex-row gap-2 items-center justify-center bg-[#EC971F] p-2 rounded-lg text-white">
                        {item.coin} <img src={coin} className="w-4 h-4"></img>
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

{
  /* <Box className="w-1/2">
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
      </Box> */
}
{
  /* <Box className="w-1/2">
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
            {/* ... Editor Component */
}
{
  /* {value === 0 && (
              <Editor
                className="rounded-lg"
                theme="vs-dark"
                defaultLanguage="cpp"
                defaultValue="//write some code"
                options={{ minimap: { enabled: false } }}
              />
            )}
          </Box>
        </Box>
      </Box> */
}

// <Box className="w-96 h-96 bg-white flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-slate-400">
//           <img src={sticker} className="w-80"></img>
//           <Box className="w-full h-full flex flex-row justify-between items-center">
//             <Box>
//               <h1 className="text-black text-center text-xl">New Sticker</h1>
//             </Box>
//             <Box>
//               <button className="flex flex-row gap-2 items-center justify-center bg-[#EC971F] p-2 rounded-lg text-white">
//                 100 <img src={coin} className="w-4 h-4"></img>
//               </button>
//             </Box>
//           </Box>
//         </Box>
