import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import '../styles/pages/ContactPage.css';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.unsplash.com/photo-1495474472645-4c71bcdd2d18?w=1200&h=600&fit=crop"
      />

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We're here to help! Reach out to us through any of the
            following methods.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>123 Coffee Street</p>
              <p>Brew City, BC 12345</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>hello@brewhaven.com</p>
              <p>support@brewhaven.com</p>
            </div>

            <div className="info-card">
              <h3>🕐 Hours</h3>
              <p>Mon-Fri: 7AM - 8PM</p>
              <p>Sat-Sun: 8AM - 9PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <ContactForm />
        </div>
      </section>

      <MapEmbed />
    </main>
  );
};

export default ContactPage;
