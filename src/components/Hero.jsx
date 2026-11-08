import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero-section" aria-labelledby="page-title">
    <div className="page-frame hero-layout">
      <div className="hero-copy">
        <p className="hero-kicker">Mert Kodzhaaslan / Portfolio</p>
        <h1 id="page-title">Mert<br /><em>Kodzhaaslan</em></h1>
        <p className="hero-intro">Business Systems Analyst at Ryanair Labs and co-founder of Postlia, a social media publishing and scheduling platform.</p>
        <div className="hero-actions">
          <a className="text-link text-link--solid" href="#work">Selected work <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <aside className="hero-rail" aria-label="Current context">
        <div><span className="rail-label">Based in</span><p>Wrocław, Poland</p></div>
        <div><span className="rail-label">Currently</span><p>Business Systems Analyst<br />Ryanair Labs</p></div>
        <div className="hero-rail__rule" aria-hidden="true" />
        <p className="hero-rail__note">Applied Computer Science<br />Wrocław University of Science and Technology</p>
      </aside>
    </div>
  </section>
);

export default Hero;
