import { createContext, useState, useRef } from "react";

//create contextapi
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [username, setusername] = useState("username");
  const [login, setlogin] = useState(false);
  const [sidebarpage, setsidebarpage] = useState(0);
  const [profile1, setprofile1] = useState(false);
  const ContextValue = {
    username,
    setusername,
    login,
    setlogin,
    sidebarpage,
    setsidebarpage,
    profile1,
    setprofile1,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
