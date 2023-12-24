// NotFoundView.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function NotFoundView() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - {t("label.pageNotFound")}</h1>
      <FontAwesomeIcon color="blue" icon={faFrown} size="10x" />
      <p>{t("label.pageNotFoundDescription")}</p>
      <Link to="/">
        <button>{t("label.home")}</button>
      </Link>
    </div>
  );
}

export default NotFoundView;
