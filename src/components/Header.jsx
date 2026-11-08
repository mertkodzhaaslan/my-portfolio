import React, { useEffect, useRef, useState } from 'react';
import './Header.css';

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const handleNavigation = (event) => {
    const targetId = event.currentTarget.getAttribute('href')?.slice(1);
    setIsOpen(false);
    window.requestAnimationFrame(() => document.getElementById(targetId)?.focus({ preventScroll: true }));
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#home" aria-label="Mert Kodzhaaslan, back to top">
          <span aria-hidden="true">MK</span><span className="wordmark__name">Mert Kodzhaaslan</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen((open) => !open)}>
          <span className="menu-button__lines" aria-hidden="true"><i /><i /></span><span>Menu</span>
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => <a key={item.href} href={item.href} onClick={handleNavigation}><span>0{index + 1}</span>{item.label}</a>)}
        </nav>
      )}
    </header>
  );
};

export default Header;
