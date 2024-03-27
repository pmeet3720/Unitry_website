import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from 'react-icons/fa';
import './testimonials.css';

const testimonials = [
  { rating: 5, text: "Sarvice ne uniform nu quality ekdum first class chhe. Customer service pan kadak. Dariye recommend karish.", author: "Parth Desai" },
  { rating: 4, text: "Delivery time mamtavari ane quality upar no prashna j nathi. Mari custom requirements mate perfect hatu.", author: "Aarohi Patel" },
  { rating: 5, text: "Ameari team ne navu uniform pehri ne ekdum jhakas lage chhe. Details par dhyan apvama aavu quality rare chhe.", author: "Nirav Mehta" },
  { rating: 4, text: "Sachi muje kai kehvani jarur nathi, kaam joi ne j todi gayo. Fantastic service!", author: "Rajvi Shah" },
  { rating: 5, text: "Bau j saras! Khubaj sundar ane comfortable uniforms banavya chhe.", author: "Chetan Bhai" },
  { rating: 3, text: "Service toh saras chhe, pan thodi vadhu improvement joyiye. Overall, sara chhe.", author: "Vishal Vyas" },
  { rating: 5, text: "Aeni professionalism and dedication kamalni chhe. Hamesha mate amara supplier banigaya.", author: "Meera Joshi" },
  { rating: 4, text: "Product no design ane material bahu badhiya chhe, par delivery ma thodu delay thai gayu.", author: "Soham Desai" },
  { rating: 5, text: "Fantastic! Bija koi service sathe compare j nahi kari shakay. Uniforms superb chhe.", author: "Ishaan Sutaria" },
];


const TestimonialCard = ({ rating, text, author }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    index < rating ? <FaStar className="star filled" key={index} /> : <FaRegStar className="star" key={index} />
  ));

  return (
    <div className="testimonial-card">
      <div className="stars">{stars}</div>
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-author">{author}</p>
    </div>
  );
};

const Testimonials = () => {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const nextTestimonials = () => {
    setVisibleStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setVisibleStartIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonials.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonials();
    }, 3000); // Adjust time as needed for slower or faster transitions
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        <FaChevronLeft className="nav-icon left" onClick={prevTestimonials} />
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-card ${
              index === visibleStartIndex ? 'active' : ''
            }`}
            key={index}
            style={{ transform: `translateX(-${visibleStartIndex * 100}%)` }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
        <FaChevronRight className="nav-icon right" onClick={nextTestimonials} />
      </div>
    </div>
  );
};

export default Testimonials;