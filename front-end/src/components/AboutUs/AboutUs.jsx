import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.webp';
import './AboutUs.css';

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  // Determine direction based on selected language
  const directionClass = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className={`about-us-container ${directionClass}`}>
      <div className="title">
        <h1>{t('aboutUs.title')}</h1>
      </div>
      <div className="content">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="company-info">
          <p>
            {t('aboutUs.description')}
          </p>
        </div>
      </div>
      <div className="map">
        {/* Add Google Map integration here */}
      </div>
    </div>
  );
}

export default AboutUs;
