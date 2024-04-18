// FooterM.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import './FooterM.css';

const FooterM = () => {
    const { t, i18n } = useTranslation();
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [followUsOpen, setFollowUsOpen] = useState(false);
    const [contactUsOpen, setContactUsOpen] = useState(false);

    // Determine direction based on selected language
    const directionClass = i18n.language === 'ar' ? 'rtl' : 'ltr';

    const toggleAccordion = (accordion) => {
        switch (accordion) {
            case 'aboutUs':
                setAboutUsOpen(!aboutUsOpen);
                break;
            case 'followUs':
                setFollowUsOpen(!followUsOpen);
                break;
            case 'contactUs':
                setContactUsOpen(!contactUsOpen);
                break;
            default:
                break;
        }
    };

    return (
        <footer className={`footer-mobile ${directionClass}`}>
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column">
                        <h3 onClick={() => toggleAccordion('aboutUs')}>
                            {t('aboutUs.title')}
                            <FaChevronDown className={`arrow-icon ${aboutUsOpen ? 'rotate' : ''}`} />
                        </h3>
                        {aboutUsOpen && <p>{t('aboutUs.description')}</p>}
                    </div>
                    <div className="footer-column">
                        <h3 onClick={() => toggleAccordion('followUs')}>
                            {t('footer.followUs')}
                            <FaChevronDown className={`arrow-icon ${followUsOpen ? 'rotate' : ''}`} />
                        </h3>
                        {followUsOpen && (
                            <div className="social-icons">
                                <a href="https://www.facebook.com"><FaFacebook /></a>
                                <a href="https://www.instagram.com"><FaInstagram /></a>
                            </div>
                        )}
                    </div>
                    <div className="footer-column">
                        <h3 onClick={() => toggleAccordion('contactUs')}>
                            {t('footer.contactUs')}
                            <FaChevronDown className={`arrow-icon ${contactUsOpen ? 'rotate' : ''}`} />
                        </h3>
                        {contactUsOpen && (
                            <div className="contact-icons">
                                <a href="tel:+123456789"><FaWhatsapp /></a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="footer-row">
                    <p className="thank-you">{t('footer.thankYou')}</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterM;
