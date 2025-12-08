import React, { useEffect, useRef, useState } from 'react';
import { Plane, Code2, Wrench } from 'lucide-react';
import './About.css';

const About = () => {
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

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-content">
        <div className={`about-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A unique journey from aviation maintenance to software engineering
          </p>
        </div>

        <div className={`about-grid ${isVisible ? 'fade-in' : ''}`}>
          <div className="about-card">
            <div className="about-card-icon">
              <Plane size={32} />
            </div>
            <h3 className="about-card-title">Aviation Background</h3>
            <p className="about-card-text">
              Started my career in aircraft maintenance at Turkish Airlines and Gökjet Aviation College.
              Gained expertise in airframe mechanics, turbocharged engines, and EASA-standard safety compliance.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Wrench size={32} />
            </div>
            <h3 className="about-card-title">Technical Precision</h3>
            <p className="about-card-text">
              Aviation taught me the importance of precision, systematic problem-solving, and attention to detail.
              These principles now guide my approach to writing clean, maintainable code.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Code2 size={32} />
            </div>
            <h3 className="about-card-title">Software Engineering</h3>
            <p className="about-card-text">
              Transitioned into full-stack development with a B.Sc. in Applied Computer Science from Wrocław University.
              Currently building scalable solutions at Avit Systems using React, Node.js, and AWS.
            </p>
          </div>
        </div>

        <div className={`about-story ${isVisible ? 'fade-in' : ''}`}>
          <div className="about-story-content">
            <h3 className="about-story-title">The Transition</h3>
            <p className="about-story-text">
              After years in aviation maintenance, I discovered a passion for software development.
              The transition wasn't easy, but my mechanical background gave me a unique perspective on
              system architecture and fault tolerance. Today, I bring the same meticulous approach to
              building web applications that I once applied to maintaining aircraft—where every detail matters
              and failure is not an option.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">4.0/5.0</div>
                <div className="stat-label">GPA in Computer Science</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">~35%</div>
                <div className="stat-label">Error Rate Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Languages Spoken</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;