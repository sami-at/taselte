// LanguageSelect.js
import { useTranslation } from 'react-i18next';
import './LanguageSelect.css';

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  // Handle language change
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="language-select">
      <select onChange={handleChange}>
        <option value="ar">العربية (Arabic)</option>
        <option value="fr">Français (French)</option>
      </select>
      <i className="fa-light fa-chevron-down"></i>
    </div>
  );
}

export default LanguageSelect;
