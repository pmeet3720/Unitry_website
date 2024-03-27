import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We've been delivering quality uniforms to schools and businesses for over a decade.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
          <li>
            <Link to="about-us-section" spy={true} smooth={true} duration={500} className="footer-link">About Us</Link>
          </li>
          <li>
            <Link to="categories-section" spy={true} smooth={true} duration={500} className="footer-link">Our Products</Link>
          </li>
          <li>
            <Link to="contact-form-section" spy={true} smooth={true} duration={500} className="footer-link">Contact Us</Link>
          </li>
        </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>+123 456 7890</p>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
