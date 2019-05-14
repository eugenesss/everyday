import React, { Component } from "react";
import { connect } from "react-redux";

import UsersList from "Components/Setting/UserControl/Users/UsersList"

class MyProfileLayout extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        <UsersList/>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { }
)(MyProfileLayout);
