import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [activePage, setActivePage] = useState('about');

  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname === '/react-portfolio/portfolio') {
      setActivePage('portfolio');
    } else {
      setActivePage('about')
    }
  }, [])

  const handleSwitchToAbout = () => {
    setActivePage('about');
  };

  const handleSwitchToProjects = () => {
    setActivePage('portfolio');
  };

  const displayLink = () => {
    if (activePage === 'about') {
      return (
        <Link to="/react-porfolio/portfolio" id="project-link" className="link" onClick={handleSwitchToProjects}>
          View Projects
        </Link>
      );
    } else if (activePage === 'portfolio') {
      return (
        <Link to="/react-portfolio/about" className="link" onClick={handleSwitchToAbout}>
          About Me
        </Link>
      );
    }
  };

  return (
    <section className="hero is-medium">
      <img
      className="img"
        src={process.env.PUBLIC_URL + '/assets/images/HeaderImage.jpg'}
        alt="Open laptop"
      />
      <div className="navtabs">
        {displayLink()}
      </div>
    </section>
  );
}
