import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/firebaseConfig'; // Ensure correct path
import UniformCard from '../UniformCard/UniformCard';
import { getImageUrl } from '../../utils/firebaseHelpers'; // Ensure correct path

const CategoryItemsDisplay = () => {
  const { state, district, school, categoryType } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const snapshot = await getDocs(collection(firestore, "States", state, "Districts", district, "Schools", school, categoryType));
      const itemsWithUrls = await Promise.all(snapshot.docs.map(async doc => {
        const data = doc.data();
        const imageUrl = await getImageUrl(data.image);
        return { ...data, image: imageUrl  };
      }));
      setItems(itemsWithUrls);
    };
    fetchItems();
  }, [state, district, school, categoryType]);

  return (
    <div>
      {items.map((item, index) => (
        <UniformCard key={index} uniform={item} />
      ))}
      {items.length === 0 && <p>No uniforms available for this category.</p>}
    </div>
  );
};

export default CategoryItemsDisplay;
