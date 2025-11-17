import React from 'react';
import MenuItemCard from './MenuItemCard';
import '../styles/components/FeaturedItems.css';

const FeaturedItems = ({ items, title }) => {
  return (
    <section className="featured-items">
      <div className="featured-header">
        <h2>{title}</h2>
        <p>Handpicked selections for your perfect coffee experience</p>
      </div>
      <div className="featured-grid">
        {items.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
