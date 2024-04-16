import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryCard.css'; // Make sure this CSS file exists

const CategoryCard = ({ image, title, description }) => {
  const navigate = useNavigate();

  const handleViewCollection = () => {
    // Check if the title is 'School Uniform' to navigate to a specific form
    if (title === 'School Uniform') {
      navigate("/uniforms");
    } else {
      // For all other categories, navigate to a generic category page
      navigate(`/categories/${title.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="category-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="category-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-cta-button" onClick={handleViewCollection}>View Collection</button>
      </div>
    </div>
  );
};

export default CategoryCard;
