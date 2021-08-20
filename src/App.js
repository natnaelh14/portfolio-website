import React from 'react';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </>
   
  );
}

export default App;