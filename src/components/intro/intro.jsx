import React from 'react';
import './intro.css';
import HeroImage from './hero-image.png';
import Fade from 'react-reveal/Fade';

function Intro() {
  return (
    <div className='intro'>
      <Fade bottom duration={1000} distance="40px">
        <div className='intro-image-mobile'>
          <img className='hero-image-mobile' src={HeroImage} alt='hero' />
        </div>
        <div className='intro-desc'>
          <p className='intro-msg'>Hello, my name is</p>
          <h1 className='intro-head'>Natnael Haile.</h1>
          <h1 className='intro-text'>
            Full Stack<span className='intro-msg-two'> Web Developer</span>
          </h1>
          <a href='#about' className='intro-aboutLink'>
            More About Me
          </a>
        </div>
        <div className='intro-image'>
          <img className='hero-image' src={HeroImage} alt='hero' />
        </div>
      </Fade>
    </div>
  );
}

export default Intro;
