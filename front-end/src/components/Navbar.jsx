import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Added NavLink
import './css/Navbar.css';

function Navbar({
  scrollToHome,
  scrollToAbout,
  scrollToFreshJuices,
  scrollToContact,
  activeSection,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (scrollFunction) => {
    scrollFunction();
    closeMenu();
  };

  // Helper to keep the JSX cleaner
  const navItems = [
    { id: 'home', label: 'Home', action: scrollToHome },
    { id: 'about', label: 'About', action: scrollToAbout },
    { id: 'freshJuices', label: 'Fresh Juices', action: scrollToFreshJuices },
    { id: 'contact', label: 'Contact', action: scrollToContact },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-brand">
          <button
            className={`brand-button ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick(scrollToHome)}
          >
            <span className="brand-name">Crazy Moon 🌕</span>
            <span className="brand-subtitle">පිස්සු හැදෙන සඳ 🌕</span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleNavClick(item.action)}
              >
                {item.label}
              </button>
            </li>
          ))}

        <li>
            <NavLink to="/IceCreamTypes" onClick={closeMenu}>
              Ice Creams
            </NavLink>
          </li>
          {/* External Links using NavLink for automatic active styling */}
          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>

          
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;