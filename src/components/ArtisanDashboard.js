import React, { useState } from 'react';
import './ArtisanDashboard.css'; // Optional: Add styles for the Artisan Dashboard

const ArtisanDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', inventory: '' });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.inventory) {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
      setNewProduct({ name: '', price: '', inventory: '' }); // Reset form
    }
  };

  return (
    <div className="artisan-dashboard-container">
      <h1>Artisan Dashboard</h1>
      <h2>Manage Products</h2>
      
      <div className="add-product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Inventory"
          value={newProduct.inventory}
          onChange={(e) => setNewProduct({ ...newProduct, inventory: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} (Inventory: {product.inventory})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtisanDashboard;
