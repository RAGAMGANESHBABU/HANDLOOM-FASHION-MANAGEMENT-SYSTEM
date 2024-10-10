import React, { useState } from 'react';
import './BuyerDashboard.css'; // Optional: Add styles for the Buyer Dashboard

const BuyerDashboard = () => {
  const [products] = useState([
    { id: 1, name: 'Handloom Scarf', price: 25, inventory: 50 },
    { id: 2, name: 'Handwoven Blanket', price: 75, inventory: 20 },
    { id: 3, name: 'Traditional Dress', price: 100, inventory: 15 },
  ]);

  const [orders, setOrders] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleOrder = (product) => {
    if (product.inventory > 0) {
      setOrders([...orders, product]);
      // Reduce inventory (for demo purposes, not updating original product)
      product.inventory -= 1; 
    }
  };

  const handleFeedbackSubmit = () => {
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <div className="buyer-dashboard-container">
      <h1>Buyer Dashboard</h1>
      <h2>Available Handloom Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} (Available: {product.inventory})
            <button onClick={() => handleOrder(product)}>Order</button>
          </li>
        ))}
      </ul>

      <h3>Track Your Orders</h3>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.name} - ${order.price}
          </li>
        ))}
      </ul>

      <h3>Provide Feedback</h3>
      <textarea
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
    </div>
  );
};

export default BuyerDashboard;
