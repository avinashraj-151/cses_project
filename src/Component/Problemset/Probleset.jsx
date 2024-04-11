import Header from "./Header";
import { Box } from "@mui/material";
import Allproblem from "./Allproblem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Probleset() {
  return (
    <>
      <Box className="p-7 bg-[#1A1A1A] w-full h-full flex flex-col gap-6 overflow-auto scrollbar-thin">
        <Box>
          <button className="flex flex-row bg-[#343B3F]  text-white p-2 gap-3 rounded-lg">
            <Box>
              <ArrowBackIcon />
            </Box>
            <h4>back to home</h4>
          </button>
        </Box>
        <Header></Header>
        <Allproblem></Allproblem>
      </Box>
    </>
  );
}

export default Probleset;
