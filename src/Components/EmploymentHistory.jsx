import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import EmploymentHistoryCompanyItem from './EmploymentHistoryCompanyItem';

const profile = require("../assets/profileInformation.json")

const EmploymentHistory = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const { t } = useTranslation();

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };
  
  return (
    <Container fluid className="employment-history">
      <Row className="align-items-start" style={{ minHeight: '100vh' }}>
        <Col xs={12} md={12}>
            <h1 className="employment-title">{t("title.employeeHistory")}</h1>
        </Col>
        <Col xs={12} md={6} className="job-list">
          <ListGroup>
            {profile.jobs.map((job, index) => (
                <EmploymentHistoryCompanyItem
                    key={index}
                    job={job}
                    onSelect={handleJobSelect}
                />
            ))}
          </ListGroup>
        </Col>

        <Col xs={12} md={6} className="job-details">
          {selectedJob ? (
            <>
              <h3>{t("jobs." + selectedJob.job + ".title")} ({t("experienceLevels." + selectedJob.experience + ".title" )})</h3>
              <h4>{t("label.overview")}</h4>
              <p className="job-description">
                <div dangerouslySetInnerHTML={{__html: t("jobs." + selectedJob.job + ".description")}}/>
              </p>
              <h4>{t("label.company")}</h4>
              <p className="company-description">
                <div dangerouslySetInnerHTML={{__html: t("companies." + selectedJob.company + ".description")}}/>
              </p>
              <a href={t("companies." + selectedJob.job + ".url")} target="_blank" rel="noopener noreferrer" className="company-website">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> {t("label.visitWebsite")}
              </a>
              <div className="tag-list">
                {selectedJob.tags.map((tag, index) => (
                  <span key={index} className="job-tag">
                    {t("tags." + tag + ".name")}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div className="job-select-prompt">
              <p>{t("label.selectjob")}</p>
              <FontAwesomeIcon icon={faArrowLeft} className="blink" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EmploymentHistory;
