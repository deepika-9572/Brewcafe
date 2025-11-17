import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/components/CheckoutForm.css';

const CheckoutForm = ({ onSuccess }) => {
  const { cart, getTotalPrice, placeOrder } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit-card'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const order = placeOrder(formData);
      onSuccess(order);
    } catch (error) {
      console.error('Order placement failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <p>Your cart is empty. Add items before checking out.</p>
      </div>
    );
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout</h2>

      <fieldset>
        <legend>Personal Information</legend>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Delivery Address</legend>
        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code *</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Payment Method</legend>
        <div className="form-group">
          <label htmlFor="paymentMethod">Select Payment Method *</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="apple-pay">Apple Pay</option>
          </select>
        </div>
      </fieldset>

      <div className="checkout-summary">
        <p>Total Amount: <strong>${(getTotalPrice() * 1.1).toFixed(2)}</strong></p>
      </div>

      <button
        type="submit"
        className="checkout-btn"
        disabled={isSubmitting || cart.length === 0}
      >
        {isSubmitting ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  );
};

export default CheckoutForm;
