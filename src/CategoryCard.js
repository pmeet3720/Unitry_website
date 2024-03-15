import React from 'react';
import './CategoryCard.css'; // Make sure to create this CSS file

const CategoryCard = ({ image, title, description }) => (
  <div className="category-card">
    <div className="card-image-container">
      <img src={image} alt={title} className="category-image" />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-cta-button">View Collection</button>
    </div>
  </div>
);

export default CategoryCard;
