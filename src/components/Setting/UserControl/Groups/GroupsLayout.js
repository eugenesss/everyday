import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

import GroupsManager from "./GroupsManager"
import GroupsList from "./GroupsList";


const GroupsLayout = () => {
  return (
    <React.Fragment>
      <AccessControl action={["Groups:manage"]} noAccessComponent={<NoAccessComponent/>}>
        <Row>
          <Col md={3}>
            <GroupsList/>
          </Col>
          <Col md={9}>
            <GroupsManager/>
          </Col>
        </Row>
      </AccessControl>
    </React.Fragment>
  );
}


export default GroupsLayout;
