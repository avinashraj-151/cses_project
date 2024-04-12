import { Box } from "@mui/material";
import ProblemComp from "./ProblemComp";
import { useEffect, useState } from "react";
import axios from "axios";
function SingleProblem({ loading, randomproblem }) {
  const [problems, setproblems] = useState([]);
  // const [loading, setloading] = useState(true);
  const handlePickOne = () => {
    const randomIndex = Math.floor(Math.random() * problems.length);
    randomproblem(problems[randomIndex]);
  };
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/problemset/all");
        setproblems(res.data);
        loading(false);
      } catch (err) {}
    };
    fetch_data();
  }, []);
  return (
    <>
      <Box className="w-full h-full">
        {problems.length > 0 && (
          <Box className="flex flex-col border-2 border-[#363636] rounded-lg">
            <Box>
              <Box className="flex flex-row justify-between bg-[#2B2C2D] text-white p-4 rounded-lg">
                <Box className="w-[8%]">
                  <h4 className="text-sm">Status</h4>
                </Box>
                <Box className="w-[50%] text-center text-sm">
                  <h4>Problem</h4>
                </Box>
                <Box className="w-[40%]">
                  <Box className="flex flex-row justify-between items-center text-center text-sm">
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
                  <>
                    <ProblemComp
                      key={problem._id}
                      problem={problem}
                    ></ProblemComp>
                  </>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default SingleProblem;
