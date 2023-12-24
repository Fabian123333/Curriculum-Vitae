import { faArrowRight, faBug, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { faBitbucket, faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';

const profile = require("../assets/profileInformation.json")

const getProviderIcon = (provider) => {
    const icons = {
        "github": faGithub,
        "bitbucket": faBitbucket,
        "steam": faSteam,
        "bugzilla": faBug,
        "website": faLink
    };

    return icons[provider] || null; // Default to null or a default icon
};

const SkillsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t } = useTranslation();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container fluid className="skills-section">
      <Row className="align-items-start" style={{ minHeight: '100vh' }}>
      <Col xs={12} md={12}>
            <h1 className="employment-title">{t("title.skills")}</h1>
        </Col>
        <Col xs={12} md={6} className="skills-details">
          {selectedCategory ? (
            <>
              <Row>
                <Col xs={12} md={12}>
                  <h3>{t("skills." + selectedCategory + ".title")}</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                    <div dangerouslySetInnerHTML={{__html: t("skills." + selectedCategory + ".description")}}/>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                <div className="skill-tag-list">
                    {profile.skills.filter(x => x.id === selectedCategory)[0].tags.map((tag, index) => (
                    <span key={index} className="skill-tag">
                        {t("tags." + tag + ".name")}
                    </span>
                    ))}
                </div>
               </Col>
              </Row>
              <Row>
                <Col>
                    <h4>{t("title.references")}</h4>
                    {
                        <div className="linked-projects project-link">
                            {profile.skills.filter(x => x.id === selectedCategory)[0].projects.sort(x => x.name).map((project, index) => (
                                <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
                                  <Row>
                                    <Col md={11}>
                                      {project.name}
                                    </Col>
                                    <Col md={1}>
                                      <FontAwesomeIcon icon={getProviderIcon(project.provider)} />
                                    </Col>  
                                  </Row>
                                </a>
                            ))}
                        </div>
                    }
                </Col>
              </Row>
            </>
          ) : (
            <div className="skill-select-prompt">
              <p>{t("label.selectskill")}</p>
              <FontAwesomeIcon icon={faArrowRight} className="blink" />
            </div>
          )}
        </Col>
        <Col xs={12} md={6} className="category-list">
          <ListGroup>
            {Object.keys(profile.skills.sort((a,b) => t("skills." + a.id + ".title") > t("skills." + b.id + ".title"))).map((category, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleCategorySelect(profile.skills[index].id)}
              >
                <h4>
                    {t("skills." + profile.skills[index].id + ".title")}
                </h4>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsComponent;
