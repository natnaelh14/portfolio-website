import React from "react";
import "./about.css";
import Welcome from "../../Welcome.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="section__heading">About</h1>
      <div className="about__section">
        <div className="about__text">
          Hi, I am Natnael Haile. I am a web developer. I am passionate about
          technology.
        </div>
        <img src={Welcome} alt="" className="about__sectionImage" />
      </div>
      <div className="about__subSection">
        <ul>
          <li className="about__subSectionitem">React</li>
          <li className="about__subSectionitem">Node.js</li>
          <li className="about__subSectionitem">MongoDb</li>
          <li className="about__subSectionitem">Express</li>
          <li className="about__subSectionitem">Redux</li>
          <li className="about__subSectionitem">Django</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
