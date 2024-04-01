// HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>Welcome to our Honey Store</h1>
          <p>Discover the finest quality honey products</p>
          <button>Shop Now</button>
        </div>
        <div className="image">
          <img src="front-end\src\images\honey-jar.png" alt="Honey Jar" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
