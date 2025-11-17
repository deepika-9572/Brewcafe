import React from 'react';
import '../styles/components/MapEmbed.css';

const MapEmbed = () => {
  return (
    <div className="map-embed-container">
      <h2>Find Us</h2>
      <div className="map-wrapper">
        <iframe
          title="Brew Haven Café Location"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="map-info">
        <p><strong>Brew Haven Café</strong></p>
        <p>123 Coffee Street, Brew City, BC 12345</p>
        <p>📞 +1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default MapEmbed;
