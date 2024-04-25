// ProductCard.jsx

import React, { useState } from 'react';
import './ProductCard.css';
import ProductDetails from '../ProductDetails/ProductDetails';

export function Products(product) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="row">
      <div className="product-grid" onClick={toggleDetails}>
        <div className="product-image">
          <a  className="image">
            <img className="pic-1" src="./image1.jpeg" alt="Product 1" />
          </a>
          <span className="product-discount-label">-33%</span>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a>{product.name}</a>
          </h3>
          <div className="price">
            <span>$90.00</span> ${product.price}
          </div>
          <a className="view-more" href="#">
            view more
          </a>
        </div>
      </div>
      {showDetails && <ProductDetails onClose={toggleDetails} />}
    </div>
  );
}
