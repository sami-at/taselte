import React, { useState, useEffect } from 'react';
import { Products } from '../ProductCard/ProductCard';
import './ProductsHome.css';

const ProductsHome = () => {
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

  // Slice the products array to include only the first three items
  const firstThreeProducts = products.slice(0, 3);

  return (
    <div>
      <h2 className="products-title">Our Products</h2>
      <div className="product-container-home">
        {firstThreeProducts.map((product) => (
          <Products
            key={product.id}
            product={product}
          />
        ))}

        {/* Fourth card position with overlay */}
        <a href="/products" className="see-more-overlay">
          <span  className="see-more-link">
            See More<hr>
          </hr>Products...
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProductsHome;
