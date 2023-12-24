import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { faGithub, faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const  profile = require("../assets/profileInformation.json")


const HeroComponent = () => {
  const { t } = useTranslation();

  const dateofbirth = new Date(profile.dateofbirth);
  const dateofbirthText =  dateofbirth.toLocaleDateString();

  const companiesSorted = profile.jobs.sort(x => x.startDate);

  const currentCompany = companiesSorted[0];
  const firstCompany = companiesSorted[companiesSorted.length - 1];

  const inBusinessDate = new Date(firstCompany.startDate);
  const inBusinessText = inBusinessDate.toLocaleDateString();

  return (
    <Container fluid className="hero-component" style={{ minHeight: '100vh' }}>
      <Row className="align-items-center" style={{ minHeight: '100vh' }}>
        <Col xs={12} md={6} className="hero-image">
          {/* Platz für das Bild */}
          <img src="/profiledata/profilePictureFull.jpeg" alt={ t("alt.profilePictureFull") } className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="hero-info">
          <h2 className="welcome-text">
            <div dangerouslySetInnerHTML={{__html:
              t("format.welcome", { 
                  firstName: '<span class="highlight">' + profile.firstName + '</span>'
              })
            }}/>
          </h2>
          <div className="current-job-text"> 
            {t("format.jobTitleShort", { 
                    title: t("jobs." + currentCompany.job + ".title")
              } 
            )}
            <br/>
            { t("format.companyShort", { 
                    name: t('companies.' + currentCompany.company + ".name"),
                    city: t('companies.' + currentCompany.company + ".city")
              }
            )}
          </div>
          <div className='information-text'>
            { t('format.dateofbirth', { date: dateofbirthText }) }
          </div>
          <br/>
          <div className='information-text'>
            { t('format.inbusinesssince', { date: inBusinessText }) }
          </div>

          <div className="social-links">
            <a href={t("format.githubProfileUrl", { username: profile.social.github.username })} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={t("format.xingProfileUrl", { username: profile.social.xing.username })} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXing} />
            </a>
            <a href={t("format.linkedinProfileUrl", { username: profile.social.linkedin.username })} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={`mailto:${profile.social.email.contact}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={`tel:${profile.social.phone.number}`}>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroComponent;
