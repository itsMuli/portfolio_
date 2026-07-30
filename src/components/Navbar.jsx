import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span>ROSE</span>.DEV
        </Link>
        {/* <ul className="nav-links">
          <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
        </ul> */}
        <div className="nav-actions">
          <ThemeToggle />
          <a href="/about" className="btn-primary nav-cta">About Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
