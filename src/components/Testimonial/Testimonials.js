// Import React and potential icon libraries for navigation
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from 'react-icons/fa';
import './testimonials.css'; // Ensure this is the correct path

const TestimonialCard = ({ rating, text, author }) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    index < rating ? <FaStar className="star filled" /> : <FaRegStar className="star" />
  ));

  return (
    <div className="testimonial-card">
      <div className="stars">{stars}</div>
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-author">{author}</p>
    </div>
  );
};

const testimonials = [
  {
    rating: 5,
    text: "The uniforms are of excellent quality, and the customer service is unmatched. I highly recommend their services.",
    author: "Alex Johnson",
  },
  {
    rating: 4,
    text: "Quick delivery and top-notch quality. The customization options were exactly what we needed.",
    author: "Maria Smith",
  },
  {
    rating: 5,
    text: "Our team looks outstanding in their new uniforms. The attention to detail is impressive.",
    author: "Chris Wayne",
  },
  // Add 6 more reviews
  { rating: 4, text: "Review text 4", author: "Author 4" },
  { rating: 5, text: "Khub saras", author: "Chetan Bhai" },
  { rating: 3, text: "Review text 6", author: "Author 6" },
  { rating: 5, text: "Review text 7", author: "Author 7" },
  { rating: 4, text: "Review text 8", author: "Author 8" },
  { rating: 5, text: "Review text 9", author: "Author 9" },
];

const Testimonials = () => {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  // Update the position based on visibleStartIndex
  const getPosition = () => {
    // Assuming each card + margin is approx 350px wide
    return -(visibleStartIndex * 350) + 'px';
  };

  const nextTestimonials = () => {
    setVisibleStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setVisibleStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container" style={{ transform: `translateX(${getPosition()})`, transition: 'transform 0.5s ease' }}>
        <FaChevronLeft className="nav-icon" onClick={prevTestimonials} />
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
        <FaChevronRight className="nav-icon" onClick={nextTestimonials} />
      </div>
    </div>
  );
};

export default Testimonials;