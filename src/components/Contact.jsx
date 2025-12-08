import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'mert.kodzhaaslan.software@gmail.com',
      link: 'mailto:mert.kodzhaaslan.software@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+48 571 871 506',
      link: 'tel:+48571871506'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Wrocław, Poland',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={28} />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mert-nuri-kodzhaaslan' 
    },
    {
      icon: <Github size={28} />,
      name: 'GitHub',
      link: 'https://github.com/mertkodzhaaslan' 
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-content">
        <div className={`contact-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's build something amazing together
          </p>
        </div>

        <div className={`contact-grid ${isVisible ? 'fade-in' : ''}`}>
          <div className="contact-info-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <div className="contact-info-label">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="contact-info-value link">
                        {info.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-divider"></div>

            <div className="social-links">
              <h4 className="social-title">Connect on Social Media</h4>
              <div className="social-buttons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="social-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-cta-card">
            <h3 className="contact-cta-title">Ready to collaborate?</h3>
            <p className="contact-cta-text">
              I'm currently open to new opportunities and interesting projects.
              Whether you need a full-stack developer or want to discuss a potential
              collaboration, feel free to reach out.
            </p>
            <div className="contact-cta-badges">
              <div className="cta-badge">
                <div className="badge-label">Status</div>
                <div className="badge-value">Open to Work</div>
              </div>
              <div className="cta-badge">
                <div className="badge-label">Availability</div>
                <div className="badge-value">Remote & Onsite</div>
              </div>
              <div className="cta-badge">
                <div className="badge-label">Citizenship</div>
                <div className="badge-value">EU Citizen</div>
              </div>
            </div>
            <button 
              className="btn-primary btn-contact"
              onClick={() => window.location.href = 'mailto:mert.kodzhaaslan.software@gmail.com'}
            >
              Send an Email
            </button>
          </div>
        </div>

        <div className={`contact-footer ${isVisible ? 'fade-in' : ''}`}>
          <p className="footer-text">
            © 2025 Mert Kodzhaaslan. Built with React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;