import "./App.css";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function App() {
  const [hr, setHr] = useState(new Date().getHours());
  const [min, setMin] = useState(new Date().getMinutes());
  const [sec, setSec] = useState(new Date().getSeconds());

  const [color1, setColor1] = useState("#00E1FF");
  const [color2, setColor2] = useState("#04FF00");
  const [color3, setColor3] = useState("#FF0000");

  setInterval(() => {
    setHr(new Date().getHours());
    setMin(new Date().getMinutes());
    setSec(new Date().getSeconds());
  }, 1000);
  return (
    <div className="App">

      <div className="time">
        <CircularProgressbar
          className="aaaa"
          text={hr === 0 || hr === 1 ? hr + " Hour" : hr + " Hours"}
          value={(hr * 100) / 24}
          background
          backgroundPadding={8}
          styles={buildStyles({
            textSize: "10px",
            pathColor: color1,
            trailColor: "rgba(62, 222,250 ,0.2)",
            backgroundColor: "rgba(0, 0,0)",
          })}
        />

        <CircularProgressbar
          className="aaaa"
          text={min === 0 || min === 1 ? min + " Minute" : min + " Minutes"}
          value={(min * 100) / 60}
          background
          backgroundPadding={8}
          styles={buildStyles({
            textSize: "10px",
            pathColor: color2,
            trailColor: "rgba(0, 256,0 ,.2)",
            backgroundColor: "rgba(0, 0, 0)",
          })}
        />
        <CircularProgressbar
          className="aaaa"
          text={sec === 0 || sec === 1 ? sec + " Second" : sec + " Seconds"}
          value={(sec * 100) / 60}
          background
          backgroundPadding={8}
          styles={buildStyles({
            textSize: "10px",
            pathColor: color3,
            trailColor: "rgba(256, 0, 1,.2)",
            backgroundColor: "rgba(0, 0, 0)",
          })}
        />
      </div>
<br></br>
      <div className="inputs">
        <input
        className="input"
          type="color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
        <input
        className="input"

          type="color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />{" "}
        <input
        className="input"

          type="color"
          value={color3}
          onChange={(e) => setColor3(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
