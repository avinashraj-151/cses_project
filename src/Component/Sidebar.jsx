import { useEffect, useState } from "react";
import logo from "../assert/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import { Avatar, Typography } from "@mui/material";
import profile from "../assert/perfect.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import { Client } from "../Server/Connectdb/Connectdb.js";
const Menu_detail = [
  {
    title: "Home",
    icon: <HomeIcon className="text-center flex items-center justify-center" />,
    link: "/",
  },
  {
    title: "Profile",
    icon: <AccountCircleOutlinedIcon />,
    link: "/profile",
  },
  {
    title: "Problemset",
    icon: <AssignmentOutlinedIcon />,
    link: "/problems",
  },
  {
    title: "Blog",
    icon: <CardTravelOutlinedIcon />,
    link: "/blog",
  },
  {
    title: "Saved Notes",
    icon: <BookOutlinedIcon />,
    link: "/savednotes",
  },
  {
    title: "Login",
    icon: <LogoutIcon />,
    link: "/login",
  },
];
function Sidebar() {
  const [open, setopen] = useState(false);
  const [Selected, setSelected] = useState(0);
  return (
    <div className="flex ">
      <div className="bg-[#282828] h-screen flex justify-between flex-col">
        <div
          className={`flex flex-col  ${
            open === true ? "w-25" : "w-64"
          } p-5 relative duration-200`}
        >
          <div>
            <ArrowLeftIcon
              className={` bg-white text-xl absolute -right-3 cursor-pointer top-9 borderrounded-full  border-[rgb(17,17,17)] ${
                open === true ? "rotate-180" : ""
              }`}
              onClick={() => {
                setopen(!open);
              }}
            />
          </div>
          <div className="p-2  w-full">
            {/* logo */}
            <div className="flex justify-center items-center justify-items-center">
              <img
                src={logo}
                className={`${open === true ? "w-10 h-10" : "w-24 h-24"}`}
                alt="logo"
              ></img>
            </div>
          </div>
          {/* list  alignment */}
          <div className="mt-8 flex flex-col">
            {Menu_detail.map((item, index) => {
              return (
                <Link to={item.link} key={index}>
                  <div
                    className={`text-gray-300 text-balance flex gap-x-4 p-2 items-center  justify-items-center justify-self-center rounded-md cursor-pointer mt-2  ${
                      Selected === index ? "bg-[#E25C5A]" : "hover:bg-zinc-700 "
                    }`}
                    onClick={() => {
                      // console.log(index);
                      setSelected(index);
                    }}
                  >
                    <span
                      className={`text-center px-2 ${
                        Selected === index ? "animate-pulse" : " "
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`font-medium ${open === true ? "hidden" : ""}`}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-yellow-400 p-5  gap-x-3 flex items-center text-center">
          <Avatar
            src={profile}
            sx={{ width: 56, height: 56 }}
            className="border-yellow-500 border-2 cursor-pointer hover:border-white"
          ></Avatar>
          <Typography
            className={`font-medium text-center flex items-center justify-center ${
              open === true ? "hidden" : ""
            }`}
          >
            AvinashRaj
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
