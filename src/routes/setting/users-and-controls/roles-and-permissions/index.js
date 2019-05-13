import React, { Component } from "react";
import { connect } from "react-redux";

class RolesAndPermissions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>RolesAndPermissions</p>
      </div>
    );
  }
}

export default connect(
  null
)(RolesAndPermissions);
