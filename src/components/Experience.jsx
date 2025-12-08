import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const cardRefs = useRef([]);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !sectionRef.current) return;

      const section = sectionRef.current;
      const timeline = timelineRef.current;
      
      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      
      // Calculate dot position based on center of viewport
      const viewportCenter = window.innerHeight / 2;
      
      // Calculate progress: 0 when timeline top is at viewport center, 1 when timeline bottom is at viewport center
      let progress;
      if (timelineTop > viewportCenter) {
        // Timeline hasn't reached center yet
        progress = 0;
      } else if (timelineTop + timelineHeight < viewportCenter) {
        // Timeline has passed center
        progress = 1;
      } else {
        // Timeline is crossing center - calculate exact position
        progress = (viewportCenter - timelineTop) / timelineHeight;
      }
      
      setScrollProgress(Math.max(0, Math.min(1, progress)));

      // Determine which card is aligned with the dot
      const dotPosition = timelineTop + (progress * timelineHeight);
      let closestIndex = -1;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + (cardRect.height / 2);
        const distance = Math.abs(cardCenter - viewportCenter);
        
        if (distance < closestDistance && distance < 200) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCardIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'Avit Systems',
      location: 'Remote, Istanbul, Turkey',
      period: '03/2025 - Current',
      highlights: [
        'Built and maintained internal fullstack tools using Node.js, Express, React, and PostgreSQL',
        'Reduced frontend error rates by ~35% via improved component design and API integration',
        'Designed APIs and deployed services to AWS (EC2, RDS), managing access via IAM',
        'Dockerized development workflows to ensure consistency across frontend/backend pipelines'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Avit Systems',
      location: 'Istanbul, Turkey',
      period: '07/2024 - 10/2024',
      highlights: [
        'Joined onsite in Istanbul, working on frontend prototypes and backend automation tools',
        'Contributed to React interfaces and connected .NET APIs using Axios and REST',
        'Assisted in AWS setup and created reusable UI components for internal dashboards',
        'Supported bug resolution, testing, and API-level logging improvements across services'
      ]
    },
    {
      title: 'Mechanical Technician Intern',
      company: 'Emir Turbo',
      location: 'Istanbul, Turkey',
      period: '06/2018 - 07/2018',
      highlights: [
        'Supported diagnosis and repair of turbocharged engine components',
        'Maintained hands-on workshop procedures and tool handling under strict mechanical guidelines'
      ]
    },
    {
      title: 'Aircraft Maintenance Intern',
      company: 'Turkish Airlines',
      location: 'Istanbul, Turkey',
      period: '06/2018 - 07/2018',
      highlights: [
        'Participated in aircraft maintenance operations and inspection procedures',
        'Gained experience with aviation safety compliance and EASA-standard documentation'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-content">
        <div className={`experience-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            From aviation maintenance to full-stack development
          </p>
        </div>

        <div className="experience-timeline" ref={timelineRef}>
          {/* Single continuous line */}
          <div className="timeline-line-container">
            <div className="timeline-line"></div>
            {/* Animated dot that follows scroll */}
            <div 
              className="timeline-dot-animated"
              style={{ 
                top: `${scrollProgress * 100}%`,
                opacity: isVisible ? 1 : 0
              }}
            ></div>
          </div>

          {/* Experience items */}
          <div className="experience-items-container">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`experience-item ${isVisible ? 'fade-in' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={`experience-card ${activeCardIndex === index ? 'active' : ''}`}>
                  <div className="experience-card-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-company">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="experience-meta">
                      <div className="experience-period">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="experience-location">{exp.location}</div>
                    </div>
                  </div>
                  
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="experience-highlight-item">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;