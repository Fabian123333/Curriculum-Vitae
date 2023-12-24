import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const EmploymentHistoryCompanyItem = ({ job, onSelect }) => {
  const { t } = useTranslation();

  const startDate = new Date(job.startDate);
  const startDateText = startDate.toLocaleDateString()

  const endDate = new Date(job.endDate);
  const endDateText = job.endDate !== undefined ? endDate.toLocaleDateString() : t("label.present");

  return (
    <ListGroup.Item action onClick={() => onSelect(job)}>
      <Row className="job-info-line">
        <Col md={8} className="job-company">
          <h3>
            {t("jobs." + job.job + ".title")}
          </h3>
        </Col>
        <Col md={4} className="job-dates">
          <h3>
            ({startDateText} - {endDateText})
          </h3>
        </Col>
      </Row>
      <div className="employment-summary">
        <h5>
            {t("companies." + job.company + ".name" )}
        </h5>
      </div>
    </ListGroup.Item>
  );
};

export default EmploymentHistoryCompanyItem;
