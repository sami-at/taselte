import React, { useState, useEffect } from 'react';
import './ProductDetails.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTag, faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({ onClose , productID }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://honeysite-production.up.railway.app/api/products/${productID}`);
        const data = await response.json();
        setProduct(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div>
      <div className="backdrop" onClick={onClose}></div>
      <div className="product-details-modal">
        <div className="exit-icon" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="product-details-content">
          <div className="product-details-left">
            <img className="product-details-image" src="./image1.jpeg" alt="Product 1" />
          </div>
          <div className="product-details-right">
            <h2 className="product-details-title">{product.name}</h2>
            <div className="product-details-price">
              <span className="current-price">${product.price}</span>
              <span className="old-price">$90.00</span>
              <span className="saving"> <FontAwesomeIcon className='tag-icon' icon={faTag} /> SAVE 33%</span>
            </div>
            <div className="product-details-size">
              <label htmlFor="volume">Volume:</label>
              <select id="size">
                <option value="1">1 Litre</option>
                <option value="2">2 Litres</option>
              </select>
            </div>
            <div className="product-details-quantity">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button className={`quantity-btn ${quantity === 1 ? 'forbidden-cursor' : ''}`} onClick={handleDecrement} disabled={quantity === 1}>
                  <FontAwesomeIcon id='quantity-icon' icon={faMinus} />
                </button>
                <input type="text" id="quantity" value={quantity} readOnly />
                <button className="quantity-btn" onClick={handleIncrement}>
                  <FontAwesomeIcon id='quantity-icon' icon={faPlus} />
                </button>
              </div>
            </div>
            <button className="order-now-btn">Order Now <FaWhatsapp className='whatsapp-icon' size={30} /></button>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
