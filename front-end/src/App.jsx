// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductsPage from './components/Products/ProductsPage/ProductsPage'; // Adjusted import path
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
