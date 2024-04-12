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
          <Route path="/login" element={<Signin />} />
          <Route path="/sigup" element={<Signup />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        {/* <Signin /> */}
      </div>
    </>
  );
}

export default App;
