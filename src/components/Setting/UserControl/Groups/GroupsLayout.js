import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import GroupsManager from "./GroupsManager"
import GroupsList from "./GroupsList";


const GroupsLayout = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <GroupsList/>
        </Col>
        <Col md={9}>
          <GroupsManager/>
        </Col>
      </Row>
    </React.Fragment>
  );
}


export default GroupsLayout;
