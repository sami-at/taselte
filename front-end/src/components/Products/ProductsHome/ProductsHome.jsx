import React, { useState, useEffect } from 'react';
import { Products } from '../ProductCard/ProductCard';
import './ProductsHome.css';


const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const data = await response.json();
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return( 
    <div className="product-container">
      {products.map((product) => (
        <Products key={product.id} product={product} /> // Pass product data
      ))}
  </div>
)
};

export default ProductsPage;
