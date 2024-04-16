import React from 'react';

const UniformCard = ({ uniform }) => {
  return (
    <div className="uniform-card">
      <img src={uniform.imageUrl || 'default-placeholder.png'} alt={uniform.name} />
      <h3>{uniform.name}</h3>
      <p>{uniform.description}</p>
      <p>Price: {uniform.price}</p>
    </div>
  );
};

export default UniformCard;
