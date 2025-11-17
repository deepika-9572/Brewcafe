import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import '../styles/components/GalleryGrid.css';

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              <FiX />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
