import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <div className="cursor-pointer">
      <div style={{ width: "150px" }}>
        <CircularProgressbar
          value={2}
          text={`${2}%`}
          styles={buildStyles({
            textColor: "#FFFFFF",
            // pathColor: "#000000",
            pathColor: "#FFA116",
            trailColor: "#111111",
            // backgroundColor: "rgba(255, 255, 255, 0.1)",
          })}
        />
      </div>
    </div>
  );
}

export default App;
