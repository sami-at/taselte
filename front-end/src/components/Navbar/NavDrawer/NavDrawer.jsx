// NavDrawer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import LanguageSelect from '../../LanguageSelect/LanguageSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavDrawer.css';

function NavDrawer({ isOpen, onClose }) {
    const { t } = useTranslation(); // Use useTranslation hook

    return (
        <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
            <div className="top">
                <FontAwesomeIcon icon={['fas', 'bars']} className="close-btn" onClick={onClose} /> {/* Fix icon import */}
                <LanguageSelect />
            </div>
            <ul className="navigation-links">
                <li><Link to="/">{t('navigation.home')}</Link></li>
                <li><Link to="/products">{t('navigation.products')}</Link></li>
                <li><Link to="/about">{t('navigation.about')}</Link></li>
                <li><Link to="/contact">{t('navigation.contact')}</Link></li>
            </ul>
        </div>
    );
}

export default NavDrawer;
