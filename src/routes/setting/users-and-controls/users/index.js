import React, { Component } from "react";
import { connect } from "react-redux";
import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";
import UsersList from "Components/Setting/UserControl/Users/UsersList";
import { getAllUsers } from "Actions";

class UsersLayout extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <React.Fragment>
        <AccessControl
          action={["AccessSetting:viewall"]}
          noAccessComponent={<NoAccessComponent />}
        >
          <UsersList />
        </AccessControl>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ usersState }) => {
  const { users } = usersState;
  return { users };
};

export default connect(
  mapStateToProps,
  { getAllUsers }
)(UsersLayout);
