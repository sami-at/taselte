// ProductPage.jsx

import React, { useState } from 'react';
import { Products } from '../ProductCard/ProductCard';
import './ProductsPage.css';


const ProductsPage = () => {
  const [products, setProducts] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/products');
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return( 
    <div className="product-container">
      {products.map((product) => (
        <Products key={product.id} product={product} /> // Pass product data
      ))}
  </div>
)
};

export default ProductsPage;
