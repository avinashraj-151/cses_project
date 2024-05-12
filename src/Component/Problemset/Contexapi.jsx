import { createContext, useState, useRef } from "react";
export const Context1 = createContext();
const ContextProvider = ({ children }) => {
  const [total_problem, settotal_problem] = useState("");
  const [challengesSolved, setchallengesSolved] = useState(0);
  const ContextValue = {
    total_problem,
    settotal_problem,
    challengesSolved,
    setchallengesSolved,
  };
  return <Context1.Provider value={ContextValue}>{children}</Context1.Provider>;
};

export default ContextProvider;
