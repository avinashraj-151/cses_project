import { Box, Pagination } from "@mui/material";
import ProblemComp from "./ProblemComp";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const csesTopics = [
  "Introductory Problems",
  "Sorting and Searching",
  "Dynamic Programming",
  "Graph Algorithms",
  "Range Queries",
  "Tree Algorithms",
  "Mathematics",
  "String Algorithms",
  "Geometry",
  "Advanced Techniques",
  "Additional Problems",
];

function SingleProblem({ loading, handelpickone }) {
  const [problems, setproblems] = useState([]);
  const [page, setPage] = useState(1);
  const componentRef = useRef(null);
  function handleChange(event, value) {
    // console.log(value);
    setPage(value);
    componentRef.current.scrollIntoView({ behavior: "smooth" });
    // handelpickone(value);
  }
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/problemset/${page}`
        );
        setproblems(res.data);
        // console.log(res.data);
        handelpickone(res.data);
        loading(false);
      } catch (err) {}
    };
    fetch_data();
  }, [page]);
  return (
    <>
      <Box ref={componentRef} className="w-full h-full">
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
        {problems.length > 0 && (
          <>
            <Box className="p-1">
              <Pagination
                count={15} // Total number of pages
                page={page}
                onChange={handleChange}
                // count={10}
                size="large"
                shape="rounded"
                sx={{
                  margin: "20px auto",
                  "& .MuiPaginationItem-root": {
                    fontSize: "1.2rem",
                    color: "white",
                    borderColor: "wheat",
                    backgroundColor: "#3A3A3A",
                    "&:hover": {
                      backgroundColor: "#282828",
                    },
                  },
                }}
                className="flex justify-end items-end justify-items-end"
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
export default SingleProblem;
