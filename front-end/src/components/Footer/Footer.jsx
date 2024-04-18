// Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();

  // Determine direction based on selected language
  const directionClass = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <footer className={`footer ${directionClass}`}>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>{t('aboutUs.title')}</h3>
            <p>
              {t('aboutUs.description')}
            </p>
          </div>
          <div className="footer-column">
            <h3>{t('footer.followUs')}</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>{t('footer.contactUs')}</h3>
            <div className="contact-icons">
              <a href="tel:+123456789"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="footer-row">
          <p className="thank-you">{t('footer.thankYou')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
