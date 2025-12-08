import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-overlay"></div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-label">FULLSTACK DEVELOPER</div>
          <h1 className="hero-title">
            From Aircraft to
            <span className="hero-highlight"> Code</span>
          </h1>
          <p className="hero-description">
            Former aircraft maintenance technician turned full-stack developer.
            I build scalable web applications with precision and attention to detail—
            skills honed from aviation safety standards.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </button>
          </div>
        </div>
        
        <button className="scroll-indicator" onClick={scrollToAbout}>
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;