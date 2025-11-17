import React from 'react';
import HeroSection from '../components/HeroSection';
import GalleryGrid from '../components/GalleryGrid';
import '../styles/pages/GalleryPage.css';

const GalleryPage = () => {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1495474472645-4c71bcdd2d18?w=600&h=400&fit=crop',
      alt: 'Cozy café interior with warm lighting'
    },
    {
      src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop',
      alt: 'Barista preparing espresso'
    },
    {
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688bcf566?w=600&h=400&fit=crop',
      alt: 'Latte art masterpiece'
    },
    {
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
      alt: 'Coffee beans close-up'
    },
    {
      src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
      alt: 'Cappuccino with latte art'
    },
    {
      src: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=600&h=400&fit=crop',
      alt: 'Creamy cappuccino in ceramic cup'
    },
    {
      src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=600&h=400&fit=crop',
      alt: 'Outdoor seating area'
    },
    {
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
      alt: 'Fresh roasted coffee beans'
    },
    {
      src: 'https://images.unsplash.com/photo-1510707577662-c8f71b4c3f12?w=600&h=400&fit=crop',
      alt: 'Espresso shot in progress'
    }
  ];

  return (
    <main className="gallery-page">
      <HeroSection
        title="Our Gallery"
        subtitle="Explore the beauty of Brew Haven Café"
        backgroundImage="https://images.unsplash.com/photo-1495474472645-4c71bcdd2d18?w=1200&h=600&fit=crop"
      />

      <section className="gallery-section">
        <div className="gallery-intro">
          <h2>Visual Journey</h2>
          <p>
            Step into our world and discover the artistry, passion, and warmth that define
            Brew Haven Café. From perfectly crafted latte art to our welcoming atmosphere,
            every moment captures the essence of our coffee culture.
          </p>
        </div>

        <GalleryGrid images={galleryImages} />
      </section>
    </main>
  );
};

export default GalleryPage;
