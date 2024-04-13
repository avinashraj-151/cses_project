import React, { useEffect, useState } from "react";
import Probleset from "../Component/Problemset/Probleset";
function IntroductoryProblems() {
  const [Introductory_solved, setIntroductory_solved] = useState(0);
  useEffect(() => {});
  return <Probleset problemset_name={"Introductory Problems"}></Probleset>;
}

export default IntroductoryProblems;
