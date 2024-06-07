import React, { useState, useEffect } from 'react';
import './ProductDetails.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTag, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({ onClose, productID }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://tasselte.000webhostapp.com/api/products/${productID}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, [productID]);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleOrderNow = () => {
    const productName = encodeURIComponent(product.name);
    const unitPrice = product.price;
    const totalPrice = quantity * unitPrice;
    const message = `Nom du produit: ${productName}%0A` +
                    `Prix unit: $${unitPrice}%0A` +
                    `Prix total: $${totalPrice}`;

    const sellerPhoneNumber = '+212639260422';
    const whatsappLink = `https://wa.me/${sellerPhoneNumber}/?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="product-details-overlay" onClick={onClose}>
      <div className="product-details-modal" onClick={stopPropagation}>
        <div className="exit-icon" onClick={onClose}>
          <FontAwesomeIcon icon={isMobile ? faArrowLeft : faTimes} />
        </div>
        <div className="product-details-content">
          <div className="product-details-left">
            <img className="product-details-image" src={`https://tasselte.000webhostapp.com/${product.image}`} alt={product.name} />
          </div>
          <div className="product-details-right">
            <h2 className="product-details-title">{product.name}</h2>
            <div className="product-details-price">
              <span className="current-price">{product.price} DH</span>
              {product.old_price && <span className="old-price">{product.old_price} DH</span>}
              {product.discount && <span className="saving"><FontAwesomeIcon className="tag-icon" icon={faTag} /> SAVE {product.discount}%</span>}
            </div>
            <div className="product-details-size">
              <label htmlFor="volume">Volume:</label>
              <select id="size">
                <option value="1">500 g</option>
                <option value="2">1 Kg</option>
              </select>
            </div>
            <div className="product-details-quantity">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button className={`quantity-btn ${quantity === 1 ? 'forbidden-cursor' : ''}`} onClick={handleDecrement} disabled={quantity === 1}>
                  <FontAwesomeIcon id="quantity-icon" icon={faMinus} />
                </button>
                <input type="text" id="quantity" value={quantity} readOnly />
                <button className="quantity-btn" onClick={handleIncrement}>
                  <FontAwesomeIcon id="quantity-icon" icon={faPlus} />
                </button>
              </div>
            </div>
            <button className="order-now-btn" onClick={handleOrderNow}>Order Now <FaWhatsapp className="whatsapp-icon" size={30} /></button>
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
