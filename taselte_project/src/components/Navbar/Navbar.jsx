// Navbar.js
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Honey_Logo_Orange.svg/1280px-Honey_Logo_Orange.svg.png" alt="Logo" />
      </div>
      <ul className="navigation-links">
        <li><a href="#">{t('navigation.home')}</a></li>
        <li><a href="#">{t('navigation.about')}</a></li>
        <li><a href="#">{t('navigation.services')}</a></li>
        <li><a href="#">{t('navigation.contact')}</a></li>
      </ul>
      <LanguageSelect />
    </nav>
  );
}

export default Navbar;
