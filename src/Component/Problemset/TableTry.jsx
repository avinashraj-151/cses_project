import React from "react";
import {
  Box,
  Typography,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NotesIcon from "@mui/icons-material/Notes";
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
function TableTry() {
  return (
    <div>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow className="bg-[#2C2C2C]">
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    textTransform: "capitalize",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Problem
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Platform
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Article
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Youtube
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Note
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Revision
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {problems.map((item) => {
                return (
                  <TableRow className="bg-[#1A1A1A]">
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                    >
                      <TaskAltIcon></TaskAltIcon>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                    >
                      {item.problemName}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      Platform
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                    >
                      <ArticleIcon></ArticleIcon>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      <YouTubeIcon className="text-red-600"></YouTubeIcon>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                    >
                      <NotesIcon></NotesIcon>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                    >
                      Revision
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default TableTry;
