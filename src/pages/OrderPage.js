import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../components/CartComponent';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../context/CartContext';
import '../styles/pages/OrderPage.css';

const OrderPage = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(null);
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleCheckoutSuccess = (order) => {
    setOrderPlaced(order);
    setShowCheckout(false);
  };

  if (orderPlaced) {
    return (
      <main className="order-page">
        <section className="order-success">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h1>Order Placed Successfully!</h1>
            <p>Thank you for your order. We're preparing your coffee with care.</p>

            <div className="order-details">
              <h2>Order Summary</h2>
              <p><strong>Order ID:</strong> #{orderPlaced.id}</p>
              <p><strong>Name:</strong> {orderPlaced.firstName} {orderPlaced.lastName}</p>
              <p><strong>Email:</strong> {orderPlaced.email}</p>
              <p><strong>Delivery Address:</strong> {orderPlaced.address}, {orderPlaced.city}</p>
              <p><strong>Total Amount:</strong> ${(orderPlaced.total * 1.1).toFixed(2)}</p>
              <p><strong>Items:</strong> {orderPlaced.items.length} item(s)</p>
            </div>

            <div className="success-actions">
              <button onClick={() => navigate('/')} className="btn-primary">
                Back to Home
              </button>
              <button onClick={() => navigate('/menu')} className="btn-secondary">
                Continue Shopping
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="order-page">
      <div className="order-container">
        <div className="order-header">
          <h1>Your Order</h1>
          <p>Review your items and proceed to checkout</p>
        </div>

        {cart.length === 0 && !showCheckout ? (
          <section className="empty-order">
            <div className="empty-content">
              <p>Your cart is empty</p>
              <button onClick={() => navigate('/menu')} className="btn-primary">
                Browse Menu
              </button>
            </div>
          </section>
        ) : (
          <div className="order-content">
            {!showCheckout ? (
              <>
                <CartComponent />
                <button
                  className="checkout-btn"
                  onClick={() => setShowCheckout(true)}
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <div className="checkout-section">
                <CheckoutForm onSuccess={handleCheckoutSuccess} />
                <button
                  className="back-to-cart-btn"
                  onClick={() => setShowCheckout(false)}
                >
                  Back to Cart
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default OrderPage;
