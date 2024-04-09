import { useState } from 'react'; // Import useState hook
import { useTranslation } from 'react-i18next';
import './LanguageSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  // Handle language change
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };


  return (
    <div className="language-select">
      <select onChange={handleChange} > 
        <option value="ar">العربية</option>
        <option value="fr">Français</option>
      </select>
      <div className="icon-container" > 
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default LanguageSelect;
