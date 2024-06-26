import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';
import honeyJarImage from '../../../images/honeyjar.png';

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
          <a href="/products">
          <button  className='hero-button'>{t('hero.button')}</button>
          </a>
        </div>
        <div className="image">
          <img src={honeyJarImage} alt="Honey Jar" /> {/* Use the imported image */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
