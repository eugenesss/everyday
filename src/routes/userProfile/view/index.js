import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserProfile } from "Actions";

import UserProfileLayout from "Components/UserProfile/UserProfileLayout"

class UserProfileView extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.id)
  }

  render() {
    return (
      <React.Fragment>
        <UserProfileLayout/>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { getUserProfile }
)(UserProfileView);
