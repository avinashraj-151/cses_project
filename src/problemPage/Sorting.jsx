import React, { useEffect, useState } from "react";
import Probleset from "../Component/Problemset/Probleset";
function Sorting() {
  const [Introductory_solved, setIntroductory_solved] = useState(0);
  useEffect(() => {});
  return <Probleset problemset_name={"Sorting and Searching"}></Probleset>;
}

export default Sorting;
