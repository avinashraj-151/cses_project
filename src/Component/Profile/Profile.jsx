import { useContext, useEffect } from "react";
import { Box, Snackbar, Slide } from "@mui/material";
import Userdetail from "./Userdetail";
import Graph from "./Graph";
import Total from "./Total";
import { Context } from "../../Contextapi/Contextapi";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import { Construction } from "@mui/icons-material";
function Profile() {
  const { login, setlogin, username, setusername, setsidebarpage } =
    useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdetails"));
    // console.log(user.username);
    // console.log(user);
    setsidebarpage(1);
    if (user != null && username === "username") {
      // console.log("kam kar raha hai bhai");
      // console.log(username);
      setusername(user.username);
    } else if (user == null) {
      // navigate(Login);
      navigate("/login");
    }
    // if (user != null && username === "username" && user.username == null) {
    //   navigate("/login");
    // } else if (username === "username") {
    //   setusername(user.username);
    // }
  });
  return (
    <>
      {username != "username" && (
        <>
          <Box className="w-full h-full flex-row flex bg-[#1A1A1A] p-7 shadow-xl gap-5">
            <Userdetail></Userdetail>
            <Box className="w-full h-full flex flex-col gap-5 justify-between">
              <Graph></Graph>
              <Total></Total>
            </Box>
          </Box>
          <Snackbar
            open={login}
            autoHideDuration={1000}
            onClose={() => setlogin(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            TransitionComponent={Slide}
            sx={{ width: "100%" }}
          >
            <Box className="bg-white rounded-xl p-4 flex flex-row gap-2">
              {/* <CheckCircleIcon className="text-green-600" /> */}
              <CheckCircleIcon className="text-green-700" />
              {"Login successfully"}
            </Box>
          </Snackbar>
        </>
      )}
    </>
  );
}

export default Profile;
