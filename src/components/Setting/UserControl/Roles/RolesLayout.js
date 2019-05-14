import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import RolesList from "Components/Setting/UserControl/Roles/RolesList";
import RoleManager from "Components/Setting/UserControl/Roles/RoleManager";


class RolesLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={2}>
            <RolesList/>
          </Col>
          <Col md={10}>
            <RoleManager/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { }
)(RolesLayout);
