import React from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
      </>
   
  );
}

export default App;