// Navbar.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <Link to="/" className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Honey_Logo_Orange.svg/1280px-Honey_Logo_Orange.svg.png" alt="Logo" />
      </Link>
      <ul className="navigation-links">
        <li><Link to="/">{t('navigation.home')}</Link></li>
        <li><Link to="/products">{t('navigation.products')}</Link></li>
        <li><Link to="/about">{t('navigation.about')}</Link></li>
        <li><Link to="/contact">{t('navigation.contact')}</Link></li>
      </ul>
      <LanguageSelect />
    </nav>
  );
}

export default Navbar;
