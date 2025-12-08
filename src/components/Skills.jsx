import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Swift', 'Dart']
    },
    {
      icon: <Database size={32} />,
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'SQL']
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, RDS)', 'Docker', 'GitHub Actions', 'REST APIs', 'Firebase']
    },
    {
      icon: <Wrench size={32} />,
      title: 'Other Skills',
      skills: ['Agile/Scrum', 'MQTT', 'Raspberry Pi', 'Aircraft Maintenance', 'Aviation Safety']
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-content">
        <div className={`skills-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A diverse skill set spanning software development and aviation technology
          </p>
        </div>

        <div className={`skills-grid ${isVisible ? 'fade-in' : ''}`}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`skills-languages ${isVisible ? 'fade-in' : ''}`}>
          <h3 className="languages-title">Languages</h3>
          <div className="language-list">
            <div className="language-item">
              <span className="language-name">Turkish</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">C1</span>
            </div>
            <div className="language-item">
              <span className="language-name">Polish</span>
              <span className="language-level">B2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;