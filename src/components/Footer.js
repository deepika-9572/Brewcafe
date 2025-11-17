import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import '../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Brew Haven Café</h3>
          <p>Crafting the perfect cup of coffee since 2020. Premium quality, exceptional service.</p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook"><FiFacebook /></a>
            <a href="#twitter" aria-label="Twitter"><FiTwitter /></a>
            <a href="#instagram" aria-label="Instagram"><FiInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 123 Coffee Street, Brew City, BC 12345</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📧 hello@brewhaven.com</p>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
          <p>Saturday: 8:00 AM - 9:00 PM</p>
          <p>Sunday: 8:00 AM - 7:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Brew Haven Café. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
