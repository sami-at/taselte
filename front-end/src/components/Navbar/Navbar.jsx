import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 760;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setShowMenu(false); // Close the menu when screen size becomes larger than 760px
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <Link to="/" className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Honey_Logo_Orange.svg/1280px-Honey_Logo_Orange.svg.png" alt="Logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navigation-links ${showMenu ? 'show' : ''}`}>
        {isMobile && (
          <div className='navdrawer-top'>
            <FontAwesomeIcon className="exit-icon" icon={faTimes} onClick={toggleMenu} />
            <li><LanguageSelect /></li>
          </div>
        )}
        <li><Link to="/" onClick={closeMenu}>{t('navigation.home')}</Link></li>
        <li><Link to="/products" onClick={closeMenu}>{t('navigation.products')}</Link></li>
        <li><Link to="/about" onClick={closeMenu}>{t('navigation.about')}</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>{t('navigation.contact')}</Link></li>
      </ul>
      {!isMobile && <LanguageSelect id="navselect" />}
    </nav>
  );
};

export default Navbar;
