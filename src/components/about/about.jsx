import React from 'react';
import './about.css';
import { Fade } from 'react-reveal';

const About = () => {
  return (
    <div className='about' id='about'>
      <h1 className='section-heading'>About</h1>
      <Fade bottom duration={1000} distance='40px'>
        <div className='about-section'>
          <div className='about-text'>
            I am a Full Stack Web Developer with a Bachelor's Degree and 6+
            years of professional experience as a Registered Nurse. I have
            always been passionate about technology. I graduated from Georgia
            Tech Full Stack Coding Bootcamp in August 2021 and I'm glad I
            decided to finally make the jump. Now, I am looking for my first
            professional role as a Web Developer and hoping to find a team to
            build with and learn from. I like to bring amazing ideas to life
            using the tools below.
          </div>
        </div>
        <br />
        <br />
        <div className='about-subSection'>
          <ul>
            <li className='about-subSectionitem'>HTML5</li>
            <li className='about-subSectionitem'>CSS3</li>
            <li className='about-subSectionitem'>Bootstrap</li>
            <li className='about-subSectionitem'>Bulma</li>
            <li className='about-subSectionitem'>Styled Components</li>
            <li className='about-subSectionitem'>jQuery</li>
            <li className='about-subSectionitem'>JavaScript</li>
            <li className='about-subSectionitem'>React/Redux</li>
            <li className='about-subSectionitem'>TypeScript</li>
            <li className='about-subSectionitem'>Node.js/Express.js</li>
            <li className='about-subSectionitem'>MySQL/Sequelize</li>
            <li className='about-subSectionitem'>MongoDB/Mongoose</li>
            <li className='about-subSectionitem'>GraphQL/Apollo</li>
            <li className='about-subSectionitem'>Heroku/Git/Terminal</li>
            <li className='about-subSectionitem'>Jest</li>
            <li className='about-subSectionitem'>GitHub Actions/Mocha</li>
            <li className='about-subSectionitem'>PWA</li>
            <li className='about-subSectionitem'>Data Structures</li>
            <li className='about-subSectionitem'>Algorithms</li>
            <li className='about-subSectionitem'>Agile development</li>
            <li className='about-subSectionitem'>CICD</li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default About;
