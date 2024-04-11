import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import UserDetails from "./userDetails";
import Gerneral from "./Gerneral";
import Personal from "./Personal";
import SocialProfile from "./SocialProfile";
import Logininfo from "./Logininfo";
import Professional from "./Professional";
// import { collegedata_ } from "../../Server/Connectdb/Connectdb.js";
const formdata = [
  {
    id: 1,
    component: <Gerneral></Gerneral>,
  },
  {
    id: 2,
    component: <Personal></Personal>,
  },
  {
    id: 3,
    component: <SocialProfile></SocialProfile>,
  },
  {
    id: 4,
    component: <Logininfo></Logininfo>,
  },
  {
    id: 5,
    component: <Professional></Professional>,
  },
];
function EditProfile() {
  // console.log(databases);
  // console.log(collegedata_);
  const [userDetail, setuserDetail] = useState(0);
  const clickuserDetail = (index) => {
    setuserDetail(index);
  };
  return (
    <Box className="w-full h-full flex-row flex bg-[#1A1A1A] p-7 shadow-xl gap-5">
      <Box className="w-72 h-full">
        <UserDetails
          clicked={clickuserDetail}
          selected={userDetail}
        ></UserDetails>
      </Box>
      <Box className=" w-full h-full bg-[#282828] p-5 flex">
        <Box className="">{formdata[userDetail].component}</Box>
      </Box>
    </Box>
  );
}

export default EditProfile;
