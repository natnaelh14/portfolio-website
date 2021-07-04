import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__image">
        <div className="intro__imageBack"></div>
        <img className="" src="" alt="" />
      </div>
      <div className="intro__desc">
        <p className="intro__msg">Hi, my name is</p>
        <h1 className="intro__head">Natnael Haile.</h1>
        <h1 className="intro__text">I am a web developer.</h1>
        <a href="#about" className="intro__aboutLink">
          More About Me
        </a>
      </div>
    </div>
  );
}

export default Intro;
