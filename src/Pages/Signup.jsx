import React, { useState } from "react";
import { Box, Snackbar, Slide } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const input_css =
  "bg-transparent border-[ #e0e0e0] border-2 outline-none p-2 w-full h-full rounded-lg text-white  hover:border-[#4D78A4] focus:shadow-md focus:shadow-[#FFAF38] transition-all duration-300 ";
function Loginpage() {
  const [Userdetails, Setuserdetails] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
  });
  const navigate = useNavigate();

  const [opensnack, setopensnack] = useState(false);
  const [snackmessage, setsnackmessage] = useState("");
  function handelchange(event) {
    // console.log(event.target.name);
    Setuserdetails({
      ...Userdetails,
      [event.target.name]: event.target.value,
    });
  }
  const validation = function () {
    Userdetails.username = Userdetails.username.trim();
    if (Userdetails.username.length < 5) {
      if (Userdetails.username.length == 0) {
        setsnackmessage("Password cannot be empty");
        setopensnack(true);
        return false;
      } else {
        setsnackmessage("Username must be atleast 5 characters long");
        setopensnack(true);
        return false;
      }
    } else if (Userdetails.email.trim().length == 0) {
      setsnackmessage("email cannot be empty");
      setopensnack(true);
      return false;
    } else if (Userdetails.username.length > 15) {
      setsnackmessage("Username must not be more than 15 characters long");
      setopensnack(true);
      return false;
    } else if (Userdetails.password.length < 8) {
      if (Userdetails.password.length == 0) {
        setsnackmessage("Password cannot be empty");
        setopensnack(true);
        return false;
      } else {
        setsnackmessage("Password must be at least 8 characters");
        setopensnack(true);
        return false;
      }
    } else if (Userdetails.password.length > 15) {
      setsnackmessage("Password must not be more than 15 characters long");
      setopensnack(true);
      return false;
    } else if (Userdetails.password !== Userdetails.confirmpassword) {
      setsnackmessage("Passwords do not match");
      setopensnack(true);
      return false;
    }
    return true;
  };
  function handelsubmit(event) {
    event.preventDefault();
    if (validation()) {
      // console.log("submit");
      const checkuser = async () => {
        const usernamecheck = await axios.get(
          `http://localhost:4000/auth/signup/checkusername/${Userdetails.username}`
        );
        // console.log(usernamecheck.data.message);
        var usermessage = usernamecheck.data.message;
        if (usermessage) {
          if (usermessage == "User name already exist") {
            setsnackmessage(usermessage);
            setopensnack(true);
            return false;
          } else {
            return true;
          }
        }
      };
      const emailcheck = async () => {
        const emailcheck = await axios.get(
          `http://localhost:4000/auth/signup/checkemail/${Userdetails.email}`
        );
        var emailmessage = emailcheck.data.message;
        if (emailmessage) {
          if (emailmessage == "User email already exist") {
            setsnackmessage(emailmessage);
            setopensnack(true);
            return false;
          } else {
            return true;
          }
        }
      };
      const finallycheck = async () => {
        const usercheck = await checkuser();
        if (usercheck) {
          const emailcheck1 = await emailcheck();
          if (emailcheck1) {
            // console.log("singup time baby");
            const signup = async () => {
              const response = await axios.post(
                `http://localhost:4000/auth/signup`,
                {
                  username: Userdetails.username,
                  email: Userdetails.email,
                  password: Userdetails.password,
                }
              );
              if (response) {
                localStorage.setItem(
                  "userdetails",
                  JSON.stringify({
                    username: Userdetails.username,
                    email: Userdetails.email,
                  })
                );
                Setuserdetails({
                  email: "",
                  password: "",
                  confirmpassword: "",
                  username: "",
                });
                navigate("/profile");
              }
            };
            signup();
          }
        }
        // console.log(usercheck)
      };
      finallycheck();
    }
  }
  return (
    <div className="w-full h-full bg-[#1A1A1A] p-7 ">
      <Box className="w-full h-full  flex justify-center ">
        <Box className="bg-[#282828] text-center flex  flex-col w-96 p-7">
          <h1 className="text-xl text-white p-4">
            Ready to Begin Your Journey with
          </h1>
          <h2 className="text-[#FFAF38] text-4xl font-black mb-3">
            Codiowhizz
          </h2>
          <form className="flex flex-col gap-2 p-4" onSubmit={handelsubmit}>
            <Box className="mb-4">
              <input
                type="text"
                className={input_css}
                placeholder="username"
                name="username"
                onChange={handelchange}
                value={Userdetails.username}
              ></input>
            </Box>
            <Box className="mb-4">
              <input
                type="email"
                className={input_css}
                placeholder="email"
                name="email"
                onChange={handelchange}
                value={Userdetails.email}
              ></input>
            </Box>
            <Box className="mb-4">
              <input
                type="password"
                className={input_css}
                placeholder="password"
                name="password"
                onChange={handelchange}
                value={Userdetails.password}
              ></input>
            </Box>
            <Box className="mb-4">
              <input
                type="password"
                className={input_css}
                placeholder="Confirm password"
                name="confirmpassword"
                onChange={handelchange}
                value={Userdetails.confirmpassword}
              ></input>
            </Box>
            <Box>
              <button
                type="submit"
                className="bg-[#FFAF38] w-full h-full rounded-lg p-1 text-white hover:bg-[#FFAF38] opacity-85 hover:opacity-100 justify-center items-center flex"
              >
                Verify and Sign up
              </button>
            </Box>
            <Box>
              <h1 className="text-white">
                Already have an account?
                <span className="text-[#FFAF38] cursor-pointer ml-1">
                  <Link to="/login">Sign in</Link>
                </span>
              </h1>
            </Box>
          </form>
        </Box>
      </Box>
      <Snackbar
        open={opensnack}
        autoHideDuration={2000}
        onClose={() => setopensnack(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Slide}
        sx={{ width: "100%" }}
      >
        <Box className="bg-white rounded-xl p-4 flex flex-row gap-2">
          {/* <CheckCircleIcon className="text-green-600" /> */}
          <CancelIcon className="text-red-700" />
          {snackmessage}
        </Box>
      </Snackbar>
    </div>
  );
}

export default Loginpage;
