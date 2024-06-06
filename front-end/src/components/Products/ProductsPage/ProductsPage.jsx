import React, { useState, useEffect } from 'react';
import { Products } from '../ProductCard/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tasselte.000webhostapp.com/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <Products 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
