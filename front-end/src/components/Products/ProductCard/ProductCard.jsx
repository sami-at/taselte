// ProductCard.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faRandom } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import ProductDetails from '../ProductDetails/ProductDetails';

export function Products() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="row">
      <div className="product-grid" onClick={toggleDetails}>
        <div className="product-image">
          <a href="#" className="image">
            <img className="pic-1" src="./image1.jpeg" alt="Product 1" />
          </a>
          <span className="product-discount-label">-33%</span>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a href="#">Men's Blazer</a>
          </h3>
          <div className="price">
            <span>$90.00</span> $66.00
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
