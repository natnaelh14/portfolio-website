import React from 'react';
import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

const App = 12

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