import { useState } from 'react'; // Import useState hook
import { useTranslation } from 'react-i18next';
import './LanguageSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // State to track whether the dropdown is open

  // Handle language change
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-select">
      <select onChange={handleChange} className={`language-select-dropdown ${isOpen ? 'open' : ''}`}> {/* Apply 'open' class when isOpen is true */}
        <option value="ar">العربية (Arabic)</option>
        <option value="fr">Français (French)</option>
      </select>
      <div className="icon-container" onClick={toggleDropdown}> {/* Icon container with onClick event */}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default LanguageSelect;
