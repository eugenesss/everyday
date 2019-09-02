import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserProfile } from "Actions";

import ProfileLayout from "Components/Setting/General/Profile/ProfileLayout";

class UserProfileView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.getUserProfile(this.props.match.params.id);
  }

  render() {
    const { userInfo } = this.props;
    return (
      <React.Fragment>
        <ProfileLayout userView={userInfo} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ usersState }) => {
  const { userInfo } = usersState;
  return { userInfo };
};

export default connect(
  mapStateToProps
)(UserProfileView);
