import React, { Component } from "react";
import { connect } from "react-redux";

// sub components
import 'react-big-calendar/lib/css/react-big-calendar.css'

import UsersList from "Components/Setting/Users/UsersList"


class UsersLayout extends Component {
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
)(UsersLayout);
