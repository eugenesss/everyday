import React from "react";
import { Col, Row } from "reactstrap";

import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

const DetailsTab = () => {
  return (
    <React.Fragment>
      <TabsHeader title={"Locale"}/>
      <Row className={"pl-20 pr-20 pt-30 pb-10"}>
        <Col md={3}>Currency</Col>
        <Col md={9}>
          <div className="text-right"><b>Singapore, SGD ($)</b></div>
        </Col>
      </Row>
      <Row className={"pl-20 pr-20 pt-10 pb-10"}>
        <Col md={3}>Timezone</Col>
        <Col md={9}>
          <div className="text-right"><b>	(GMT +08:00) Singapore Time (Asia/Singapore)</b></div>
        </Col>
      </Row>
      <Row className={"pl-20 pr-20 pt-10 pb-10"}>
        <Col md={3}>Location</Col>
        <Col md={9}>
          <div className="text-right"><b>50 Tuas Avenue 11 #02-06 Tuas Lot, 639107, Singapore</b></div>
        </Col>
      </Row>
      <TabsHeader title={"Fiscal Year"} customClasses="mt-20"/>
      <Row className={"pl-20 pr-20 pt-10 pb-10"}>
        <Col md={3}>Fiscal Year Begins</Col>
        <Col md={9}>
          <div className="text-right"><b>April</b></div>
        </Col>
      </Row>
      <TabsHeader title={"Business Hours"} customClasses="mt-20"/>
      <Row className={"pl-20 pr-20 pt-10 pb-10"}>
        <Col md={3}>Opening Hours</Col>
        <Col md={9}>
          <div className="text-right"><b>09:00 - 18:00</b></div>
        </Col>
      </Row>
      <TabsHeader title={"Holidays"} customClasses="mt-20"/>
      <Row className={"pl-20 pr-20 pt-10 pb-10"}>
        <Col md={3}>Games Night</Col>
        <Col md={9}>
          <div className="text-right"><b>14 June</b></div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DetailsTab;
