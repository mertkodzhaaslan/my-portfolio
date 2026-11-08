import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about-section section-block" aria-labelledby="about-title" tabIndex="-1">
    <div className="page-frame about-layout">
      <div className="section-heading about-heading">
        <span className="section-number">03</span>
        <h2 id="about-title">A practical foundation, with room to keep learning.</h2>
      </div>
      <div className="about-copy">
        <p>Based in Wrocław, Poland, I studied Applied Computer Science at Wrocław University of Science and Technology from 2021 to 2025.</p>
        <p>I completed the initial stage of EPAM&apos;s Cloud and DevOps training. AWS and cloud development remain active areas of learning.</p>
      </div>
      <div className="about-facts" aria-label="Skills and languages">
        <div><p className="fact-label">Working with</p><p>React, Next.js, TypeScript, JavaScript, Node.js, .NET, PostgreSQL, MongoDB, Supabase and Vercel.</p></div>
        <div><p className="fact-label">Languages</p><p>Turkish, native. English, C1. Polish, B2.</p></div>
      </div>
    </div>
  </section>
);

export default About;
