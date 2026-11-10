import React from 'react';
import './Projects.css';

const ProjectArrow = () => <span className="project-arrow" aria-hidden="true">↗</span>;

const Projects = () => (
  <section id="work" className="projects-section section-block" aria-labelledby="work-title" tabIndex="-1">
    <div className="page-frame">
      <div className="section-heading"><span className="section-number">01</span><h2 id="work-title">Selected work</h2></div>
      <article className="postlia-project">
        <div className="postlia-project__visual">
          <img src="/images/postlia-brand.jpg" alt="Postlia brand artwork" />
          <img className="postlia-project__mark" src="/images/postlia-icon.svg" alt="" aria-hidden="true" />
          <span className="postlia-project__caption">Postlia / Publishing &amp; scheduling</span>
        </div>
        <div className="postlia-project__copy">
          <p className="project-kicker">Co-founder / SaaS</p><h3>Postlia</h3>
          <p>A social media publishing and scheduling SaaS. I contribute to its publishing engine and scheduler across a multi-platform workflow.</p>
          <p className="project-stack">Next.js · TypeScript · Supabase/PostgreSQL · Vercel · Social API integration</p>
          <a className="project-link" href="https://postlia.com/" target="_blank" rel="noopener noreferrer">Visit Postlia <ProjectArrow /></a>
        </div>
      </article>
      <article className="foodlink-project">
        <div><p className="project-kicker">Team project / University</p><h3>FoodLink</h3></div>
        <div className="foodlink-project__body"><p>A collaborative food donation project. I contributed to its development across a React, Node and Express application with PostgreSQL and Firebase.</p><p className="project-stack">React · Node.js · Express · PostgreSQL · Firebase</p></div>
        <a className="project-link" href="https://github.com/mertkodzhaaslan/FoodLink-FLWA" target="_blank" rel="noopener noreferrer">View repository <ProjectArrow /></a>
      </article>
    </div>
  </section>
);

export default Projects;
