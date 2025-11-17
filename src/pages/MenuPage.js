import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MenuCategory from '../components/MenuCategory';
import '../styles/pages/MenuPage.css';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems = {
    espresso: [
      {
        id: 1,
        name: 'Single Espresso',
        category: 'Espresso',
        description: 'Bold and rich single shot',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1510707577662-c8f71b4c3f12?w=400&h=300&fit=crop'
      },
      {
        id: 2,
        name: 'Double Espresso',
        category: 'Espresso',
        description: 'Intense double shot of espresso',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1510707577662-c8f71b4c3f12?w=400&h=300&fit=crop'
      },
      {
        id: 3,
        name: 'Espresso Macchiato',
        category: 'Espresso',
        description: 'Espresso with a touch of milk foam',
        price: 4.00,
        image: 'https://images.unsplash.com/photo-1510707577662-c8f71b4c3f12?w=400&h=300&fit=crop'
      }
    ],
    milk: [
      {
        id: 4,
        name: 'Cappuccino',
        category: 'Milk Coffee',
        description: 'Smooth espresso with steamed milk',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop'
      },
      {
        id: 5,
        name: 'Latte',
        category: 'Milk Coffee',
        description: 'Creamy coffee with velvety milk',
        price: 4.75,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        id: 6,
        name: 'Flat White',
        category: 'Milk Coffee',
        description: 'Silky microfoam with espresso',
        price: 4.75,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        id: 7,
        name: 'Mocha',
        category: 'Milk Coffee',
        description: 'Espresso, steamed milk, and chocolate',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      }
    ],
    cold: [
      {
        id: 8,
        name: 'Iced Coffee',
        category: 'Cold Brew',
        description: 'Refreshing cold brew coffee',
        price: 4.25,
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba20d4d?w=400&h=300&fit=crop'
      },
      {
        id: 9,
        name: 'Iced Latte',
        category: 'Cold Brew',
        description: 'Cold espresso with chilled milk',
        price: 4.75,
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba20d4d?w=400&h=300&fit=crop'
      },
      {
        id: 10,
        name: 'Cold Brew',
        category: 'Cold Brew',
        description: 'Smooth, cold-steeped coffee',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba20d4d?w=400&h=300&fit=crop'
      }
    ],
    specialty: [
      {
        id: 11,
        name: 'Caramel Macchiato',
        category: 'Specialty',
        description: 'Espresso with caramel and milk',
        price: 5.25,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        id: 12,
        name: 'Vanilla Latte',
        category: 'Specialty',
        description: 'Smooth latte with vanilla syrup',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
      },
      {
        id: 13,
        name: 'Hazelnut Cappuccino',
        category: 'Specialty',
        description: 'Cappuccino with hazelnut flavor',
        price: 5.25,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop'
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'milk', name: 'Milk Coffee' },
    { id: 'cold', name: 'Cold Brew' },
    { id: 'specialty', name: 'Specialty' }
  ];

  const getAllItems = () => {
    return Object.values(menuItems).flat();
  };

  const getDisplayItems = () => {
    if (selectedCategory === 'all') {
      return getAllItems();
    }
    return menuItems[selectedCategory] || [];
  };

  return (
    <main className="menu-page">
      <HeroSection
        title="Our Menu"
        subtitle="Discover our carefully crafted coffee selections"
        backgroundImage="https://images.unsplash.com/photo-1495474472645-4c71bcdd2d18?w=1200&h=600&fit=crop"
      />

      <section className="menu-container">
        <div className="category-filter">
          <h2>Filter by Category</h2>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {selectedCategory === 'all' ? (
          <>
            <MenuCategory category="Espresso" items={menuItems.espresso} />
            <MenuCategory category="Milk Coffee" items={menuItems.milk} />
            <MenuCategory category="Cold Brew" items={menuItems.cold} />
            <MenuCategory category="Specialty" items={menuItems.specialty} />
          </>
        ) : (
          <MenuCategory
            category={categories.find(c => c.id === selectedCategory)?.name}
            items={getDisplayItems()}
          />
        )}
      </section>
    </main>
  );
};

export default MenuPage;
