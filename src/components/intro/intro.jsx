import React from "react";
import "./intro.css";
import HeroImage from "./hero-image.png";

function Intro() {
  return (
    <div className="intro" id="about">
      <div className="intro-image-mobile">
        <img className="hero-image-mobile" src={HeroImage} alt='hero' />
      </div>
      <div className="intro-desc">
        <p className="intro-msg">Hello, my name is</p>
        <h1 className="intro-head">Natnael Haile.</h1>
        <h1 className="intro-text">I am a Full-Stack Web Developer.</h1>
        <a href="#about" className="intro-aboutLink">
          More About Me
        </a>
      </div>
      <div className="intro-image">
        <img className="hero-image" src={HeroImage} alt='hero' />
      </div>
    </div>
  );
}

export default Intro;
