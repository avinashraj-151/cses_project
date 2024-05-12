import { Box } from "@mui/material";
import ProblemComponent from "./ProblemComponent";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../Contextapi/Contextapi";
import { Context1 } from "./Contexapi";

function Allproblem({ problemset_name }) {
  const [problems, setproblems] = useState([]);
  const { settotal_problem } = useContext(Context1);
  const { username } = useContext(Context);
  const [solvedproblem, setsolvedproblem] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/problemset/singleproblem/${problemset_name}`
        );
        setproblems(res.data);
        settotal_problem(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    fetch_data();
  }, []);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `http://localhost:4000/auth/problemset/${username}`
      );
      if (response.data.message) {
        setsolvedproblem(response.data.message);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <Box className="w-full h-full">
        <Box className="flex flex-col border-2 border-[#363636] rounded-lg mb-20">
          <Box>
            <Box className="flex flex-row justify-between bg-[#2B2C2D] text-white p-4 rounded-lg">
              <Box className="w-[8%]">
                <h4>Status</h4>
              </Box>
              <Box className="w-[50%] text-center">
                <h4>Problem</h4>
              </Box>
              <Box className="w-[40%]">
                <Box className="flex flex-row justify-between items-center text-center">
                  <Box>
                    <h4>Platform</h4>
                  </Box>
                  <Box>
                    <h4>Article</h4>
                  </Box>
                  <Box>
                    <h4>Youtube</h4>
                  </Box>
                  <Box>
                    <h4>Note</h4>
                  </Box>
                  <Box>
                    <h4>Revision</h4>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            {problems.map((problem) => {
              return (
                <ProblemComponent
                  problem={problem}
                  key={problem._id}
                  solvedproblem={solvedproblem}
                ></ProblemComponent>
              );
            })}
          </Box>
        </Box>
        {/* <Box>.</Box> */}
      </Box>
    </>
  );
}

export default Allproblem;
