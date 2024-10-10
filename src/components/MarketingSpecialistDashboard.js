import React, { useState } from 'react';
import './MarketingSpecialistDashboard.css'; // Optional: Add styles for the Marketing Specialist Dashboard

const MarketingSpecialistDashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({ title: '', description: '' });
  const [promotedProducts, setPromotedProducts] = useState([
    { id: 1, name: 'Handloom Scarf', isPromoted: true },
    { id: 2, name: 'Handwoven Blanket', isPromoted: false },
    { id: 3, name: 'Traditional Dress', isPromoted: false },
  ]);
  
  const handleAddCampaign = () => {
    if (newCampaign.title && newCampaign.description) {
      setCampaigns([...campaigns, { ...newCampaign }]);
      setNewCampaign({ title: '', description: '' }); // Reset form
    }
  };

  const togglePromoteProduct = (productId) => {
    setPromotedProducts(
      promotedProducts.map((product) =>
        product.id === productId ? { ...product, isPromoted: !product.isPromoted } : product
      )
    );
  };

  return (
    <div className="marketing-specialist-dashboard-container">
      <h1>Marketing Specialist Dashboard</h1>

      <h2>Manage Campaigns</h2>
      <div className="add-campaign-form">
        <input
          type="text"
          placeholder="Campaign Title"
          value={newCampaign.title}
          onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Campaign Description"
          value={newCampaign.description}
          onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })}
        />
        <button onClick={handleAddCampaign}>Add Campaign</button>
      </div>

      <h3>Current Campaigns</h3>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index}>
            <strong>{campaign.title}</strong>: {campaign.description}
          </li>
        ))}
      </ul>

      <h2>Promote Handloom Products</h2>
      <ul>
        {promotedProducts.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => togglePromoteProduct(product.id)}>
              {product.isPromoted ? 'Unpromote' : 'Promote'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketingSpecialistDashboard;
