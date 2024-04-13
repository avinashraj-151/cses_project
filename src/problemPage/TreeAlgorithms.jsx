import React, { useEffect, useState } from "react";
import Probleset from "../Component/Problemset/Probleset";
function DynamicProgramming() {
  const [Introductory_solved, setIntroductory_solved] = useState(0);
  useEffect(() => {});
  return <Probleset problemset_name={"Tree Algorithms"}></Probleset>;
}

export default DynamicProgramming;
