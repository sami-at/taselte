import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import { useTranslation } from 'react-i18next';
import './LanguageSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setSelectedLanguage(i18n.language); // Update selected language when language changes
  }, [i18n.language]);

  // Handle language change
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="language-select">
      <select onChange={handleChange} value={selectedLanguage}> {/* Set value to selectedLanguage */}
        <option value="ar">العربية</option>
        <option value="fr">Français</option>
      </select>
      <div className="icon-container">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default LanguageSelect;
