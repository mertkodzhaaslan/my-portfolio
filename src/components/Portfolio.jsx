import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import Contact from './Contact';
import './Portfolio.css';

const Portfolio = () => (
  <div className="portfolio-container">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  </div>
);

export default Portfolio;
