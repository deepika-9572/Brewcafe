import React from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import '../styles/components/CartComponent.css';

const CartComponent = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-component">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <FiMinus />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <FiPlus />
              </button>
            </div>
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id)}
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (10%):</span>
          <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${(getTotalPrice() * 1.1).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
