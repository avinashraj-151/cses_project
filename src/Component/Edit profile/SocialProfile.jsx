import React, { useState, useContext, useEffect } from "react";
import { Box, Divider, Snackbar, Slide } from "@mui/material";
import axios from "axios";
import { Context } from "../../Contextapi/Contextapi";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function SocialProfile() {
  const [SocialProfile_1, setSocialProfile] = useState({
    other: "",
    twitter: "",
    linkedin: "",
    github: "",
  });
  const [opensnack, setopensnack] = useState(false);
  const [snackmessage, setsnackmessage] = useState("");
  const [disabled, setdisabled] = useState(true);
  const { username } = useContext(Context);
  function handelchange(event) {
    setdisabled(false);
    setSocialProfile({
      ...SocialProfile_1,
      [event.target.name]: event.target.value,
    });
  }
  useEffect(() => {
    const Featch_data = async () => {
      const response = await axios.get(
        `http://localhost:4000/auth/SocialInfo/${username}`
      );
      if (response.data.message === "Couldn't find") {
        setopensnack(true);
        setsnackmessage("Couldn't find server problem");
      } else if (response.data.message) {
        setSocialProfile({
          other: response.data.message.Other,
          twitter: response.data.message.Twitter,
          linkedin: response.data.message.LinkedIn,
          github: response.data.message.Github,
        });
      }
    };
    Featch_data();
  }, []);
  async function handelSubmit(event) {
    event.preventDefault();
    // console.log(SocialProfile_1);
    const featchdata = await axios.post(
      `http://localhost:4000/auth/SocialInfo/${username}`,
      SocialProfile_1
    );
    // console.log(featchdata.data.message);
    if (featchdata.data.message === "updated") {
      // console.log(featchdata.data.message);
      setopensnack(true);
      setsnackmessage("Social info updated");
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
              className={`outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80  border-yellow-500 transition-all`}
              value={SocialProfile_1.other}
              onChange={handelchange}
            ></input>
          </Box>
          <Box className="py-3 mt-4">
            <button
              type="submit"
              className="bg-yellow-300 px-6 py-2 rounded-xl text-center text-pretty hover:bg-[#FFA116] text-black"
              disabled={disabled}
            >
              Save
            </button>
          </Box>
        </Box>
      </form>
      <Snackbar
        open={opensnack}
        autoHideDuration={1000}
        onClose={() => setopensnack(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Slide}
        sx={{ width: "100%" }}
      >
        <Box className="bg-white rounded-xl p-4 flex flex-row gap-2">
          {/* <CheckCircleIcon className="text-green-600" /> */}
          <CheckCircleIcon className="text-green-700" />
          {snackmessage}
        </Box>
      </Snackbar>
    </div>
  );
}

export default SocialProfile;
