import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import RolesList from "Components/Setting/UserControl/Roles/RolesList";
import RolesManager from "Components/Setting/UserControl/Roles/RolesManager";
import { getAllRoles } from "Actions"

class RolesLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getAllRoles();
  }

  render() {
    const { rolesLoading } = this.props;
    return (
      <React.Fragment>
        {/* <AccessControl action={["RolePermission:manage"]} noAccessComponent={<NoAccessComponent/>}> */}
        <Row>
          <Col md={3}>
            <RolesList />
          </Col>
          <Col md={9}>
            <RolesManager />
          </Col>
        </Row>
        {/* </AccessControl> */}
        {rolesLoading && <RctSectionLoader />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ rolesState }) => {
  const { rolesLoading } = rolesState;
  return { rolesLoading };
};

export default connect(
  mapStateToProps,
  { getAllRoles }
)(RolesLayout);
