import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Problems from "./Pages/Problems";
import ProfilePage from "./Pages/ProfilePage";
import SingleProblem from "./Pages/SingleProblem";
import Sidebar from "./Component/Sidebar";
import EditProfile from "./Component/Edit profile/EditProfile";
import Pagenotfound from "./Pages/Pagenotfound";
import { Blog } from "./Component/Blog/Blog";
import SavedNote from "./Component/SavedNote/SavedNote";
import Signup from "./Pages/Signup";
import Signin from "./Component/Login/Signin";
import IntroductoryProblems from "./problemPage/IntroductoryProblems";
import Sorting from "./problemPage/Sorting";
import Dynamic from "./problemPage/Dynamic";
import Graph from "./problemPage/GraphAlgorithms";
import RangeQueries from "./problemPage/RangeQueries";
import TreeAlgorithms from "./problemPage/TreeAlgorithms";
import Mathematics from "./problemPage/Mathematics";
import StringAlgorithms from "./problemPage/StringAlgorithms";
import Geometry from "./problemPage/Geometry";
import AdvancedTechniques from "./problemPage/AdvancedTechniques";
import AdditionalProblems from "./problemPage/AdditionalProblems";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen flex-1">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problem" element={<SingleProblem />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/savednotes" element={<SavedNote></SavedNote>} />
          <Route
            path="/single/Introductory Problems"
            element={<IntroductoryProblems></IntroductoryProblems>}
          />
          <Route
            path="/single/Sorting and Searching"
            element={<Sorting></Sorting>}
          />
          <Route
            path="/single/Dynamic Programming"
            element={<Dynamic></Dynamic>}
          />
          <Route path="/single/Graph Algorithms" element={<Graph></Graph>} />
          <Route path="/single/Range Queries" element={<RangeQueries />} />
          <Route path="/single/Tree Algorithms" element={<TreeAlgorithms />} />
          <Route path="/single/Mathematics" element={<Mathematics />} />
          <Route
            path="/single/String Algorithms"
            element={<StringAlgorithms />}
          />
          <Route path="/single/Geometry" element={<Geometry />} />
          <Route
            path="/single/Advanced Techniques"
            element={<AdvancedTechniques />}
          />
          <Route
            path="/single/Additional Problems"
            element={<AdditionalProblems />}
          />
          <Route path="/login" element={<Signin />} />
          <Route path="/sigup" element={<Signup />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        {/* <SingleProblem /> */}
        {/*  */}
      </div>
    </>
  );
}

export default App;
