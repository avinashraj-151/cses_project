import React, { useState, useContext } from "react";
import { Box, Divider } from "@mui/material";
import axios from "axios";
import { Context } from "../../Contextapi/Contextapi";
function SocialProfile() {
  const [SocialProfile_1, setSocialProfile] = useState({
    other: "",
    twitter: "",
    linkedin: "",
    github: "",
  });
  const { username } = useContext(Context);
  function handelchange(event) {
    setSocialProfile({
      ...SocialProfile_1,
      [event.target.name]: event.target.value,
    });
  }
  async function handelSubmit(event) {
    event.preventDefault();
    // console.log(SocialProfile_1);
    const featchdata = await axios.post(
      `http://localhost:4000/auth/SocialInfo/${username}`,
      SocialProfile_1
    );
    // console.log(featchdata.data.message);
    if (featchdata.data.message) {
    }
  }
  return (
    <div>
      <Box>
        <Box className="mb-3 text-white text-xl">
          <h1>Social Links</h1>
        </Box>
        <Divider></Divider>
      </Box>
      <form onSubmit={handelSubmit}>
        <Box className="text-sm">
          <Box className="flex flex-col gap-1 pt-3">
            <h3 className="text-white">Github</h3>
            <input
              type="text"
              name="github"
              placeholder="Enter your Github link here"
              className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
              value={SocialProfile_1.github}
              onChange={handelchange}
            ></input>
          </Box>
          <Box className="flex flex-col gap-1 pt-3">
            <h3 className="text-white">LinkedIn</h3>
            <input
              type="text"
              placeholder="Enter your LinkedIn link here"
              name="linkedin"
              className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
              value={SocialProfile_1.linkedin}
              onChange={handelchange}
            ></input>
          </Box>
          <Box className="flex flex-col gap-1 pt-3">
            <h3 className="text-white">Twitter</h3>
            <input
              type="text"
              name="twitter"
              placeholder="Enter your Twitter link here"
              className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
              value={SocialProfile_1.twitter}
              onChange={handelchange}
            ></input>
          </Box>
          <Box className="flex flex-col gap-1 pt-3">
            <h3 className="text-white">Other</h3>
            <input
              type="url"
              name="other"
              placeholder="Enter your Other link here"
              className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
              value={SocialProfile_1.other}
              onChange={handelchange}
            ></input>
          </Box>
          <Box className="py-3 mt-4">
            <button
              type="submit"
              className="bg-yellow-300 px-6 py-2 rounded-xl text-center text-pretty hover:bg-[#FFA116] text-black"
            >
              Save
            </button>
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default SocialProfile;
