import React from 'react';
import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Footer />
      </>
   
  );
}

export default App;