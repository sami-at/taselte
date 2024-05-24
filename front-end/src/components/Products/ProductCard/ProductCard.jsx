// ProductCard.jsx

import React, { useState } from 'react';
import './ProductCard.css';
import ProductDetails from '../ProductDetails/ProductDetails';

export function Products(props) {
  const [showDetails, setShowDetails] = useState(false);
  const {id, image, name, price, totalSales, timeLeft, rating}= props.product
  console.log(2);


  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="row">
      <div className="product-grid" onClick={toggleDetails}>
        <div className="product-image">
          <a  className="image">
          <img className="pic-1" src={image} alt={name} /> {/* Use the dynamic image prop */}
          </a>
          <span className="product-discount-label">-33%</span>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a>{name}</a>
          </h3>
          <div className="price">
            <span>$90.00</span> {price}
          </div>
          <a className="view-more" >
            view more
          </a>
        </div>
      </div>
      {showDetails && <ProductDetails onClose={toggleDetails} productID={id} />}
    </div>
  );
}
