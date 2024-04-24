// ProductDetails.jsx

import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ onClose }) => {
  return (
    <div>
      <div className="backdrop" onClick={onClose}></div>
      <div className="product-details-modal">
        <div className="exit-icon" onClick={onClose}>
          <i className="fas fa-times"></i>
        </div>
        <div className="product-details-content">
          <div className="product-details-left">
            <img className="product-details-image" src="./image1.jpeg" alt="Product 1" />
          </div>
          <div className="product-details-right">
            <h2 className="product-details-title">Men's Blazer</h2>
            <div className="product-details-price">
              <span className="current-price">$66.00</span>
              <span className="old-price">$90.00</span>
              <span className="saving">SAVE 33%</span>
            </div>
            <div className="product-details-size">
              <label htmlFor="size">Size:</label>
              <select id="size">
                <option value="1">1 Litre</option>
                <option value="2">2 Litres</option>
              </select>
            </div>
            <div className="product-details-quantity">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button className="quantity-btn">-</button>
                <input type="text" id="quantity" defaultValue={1}  />
                <button className="quantity-btn">+</button>
              </div>
            </div>
            <button className="order-now-btn">Order Now <i className="fab fa-whatsapp"></i></button>
            <div className="product-description">
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
