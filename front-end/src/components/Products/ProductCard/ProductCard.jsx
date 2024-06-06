import React, { useState } from 'react';
import './ProductCard.css';
import ProductDetails from '../ProductDetails/ProductDetails';

export function Products({ product }) {
  const [showDetails, setShowDetails] = useState(false);
  const { id, image, name, price, old_price, discount } = product;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="row">
      <div className="product-grid" onClick={toggleDetails}>
        <div className="product-image">
          <a className="image">
            <img className="pic-1" src={image} alt={name} />
          </a>
          {discount && <span className="product-discount-label">-{discount}%</span>}
        </div>
        <div className="product-content">
          <h3 className="title">
            <a>{name}</a>
          </h3>
          <div className="price">
            {old_price && <span className="old-price">{old_price}DH</span>}
            {price}DH
          </div>
          <a className="view-more">
            view more
          </a>
        </div>
      </div>
      {showDetails && <ProductDetails onClose={toggleDetails} productID={id} />}
    </div>
  );
}
