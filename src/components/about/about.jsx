import React, { useState } from 'react';
import './about.css';
import { Fade } from 'react-reveal';

const About = () => {
  const [show, Setshow] = useState({ type: 'front-end' });
  return (
    <div className='about' id='about'>
      <h1 className='section-heading'>About</h1>
      <Fade bottom duration={1000} distance='40px'>
        <div className='about-section'>
          <div className='about-text'>
            I am a Full-Stack Software Engineer with a Bachelor's Degree and one
            year of professional development experience. I am proactive team
            player with good adaptability in dynamic environments looking for
            engaging professional development. I am passionate, detail-oriented,
            and curious developer using professional and technical skills to
            solve problems. I like to bring amazing ideas to life using the
            tools below.
          </div>
        </div>
        <br />
        <br />
        <div className='about__sideParent'>
          <div className='about__buttons'>
            <button
              className={
                show.type === 'front-end'
                  ? 'about__button about__button--active'
                  : 'about__button'
              }
              onClick={() => Setshow({ type: 'front-end' })}
            >
              Front-End
            </button>
            <button
              className={
                show.type === 'back-end'
                  ? 'about__button about__button--active'
                  : 'about__button'
              }
              onClick={() => Setshow({ type: 'back-end' })}
            >
              Back-End
            </button>
            <button
              className={
                show.type === 'other-tech'
                  ? 'about__button about__button--active'
                  : 'about__button'
              }
              onClick={() => Setshow({ type: 'other-tech' })}
            >
              Other Tech
            </button>
          </div>
          {show.type === 'front-end' && (
            <div className='about-subSection'>
              <ul>
                <li className='about-subSectionitem'>HTML5</li>
                <li className='about-subSectionitem'>CSS3</li>
                <li className='about-subSectionitem'>Bootstrap</li>
                <li className='about-subSectionitem'>Bulma</li>
                <li className='about-subSectionitem'>Styled Components</li>
                <li className='about-subSectionitem'>Tailwind</li>
                <li className='about-subSectionitem'>JavaScript</li>
                <li className='about-subSectionitem'>jQuery</li>
                <li className='about-subSectionitem'>React</li>
                <li className='about-subSectionitem'>Redux</li>
                <li className='about-subSectionitem'>Next.js</li>
                <li className='about-subSectionitem'>TypeScript</li>
              </ul>
            </div>
          )}
          {show.type === 'back-end' && (
            <div className='about-subSection'>
              <ul>
                <li className='about-subSectionitem'>Node.js</li>
                <li className='about-subSectionitem'>Express.js</li>
                <li className='about-subSectionitem'>Prisma</li>
                <li className='about-subSectionitem'>MySQL</li>
                <li className='about-subSectionitem'>PostgreSQL</li>
                <li className='about-subSectionitem'>MongoDB</li>
                <li className='about-subSectionitem'>GraphQL/Apollo</li>
              </ul>
            </div>
          )}
          {show.type === 'other-tech' && (
            <div className='about-subSection'>
              <ul>
                <li className='about-subSectionitem'>Git/Terminal</li>
                <li className='about-subSectionitem'>Agile development</li>
                <li className='about-subSectionitem'>Data Structures</li>
                <li className='about-subSectionitem'>Algorithms</li>
                <li className='about-subSectionitem'>CICD</li>
                <li className='about-subSectionitem'>GitHub Actions</li>
                <li className='about-subSectionitem'>Google Analytics</li>
                <li className='about-subSectionitem'>Jest</li>
                <li className='about-subSectionitem'>Postman</li>
                <li className='about-subSectionitem'>Docker</li>
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default About;
