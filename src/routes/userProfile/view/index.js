import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserProfile } from "Actions";

class UserProfileView extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.id)
  }

  render() {
    const { userProfile } = this.props;
    return (
      <React.Fragment>
        asd
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ usersState }) => {
  const { userProfile } = usersState;
  return { userProfile };
};

export default connect(
  mapStateToProps,
  { getUserProfile }
)(UserProfileView);
