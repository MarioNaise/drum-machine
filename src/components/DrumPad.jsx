import React, { useState, useEffect } from "react";
import "../App.css";
import { data } from "../data.js";

export default function DrumPad(props) {
  const [pad] = useState(data.find((pad) => pad.text == props.text));
  const [active, setActive] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });

  const handleKey = (e) => {
    if (e.key.toUpperCase() === props.text) {
      playSound();
    }
  };

  const playSound = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 100);
    const sound = document.getElementById(pad.text);
    sound.play();
    sound.currentTime = 0;
    props.changeDisplay(pad.name);
  };

  return (
    <div
      id={pad.name}
      className="drum-pad flex"
      onClick={playSound}
      style={{
        backgroundColor: active && "orange",
        boxShadow: active && "1px 1px 2px 1px rgba(0,0,0,0.8) inset",
      }}
    >
      <audio className="clip" id={pad.text} src={pad.audio}></audio>
      {props.text}
    </div>
  );
}
