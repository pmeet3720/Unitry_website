import React from 'react';
import { Link } from 'react-router-dom'; // For navigation between pages
import { Link as ScrollLink } from 'react-scroll'; // For in-page scrolling
import './Header.css';
import logo from './UNITRY.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Use ScrollLink for in-page scrolling to the 'hero' section */}
        <ScrollLink to="hero" spy={true} smooth={true} duration={500}>
          <img src={logo} alt="Company Logo" />
        </ScrollLink>
      </div>
      <nav className="nav-center">
        {/* Use ScrollLink for in-page scrolling to other sections */}
        <ScrollLink
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item"
        >
          About Us
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="our-solution"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item"
        >
          Our Solution
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item"
        >
          Contact Us
        </ScrollLink>
      </nav>
      <div className="nav-right">
        {/* Use Link from react-router-dom for page navigation */}
        <Link to="/signin" className="button sign-in">
          Sign In
        </Link>
        <Link to="/signup" className="button sign-up">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
