import React from 'react';
import MenuItemCard from './MenuItemCard';
import '../styles/components/MenuCategory.css';

const MenuCategory = ({ category, items }) => {
  return (
    <section className="menu-category">
      <h2 className="category-title">{category}</h2>
      <div className="category-divider"></div>
      <div className="items-grid">
        {items.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
