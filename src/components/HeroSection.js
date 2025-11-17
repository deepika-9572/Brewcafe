import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/HeroSection.css';

const HeroSection = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="hero-cta">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
