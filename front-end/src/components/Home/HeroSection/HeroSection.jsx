import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  // Determine direction based on selected language
  const directionClass = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className={`hero ${directionClass}`}>
      <div className="container">
        <div className="text">
          <h1>{t('hero.heading')}</h1>
          <p>{t('hero.description')}</p>
          <button>{t('hero.button')}</button>
        </div>
        <div className="image">
          <img src="front-end\src\images\honeyjar.png"  />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
