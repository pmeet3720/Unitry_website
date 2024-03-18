import React from 'react';
import {Link} from 'react-scroll';
import './Header.css';
import logo from './UNITRY.png';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Company Logo" />
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
      <a href="/our-solution" className="nav-item">Our Solution</a>
      <a href="/testimonials" className="nav-item">Testimonials</a>
      <a href="/contact-us" className="nav-item">Contact Us</a>
    </nav>
    <div className="nav-right">
      <button className="button sign-in">Sign In</button>
      <button className="button sign-up">Sign Up</button>
    </div>
  </header>
);

export default Header;
