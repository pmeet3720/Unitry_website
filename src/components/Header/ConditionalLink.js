import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const ConditionalLink = ({ to, spy, smooth, offset, duration, className, children, route }) => {
  const location = useLocation();
  // Checks if the current pathname is '/', indicating the homepage
  const onHomePage = location.pathname === '/';
  
  // If on the homepage, use ScrollLink for smooth scrolling
  if (onHomePage) {
    return (
      <ScrollLink to={to} spy={spy} smooth={smooth} offset={offset} duration={duration} className={className}>
        {children}
      </ScrollLink>
    );
  } else {
    // If not on the homepage, use a regular Link to navigate to the homepage with the specific section hash
    return (
      <Link to={route} className={className}>
        {children}
      </Link>
    );
  }
};

export default ConditionalLink;
