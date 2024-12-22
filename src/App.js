import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Highlights from './components/Highlights';
import './index.css';

function App() {
  return (
    <div className="App relative">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 -mt-32">
        <Hero />
      </div>

      {/* Remaining Sections */}
      <div className="relative z-0">
        <Highlights />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
       
      </div>
    </div>
  );
}

export default App;

