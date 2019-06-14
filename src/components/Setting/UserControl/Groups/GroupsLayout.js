import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import GroupsManager from "./GroupsManager"
import GroupsList from "./GroupsList";

class GroupsLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { groupsLoading } = this.props
    return (
      <React.Fragment>
        {/* <AccessControl action={["Group:manage"]} noAccessComponent={<NoAccessComponent/>}> */}
          <Row>
            <Col md={3}>
              <GroupsList/>
            </Col>
            <Col md={9}>
              <GroupsManager/>
            </Col>
          </Row>
        {/* </AccessControl> */}
        {groupsLoading && <RctSectionLoader/>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ groupsState, }) => {
  const { groupsLoading } = groupsState
  return { groupsLoading };
};


export default connect(
  mapStateToProps,
  {}
)(GroupsLayout);
