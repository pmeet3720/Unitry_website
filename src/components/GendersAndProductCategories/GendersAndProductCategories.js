import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const GendersAndProductCategories = () => {
  const navigate = useNavigate();
  const { state, district, school } = useParams();

  const goToCategoryItems = (categoryType) => {
    navigate(`/category-items-display/${state}/${district}/${school}/${categoryType}`);
  };

  return (
    <div className="categories-container">
      <h1>Select a Category</h1>
      <button onClick={() => goToCategoryItems('Male')}>Boy Uniforms</button>
      <button onClick={() => goToCategoryItems('Female')}>Girl Uniforms</button>
      <button onClick={() => goToCategoryItems('MostSellingProduct')}>Most Selling Products</button>
    </div>
  );
};

export default GendersAndProductCategories;
