import { createContext, useState, useRef } from "react";
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [total_problem, settotal_problem] = useState("");
  const ContextValue = {
    total_problem,
    settotal_problem,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
