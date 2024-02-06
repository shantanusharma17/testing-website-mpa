import React from 'react';
import './NavigationHeader.css';

const NavigationHeader = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/testing-website-mpa/" className="logo">
          Home
        </a>
        <div className="nav-links">
          <a href="/testing-website-mpa/contact" className="nav-link">
            Contact
          </a>
          <a href="/testing-website-mpa/properties-id" className="nav-link">
            Properties
          </a>
        </div>
        <a href="/testing-website-mpa/login" className="nav-link">
          Login
        </a>
      </nav>
    </header>
  );
};

export default NavigationHeader;
