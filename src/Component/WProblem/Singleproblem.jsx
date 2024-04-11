import { Box } from "@mui/material";
import ProblemComp from "./ProblemComp";
const problems = [
  {
    id: 1068,
    problemName: "Weird Algorithm",
    link: "https://cses.fi/problemset/task/1068",
  },
  {
    id: 1083,
    problemName: "Missing Number",
    link: "https://cses.fi/problemset/task/1083",
  },
  {
    id: 1069,
    problemName: "Repetitions",
    link: "https://cses.fi/problemset/task/1069",
  },
  {
    id: 1094,
    problemName: "Increasing Array",
    link: "https://cses.fi/problemset/task/1094",
  },
  {
    id: 1070,
    problemName: "Permutations",
    link: "https://cses.fi/problemset/task/1070",
  },
  {
    id: 1071,
    problemName: "Number Spiral",
    link: "https://cses.fi/problemset/task/1071",
  },
  {
    id: 1072,
    problemName: "Two Knights",
    link: "https://cses.fi/problemset/task/1072",
  },
  {
    id: 1092,
    problemName: "Two Sets",
    link: "https://cses.fi/problemset/task/1092",
  },
  {
    id: 1617,
    problemName: "Bit Strings",
    link: "https://cses.fi/problemset/task/1617",
  },
  {
    id: 1618,
    problemName: "Trailing Zeros",
    link: "https://cses.fi/problemset/task/1618",
  },
  {
    id: 1754,
    problemName: "Coin Piles",
    link: "https://cses.fi/problemset/task/1754",
  },
  {
    id: 1755,
    problemName: "Palindrome Reorder",
    link: "https://cses.fi/problemset/task/1755",
  },
  {
    id: 2205,
    problemName: "Gray Code",
    link: "https://cses.fi/problemset/task/2205",
  },
  {
    id: 2165,
    problemName: "Tower of Hanoi",
    link: "https://cses.fi/problemset/task/2165",
  },
  {
    id: 1622,
    problemName: "Creating Strings",
    link: "https://cses.fi/problemset/task/1622",
  },
  {
    id: 1623,
    problemName: "Apple Division",
    link: "https://cses.fi/problemset/task/1623",
  },
  {
    id: 1624,
    problemName: "Chessboard and Queens",
    link: "https://cses.fi/problemset/task/1624",
  },
  {
    id: 2431,
    problemName: "Digit Queries",
    link: "https://cses.fi/problemset/task/2431",
  },
  {
    id: 1625,
    problemName: "Grid Paths",
    link: "https://cses.fi/problemset/task/1625",
  },
];
function SingleProblem() {
  return (
    <>
      <Box className="w-full h-full">
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
                  <ProblemComp key={problem.id} problem={problem}></ProblemComp>
                </>
              );
            })}
          </Box>
        </Box>
        {/* <Box>.</Box> */}
      </Box>
    </>
  );
}

export default SingleProblem;
