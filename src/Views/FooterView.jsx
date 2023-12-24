import React from 'react';
import { useTranslation } from 'react-i18next'; // assuming i18next is used
import { Link } from 'react-router-dom';

const profile = require("../assets/profileInformation.json")

const FooterView = () => {
  const { t, i18n } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');
  };

  return (
    <footer className="footer-view">
      <div className="copyright">
        <span>
            {t("format.copyright", { currentYear, createYear: profile.createYear, legal: profile.firstName + " " + profile.surName })}
        </span>
      </div>
      <div className="links">
        <Link to="/impressum">
          {t("label.impressum")}
        </Link>
        <button onClick={toggleLanguage}>
          {i18n.language === 'de' ? 'In English' : 'Auf Deutsch'}
        </button>
      </div>
    </footer>
  );
};

export default FooterView;
