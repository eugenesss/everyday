import React, { Component } from "react";
import { connect } from "react-redux";

import ProfileLayout from "Components/Setting/General/Profile/ProfileLayout";

import { getAllUsers } from "Actions"

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(!this.props.me)
      this.props.getAllUsers()
  }

  render() {
    const { me } = this.props
    return (
      <React.Fragment>
        <ProfileLayout userView={me}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ usersState }) => {
  const { me } = usersState;
  return { me };
};

export default connect(
  mapStateToProps,
  {getAllUsers}
)(MyProfile);
