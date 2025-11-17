import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import '../styles/components/TestimonialSlider.css';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial-slider">
      <h2>What Our Customers Say</h2>
      <div className="slider-container">
        <button className="slider-btn prev" onClick={goToPrevious}>
          <FiChevronLeft />
        </button>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={current.image} alt={current.name} className="testimonial-avatar" />
            <div className="testimonial-info">
              <h3>{current.name}</h3>
              <p>{current.role}</p>
            </div>
          </div>
          <div className="testimonial-rating">
            {[...Array(current.rating)].map((_, i) => (
              <FiStar key={i} className="star-filled" />
            ))}
          </div>
          <p className="testimonial-text">"{current.text}"</p>
        </div>

        <button className="slider-btn next" onClick={goToNext}>
          <FiChevronRight />
        </button>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
