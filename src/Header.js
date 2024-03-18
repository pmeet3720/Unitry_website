import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './UNITRY.png';

const Header = () => (
  <header className="header">
    <div className="logo">
      {/* Using react-scroll to scroll to the top of the page */}
      <Link to="hero" spy={true} smooth={true} duration={500}>
        <img src={logo} alt="Company Logo" />
      </Link>
    </div>
    <nav className="nav-center">
      <Link
        activeClass="active"
        to="about-us"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-item"
      >
        About Us
      </Link>
      <Link
        activeClass="active"
        to="our-solution"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-item"
      >
        Our Solution
      </Link>
      {/* Uncomment and update this section as needed */}
      {/* <Link
        activeClass="active"
        to="testimonials"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-item"
      >
        Testimonials
      </Link> */}
      <Link
        activeClass="active"
        to="contact-us"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-item"
      >
        Contact Us
      </Link>
    </nav>
    <div className="nav-right">
      <button className="button sign-in">Sign In</button>
      <button className="button sign-up">Sign Up</button>
    </div>
  </header>
);

export default Header;
