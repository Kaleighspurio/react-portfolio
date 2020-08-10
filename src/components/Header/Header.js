import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [activePage, setActivePage] = useState('about');

  const handleSwitchToAbout = () => {
    setActivePage('about');
  };

  const handleSwitchToProjects = () => {
    setActivePage('portfolio');
  };

  const displayLink = () => {
    if (activePage === 'about') {
      return (
        <Link to="/portfolio" id="project-link" className="link" onClick={handleSwitchToProjects}>
          View Projects
        </Link>
      );
    } else if (activePage === 'portfolio') {
      return (
        <Link to="/" className="link" onClick={handleSwitchToAbout}>
          About Me
        </Link>
      );
    }
  };

  return (
    <section className="hero is-medium">
      <img
      className="img"
        src={process.env.PUBLIC_URL + './images/HeaderImage.jpg'}
        alt="Open laptop"
      />
      <div className="navtabs">
        {displayLink()}
      </div>
    </section>
  );
}
