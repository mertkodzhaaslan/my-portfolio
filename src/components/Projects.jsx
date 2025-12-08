import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'FoodLink',
      subtitle: 'Food Donation Web Platform',
      description: 'Developed a full-stack donation platform with a React frontend and a Node.js/Express backend. Integrated PostgreSQL for item lifecycle and Firebase for real-time alerts and map-based pickup tracking.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Firebase'],
      highlights: [
        'Real-time donation tracking and notifications',
        'Map-based pickup location system',
        'Complete item lifecycle management',
        'User authentication and authorization'
      ]
    },
    {
      title: 'Pinder',
      subtitle: 'iOS App for Pet Matching',
      description: 'Built a swipe-to-match mobile app with Firebase-powered real-time messaging and user authentication. Designed match logic and animated UI interactions using native iOS components.',
      technologies: ['Swift', 'Firebase', 'iOS'],
      highlights: [
        'Tinder-style swipe interface for pets',
        'Real-time chat functionality',
        'Firebase authentication integration',
        'Smooth animated transitions'
      ]
    },
    {
      title: 'Group Trip System',
      subtitle: 'Expense & Itinerary Tool',
      description: 'Built backend logic and frontend templates for group trip planning and shared budget tracking. Enables multiple users to collaborate on trip planning and expense management.',
      technologies: ['Node.js', 'MongoDB', 'JavaScript'],
      highlights: [
        'Collaborative trip planning',
        'Shared expense tracking',
        'Budget management system',
        'Multi-user support'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-content">
        <div className={`projects-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${isVisible ? 'fade-in' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="project-card-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h4 className="highlights-title">Key Features:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;