import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedItems from '../components/FeaturedItems';
import TestimonialSlider from '../components/TestimonialSlider';
import '../styles/pages/HomePage.css';

const HomePage = () => {
  const featuredItems = [
    {
      id: 1,
      name: 'Espresso',
      category: 'Coffee',
      description: 'Rich and bold espresso shot',
      price: 3.50,
      image: 'https://images.unsplash.com/photo-1510707577662-c8f71b4c3f12?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Cappuccino',
      category: 'Coffee',
      description: 'Smooth espresso with steamed milk',
      price: 4.50,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Latte',
      category: 'Coffee',
      description: 'Creamy coffee with velvety milk',
      price: 4.75,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Iced Coffee',
      category: 'Cold Brew',
      description: 'Refreshing cold brew coffee',
      price: 4.25,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba20d4d?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Coffee Enthusiast',
      text: 'Brew Haven Café has the best coffee in the city! The atmosphere is perfect for working or relaxing.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Mike Chen',
      role: 'Business Owner',
      text: 'I visit every morning before work. The staff is friendly and the quality is consistent.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      name: 'Emma Davis',
      role: 'Student',
      text: 'Perfect study spot! Great coffee, comfortable seating, and reliable WiFi.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  return (
    <main className="home-page">
      <HeroSection
        title="Welcome to Brew Haven Café"
        subtitle="Experience the perfect cup of coffee crafted with passion"
        backgroundImage="https://images.unsplash.com/photo-1495474472645-4c71bcdd2d18?w=1200&h=600&fit=crop"
        ctaText="Explore Menu"
        ctaLink="/menu"
      />

      <section className="about-preview">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Brew Haven Café is dedicated to serving the finest coffee and creating a welcoming
            atmosphere for our community. Since 2020, we've been committed to quality, sustainability,
            and exceptional customer service.
          </p>
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🌱</span>
              <h3>Ethically Sourced</h3>
              <p>Premium beans from sustainable farms</p>
            </div>
            <div className="feature">
              <span className="feature-icon">👨‍🍳</span>
              <h3>Expert Baristas</h3>
              <p>Skilled professionals crafting your drink</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🏡</span>
              <h3>Cozy Atmosphere</h3>
              <p>Perfect place to relax and connect</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedItems items={featuredItems} title="Featured Favorites" />

      <TestimonialSlider testimonials={testimonials} />

      <section className="cta-section">
        <h2>Ready for Your Perfect Cup?</h2>
        <p>Visit us today or order online for delivery</p>
        <div className="cta-buttons">
          <a href="/menu" className="cta-btn primary">View Menu</a>
          <a href="/contact" className="cta-btn secondary">Contact Us</a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
