import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">✈️</span>
            Tourism Explorer
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className={`nav-link ${isActive('/destinations')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/profile" 
              className={`nav-link ${isActive('/profile')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
