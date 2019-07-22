import React, { Component } from "react";
import { connect } from "react-redux";

import ProfileLayout from "Components/Setting/General/Profile/ProfileLayout";

import { getUserProfile } from "Actions";

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.user);
  }

  render() {
    const { userProfile } = this.props;
    return (
      <React.Fragment>
        <ProfileLayout userView={userProfile} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ authUser, usersState }) => {
  const { user } = authUser;
  const { userProfile } = usersState;
  return { user };
};

export default connect(
  mapStateToProps,
  { getUserProfile }
)(MyProfile);
