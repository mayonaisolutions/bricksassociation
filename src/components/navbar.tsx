import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
          <img src="/logo.png" alt="Use Flyash Bricks Environment Logo" className="navbar-logo-img" />
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className={`navbar-mobile-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav>
          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                end
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/aboutus" 
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/members" 
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Members
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact-us" 
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="mobile-only-cta">
              <Link to="/contact-us" className="navbar-cta" onClick={closeMenu}>
                Get in Touch
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="navbar-cta-wrapper">
          <Link to="/contact-us" className="navbar-cta">
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
};