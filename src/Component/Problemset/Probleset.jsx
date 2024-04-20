import Header from "./Header";
import { Box } from "@mui/material";
import Allproblem from "./Allproblem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import ContextProvider from "./Contexapi";
function Probleset({ problemset_name }) {
  return (
    <>
      <ContextProvider>
        <Box className="p-7 bg-[#1A1A1A] w-full h-full flex flex-col gap-6 overflow-auto scrollbar-thin">
          <Header problemset_name={problemset_name}></Header>
          <Allproblem problemset_name={problemset_name}></Allproblem>
        </Box>
      </ContextProvider>
    </>
  );
}

export default Probleset;
