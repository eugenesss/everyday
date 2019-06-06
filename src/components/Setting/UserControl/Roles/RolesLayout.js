import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

import RolesList from "./RolesList";
import RolesManager from "./RolesManager";


class RolesLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <AccessControl action={["Permissions:manage"]} noAccessComponent={<NoAccessComponent/>}>
          <Row>
            <Col md={3}>
              <RolesList/>
            </Col>
            <Col md={9}>
              <RolesManager/>
            </Col>
          </Row>
        </AccessControl>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { }
)(RolesLayout);
