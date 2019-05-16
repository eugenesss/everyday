import React from "react";
import { Col, Row } from "reactstrap";

import CompanyBlock from "./CompanyBlock";
import CompanyDetailsBlock from "./CompanyDetailsBlock"

const CompanyLayout = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={4}>
          <CompanyBlock/>
        </Col>
        <Col lg={8}>
          <CompanyDetailsBlock/>
        </Col>
      </Row>
    </React.Fragment>
  );
}


export default CompanyLayout;
