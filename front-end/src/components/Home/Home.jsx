// Home.jsx
import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import ProductsHome from '../../components/Products/ProductsHome/ProductsHome';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsHome />
      {/* Add more sections/components here */}
    </div>
  );
}

export default Home;
