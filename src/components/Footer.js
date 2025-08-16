import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">✈️</span>
              Tourism Explorer
            </div>
            <p className="footer-description">
              Discover amazing destinations around the world and create unforgettable memories 
              with our curated travel experiences.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Popular Destinations</h3>
            <ul className="footer-links">
              <li><a href="#paris">Paris, France</a></li>
              <li><a href="#tokyo">Tokyo, Japan</a></li>
              <li><a href="#bali">Bali, Indonesia</a></li>
              <li><a href="#santorini">Santorini, Greece</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 info@tourismexplorer.com</p>
              <p>📍 123 Travel Street, Adventure City, AC 12345</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Tourism Explorer. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
