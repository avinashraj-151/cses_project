import { createContext, useState, useRef } from "react";

//create contextapi
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [username, setusername] = useState("username");
  const [sidebarpage, setsidebarpage] = useState(0);
  const ContextValue = {
    username,
    setusername,
    sidebarpage,
    setsidebarpage,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
