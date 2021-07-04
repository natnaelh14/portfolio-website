import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-desc">
        <p className="intro-msg">Hello, my name is</p>
        <h1 className="intro-head">Natnael Haile.</h1>
        <h1 className="intro-text">I am a web developer.</h1>
        <a href="#about" className="intro-aboutLink">
          More About Me
        </a>
      </div>
    </div>
  );
}

export default Intro;
