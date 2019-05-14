import React, { Component } from "react";
import { connect } from "react-redux";

import MyProfileLayout from "Components/Setting/General/MyProfile/MyProfileLayout"

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <MyProfileLayout/>
      </React.Fragment>
    );
  }
}

export default connect(
  null
)(MyProfile);
