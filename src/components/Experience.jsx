import React from 'react';
import './Experience.css';

const experiences = [
  { period: 'Oct 2026–Present', role: 'Business Systems Analyst', company: 'Ryanair Labs' },
  { period: 'Jul 2026–Sep 2026', role: 'Application Support Analyst Intern', company: 'Ryanair Labs' },
  { period: 'Jul 2024–Oct 2024', role: 'Software Engineer Intern', company: 'Avit Systems', detail: 'React interfaces, .NET API integration, internal tools, testing and debugging; assisted with AWS setup.' },
];

const Experience = () => (
  <section id="experience" className="experience-section section-block" aria-labelledby="experience-title" tabIndex="-1">
    <div className="page-frame">
      <div className="section-heading section-heading--split"><span className="section-number">02</span><h2 id="experience-title">Experience</h2></div>
      <div className="experience-list">
        {experiences.map((experience) => <article className="experience-row" key={`${experience.company}-${experience.role}`}><p className="experience-row__period">{experience.period}</p><div><h3>{experience.role}</h3><p className="experience-row__company">{experience.company}</p></div>{experience.detail ? <p className="experience-row__detail">{experience.detail}</p> : <span className="experience-row__detail" aria-hidden="true" />}</article>)}
      </div>
    </div>
  </section>
);

export default Experience;
