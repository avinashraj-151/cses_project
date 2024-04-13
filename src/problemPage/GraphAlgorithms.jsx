import React, { useEffect, useState } from "react";
import Probleset from "../Component/Problemset/Probleset";
function GraphAlgorithms() {
  const [Introductory_solved, setIntroductory_solved] = useState(0);
  useEffect(() => {});
  return <Probleset problemset_name={"Graph Algorithms"}></Probleset>;
}

export default GraphAlgorithms;
