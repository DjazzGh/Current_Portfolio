import React from 'react';
import './styles.css'; // Import the CSS file
import Header from './Header.js';
import Hero from './Hero.js';
import AboutMe from './AboutMe.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import TrailingCursor from './TrailingCursor.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero id="first" />
      <AboutMe id="second" />
      <Skills id="third" />
      <Projects id="fourth" />
      <Experience />
      <Contact id="contact" />
      <TrailingCursor  /> 
    </div>
  );
}

export default App;