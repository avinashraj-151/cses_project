import { Box, Divider } from "@mui/material";
import { collegedata, countrydata } from "../../Data/College.js";
function Personal() {
  return (
    <div>
      <Box>
        <Box className="mb-3 text-white text-xl">
          <h1>Personal Information</h1>
        </Box>
        <Divider></Divider>
      </Box>
      <Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Email</h3>
          <input
            type="email"
            placeholder="Enter your email address"
            className="outline-none focus:border-green-500 focus:border-b-4 duration-300  bg-white rounded-lg  text-sm px-5 py-2 w-80   border-yellow-500 transition-all"
          ></input>
        </Box>
        <Box className="flex flex-col gap-1 pt-3">
          <h3 className="text-white">Country Name</h3>
          <select className="outline-none focus:border-green-500 focus:border-b-4 duration-300 bg-white rounded-lg text-sm px-5 py-2 w-96 transition-all ">
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
          <select className="outline-none focus:border-green-500 focus:border-b-4 duration-300 bg-white rounded-lg text-sm px-5 py-2 w-96 transition-all ">
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
          <button className="bg-yellow-300 px-6 py-2 rounded-xl text-center text-pretty hover:bg-[#FFA116] text-black">
            Save
          </button>
        </Box>
      </Box>
    </div>
  );
}

export default Personal;
