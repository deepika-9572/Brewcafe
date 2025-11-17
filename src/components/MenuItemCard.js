import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import '../styles/components/MenuItemCard.css';

const MenuItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="menu-item-card">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
        <span className="item-badge">{item.category}</span>
      </div>
      <div className="item-content">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">${item.price.toFixed(2)}</span>
          <div className="quantity-control">
            <button onClick={decrementQuantity} className="qty-btn">
              <FiMinus />
            </button>
            <span className="qty-display">{quantity}</span>
            <button onClick={incrementQuantity} className="qty-btn">
              <FiPlus />
            </button>
          </div>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
