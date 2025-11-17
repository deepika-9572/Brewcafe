import React from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/pages/AboutPage.css';

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Rivera',
      role: 'Founder & Head Barista',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Jessica Lee',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      name: 'Marcus Thompson',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    },
    {
      name: 'Sofia Martinez',
      role: 'Customer Experience Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    }
  ];

  return (
    <main className="about-page">
      <HeroSection
        title="About Brew Haven Café"
        subtitle="Crafting exceptional coffee experiences since 2020"
        backgroundImage="https://images.unsplash.com/photo-1495474472645-4c71bcdd2d18?w=1200&h=600&fit=crop"
      />

      <section className="story-section">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Brew Haven Café was founded with a simple mission: to create a space where coffee lovers
            can enjoy exceptional beverages in a warm, welcoming environment. What started as a small
            neighborhood café has grown into a beloved community hub.
          </p>
          <p>
            We believe that great coffee is more than just a drink—it's an experience. That's why we
            carefully source our beans from ethical, sustainable farms around the world, and our expert
            baristas craft each cup with precision and passion.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>We never compromise on the quality of our coffee, ingredients, or service.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>We're committed to environmentally responsible practices and ethical sourcing.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>We believe in building meaningful connections and supporting our local community.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We continuously explore new flavors and techniques to delight our customers.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stat">
          <h3>5+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className="stat">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Coffee Varieties</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Ethically Sourced</p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
