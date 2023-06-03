import React, { useState } from "react";
import { data } from "./data.js";
import DrumPad from "./components/DrumPad.jsx";

export default function App() {
  const [display, setDisplay] = useState("");
  const [timeout, setTOut] = useState(null);

  const changeDisplay = (name) => {
    clearTimeout(timeout);
    setDisplay(name);
    setTOut(
      setTimeout(() => {
        setDisplay("");
      }, 1000)
    );
  };

  return (
    <div id="drum-machine">
      <div id="pads">
        {data.map((pad) => {
          return (
            <DrumPad
              changeDisplay={changeDisplay}
              key={pad.text}
              text={pad.text}
            />
          );
        })}
      </div>
      <div id="display" className="flex">
        {display || ""}
      </div>
    </div>
  );
}
