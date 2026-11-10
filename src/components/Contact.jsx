import React from 'react';
import './Contact.css';

const Contact = () => (
  <footer id="contact" className="contact-section" aria-labelledby="contact-title" tabIndex="-1">
    <div className="page-frame contact-layout">
      <div>
        <p className="contact-kicker">04 / Contact</p>
        <h2 id="contact-title">Let&apos;s start with a note.</h2>
      </div>
      <div className="contact-links">
        <a className="contact-email" href="mailto:mert.kodzhaaslan.software@gmail.com">mert.kodzhaaslan.software@gmail.com <span aria-hidden="true">↗</span></a>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/mert-nuri-kodzhaaslan/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/mertkodzhaaslan" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
    <div className="page-frame footer-line"><span>© {new Date().getFullYear()} Mert Kodzhaaslan</span><a href="#home">Back to top ↑</a></div>
  </footer>
);

export default Contact;
