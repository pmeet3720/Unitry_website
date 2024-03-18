import React from 'react';
import CategoryCard from './CategoryCard'; // Import the CategoryCard component
import './CategoriesSection.css'; // Import the CSS for styling
import hospitalUniform from './images/Hospital.png'
import hotelUniform from './images/Hotel.png'
import schoolUniform from './images/School.png'
import corporateUniform from './images/Corporate.png'
import securityUniform from './images/Security.png'
import sportsUniform from './images/sports.png'
import fireFighterUniform from './images/FireFighter.png'
import chefUniform from "./images/Chef.png"

// Array of categories with placeholder data
const categories = [
  { 
    image: schoolUniform, 
    title: 'School Uniform', 
    description: 'Tailored uniforms for educational excellence.' 
  },
  { 
    image: hospitalUniform, 
    title: 'Hospital Uniform', 
    description: 'Comfort and durability for healthcare professionals.' 
  },
  { 
    image: hotelUniform, 
    title: 'Hotel"s Uniforms', 
    description: 'Elegant uniforms for the hospitality industry.' 
  },
  { 
    image: corporateUniform, 
    title: 'Corporate Uniform', 
    description: 'Professional attire for your corporate identity.' 
  },
  { 
    image: sportsUniform, 
    title: 'Sports Uniform', 
    description: 'Performance wear for sports and athletic activities.' 
  },
  { 
    image: fireFighterUniform, 
    title: 'Public Service Uniforms', 
    description: 'Durable uniforms for fire fighters, postal workers, and more.' 
  },
  { 
    image: chefUniform,
    title: 'Culinary Uniforms', 
    description: 'High-quality attire for chefs, cooks, and kitchen staff.' 
  },
  { 
    image: securityUniform, 
    title: 'Law Enforcement and Security Uniform', 
    description: 'Reliable uniforms for security and law enforcement officers.' 
  }
];

const CategoriesSection = () => (
  <section className="categories-section">
    <h1 id='h1'>Discover Uniforms for Every Profession <h2>Explore our wide range of uniform categories</h2> </h1>
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  </section>
);

export default CategoriesSection;