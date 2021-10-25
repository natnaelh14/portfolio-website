import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Logo from './logo.png';
import Zoom from 'react-reveal/Zoom';

function App() {
  const [loading, Setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Setloading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className='app__loader'>
          <div className='app__imageParent'>
            <svg height='130' width='130' className='app__loaderSvg'>
              <polygon
                points='55 3,105 30,105 87,55 120,3 87,3 30'
                className='app__loaderSvgHex'
              />
            </svg>
            <Zoom>
              <div className='app__loaderImageParent'>
                <img className='app__loaderImage' src={Logo} alt='' />
              </div>
            </Zoom>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
