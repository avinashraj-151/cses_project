import { Box, Divider, Snackbar, Slide } from "@mui/material";
import { collegedata, countrydata } from "../../Data/College.js";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function Personal() {
  const [personaldetails, setpersonaldetails] = useState({
    email: "",
    Country_Name: "",
    College: "",
  });
  const [opensnack, setopensnack] = useState(false);
  const [snackmessage, setsnackmessage] = useState("");
  function handelPersonalinfo(e) {
    e.preventDefault();
    setopensnack(true);
    setsnackmessage("Personal info updated");
    // console.log("kam kar raha");
  }
  function handelchange(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setpersonaldetails({
      ...personaldetails,
      [e.target.name]: e.target.value,
    });
    // console.log(personaldetails);
  }
  return (
    <div>
      <Box>
        <Box className="mb-3 text-white text-xl">
          <h1>Personal Information</h1>
        </Box>
        <Divider></Divider>
      </Box>
      <Box>
        <form onSubmit={handelPersonalinfo}>
          <Box className="flex flex-col gap-1 pt-3">
            <h3 className="text-white">Email</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
              value={personaldetails.email}
              disabled
            ></input>
          </Box>
          <Box className="flex flex-col gap-1 pt-3">
            <h3 className="text-white">Country Name</h3>
            <select
              name="Country_Name"
              className="outline-none focus:border-green-500 focus:border-b-4 duration-300 bg-white rounded-lg text-sm px-5 py-2 w-96 transition-all "
              onChange={handelchange}
            >
              {/* <option value="">Choose your College</option> */}
              {/* Choose your country */}
              <option value="Choose your country">Choose your country</option>
              {countrydata.map((Country) => (
                // console.log(Country)
                <option
                  value={Country.name}
                  className="overflow-auto scrollbar-webkit"
                  key={Country.id}
                >
                  {Country.name}
                </option>
              ))}
            </select>
          </Box>
          <Box className="flex flex-col gap-1 pt-3">
            <h3 className="text-white">College</h3>
            <select
              name="College"
              className="outline-none focus:border-green-500 focus:border-b-4 duration-300 bg-white rounded-lg text-sm px-5 py-2 w-96 transition-all "
              onChange={handelchange}
            >
              {/* <option value="">Choose your College</option> */}
              <option value="Choose your college">Choose your college</option>
              {collegedata.map((college1) => (
                <option
                  value={college1.name}
                  className="overflow-auto scrollbar-webkit"
                  key={college1.id}
                >
                  {college1.name}
                </option>
              ))}
            </select>
          </Box>
          <Box className="py-3 mt-4">
            <button
              type="submit"
              className="bg-yellow-300 px-6 py-2 rounded-xl text-center text-pretty hover:bg-[#FFA116] text-black"
            >
              Save
            </button>
          </Box>
        </form>
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
          <CheckCircleIcon className="text-green-700" />
          {snackmessage}
        </Box>
      </Snackbar>
    </div>
  );
}

export default Personal;
