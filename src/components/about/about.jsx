import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="section-heading">About</h1>
      <div className="about-section">
        <div className="about-text">
          Hi, I am Natnael Haile. I am a web developer. I am passionate about
          technology.
        </div>
      </div>
      <br />
      <br />
      <div className="about-subSection">
        <ul>
          <li className="about-subSectionitem">HTML/CSS</li>
          <li className="about-subSectionitem">jQuery</li>
          <li className="about-subSectionitem">JavaScript</li>
          <li className="about-subSectionitem">React/Redux</li>
          <li className="about-subSectionitem">Node.js</li>
          <li className="about-subSectionitem">MongoDb</li>
          <li className="about-subSectionitem">Express</li>
          <li className="about-subSectionitem">Redux</li>
          
        </ul>
      </div>
    </div>
  );
};

export default About;
