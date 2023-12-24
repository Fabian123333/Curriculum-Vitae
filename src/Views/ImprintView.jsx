import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const profile = require("../assets/profileInformation.json")

function formatPhoneNumber(number) {
  // Assuming German numbers which have a consistent country code of +49
  // and typically a 4-digit area/operator code following
  const countryCode = number.substring(0, 3); // "+49"
  const areaCode = number.substring(3, 7); // "1577"
  const rest = number.substring(7); // "0333312"
  return `${countryCode} ${areaCode} ${rest}`;
}

const ImprintView = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Link to="/">
        <Button className="my-3">
          {t("label.home")}
        </Button>
      </Link>
      <h1>{t("label.impressum")}</h1>
      <h2>
        {t("label.serviceProvider")}
      </h2>
      <p>
        <strong>{profile.firstName + " " + profile.surName}</strong><br />
        {profile.street + " " + profile.streetNumber}<br />
        {profile.postalCode + " " + profile.city}<br />
        {t("country." + profile.country)}
      </p>
      <h2>
        {t("label.contact")}
      </h2>
      <p>
        <FontAwesomeIcon icon={faPhone} alt={t("alt.phone")}/> {formatPhoneNumber(profile.social.phone.number)}<br />
        <FontAwesomeIcon icon={faEnvelope} alt={t("alt.email")}/> {profile.social.email.contact}<br />
      </p>
      <h2>
        {t("label.privacyPolicy")}
      </h2>
      <p>
        {t("format.privacyPolicy",{
          owner: profile.firstName + " " + profile.surName,
          domain: profile.domain
        })}
      </p>
      <p>
        <div dangerouslySetInnerHTML={{__html: t("format.privacyPolicy2")}}/>
      </p>
      <h2>
        {t("label.gdpr")}
      </h2>
      <div dangerouslySetInnerHTML={{__html: 
        t("format.gdpr",
          {
            owner: profile.firstName + " " + profile.surName
          }
        )
      }}/>
      <h2>
        {t("label.logfiles")}
      </h2>
      <p>
        {t("format.logfiles",
          {
            owner: profile.firstName + " " + profile.surName
          }
        )}
      </p>
      <h2>
        {t("label.thirdpartypolicies")}
      </h2>
      <p>
        {t("format.thirdpartypolicies",
          {
            owner: profile.firstName + " " + profile.surName
          }
        )}
      </p>
      <p>
        {t("format.thirdpartypolicies2",
          {
            owner: profile.firstName + " " + profile.surName
          }
        )}
      </p>
      <h2>
        {t("label.childrensInformation")}
      </h2>
      <p>
        {t("format.childrensInformation",
          {
            owner: profile.firstName + " " + profile.surName
          }
        )}
      </p>
      <p>
        {t("format.childrensInformation2",
          {
            owner: profile.firstName + " " + profile.surName
          }
        )}
      </p>
      <h2>
        {t("label.onlinePrivacyPolicy")}
      </h2>
      <p>
        {t("format.onlinePrivacyPolicy",
          {
            owner: profile.firstName + " " + profile.surName
          }
        )}
      </p>
      <h2>
        {t("label.consent")}
      </h2>
      <p>
        {t("format.consent")}
      </p>
    </Container>
  );
};

export default ImprintView;
