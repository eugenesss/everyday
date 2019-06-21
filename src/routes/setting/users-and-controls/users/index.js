import React, { Component } from "react";
import { connect } from "react-redux";

import UsersLayout from "Components/Setting/UserControl/Users/UsersLayout"

const UsersLayout = () => {
  return (
    <React.Fragment>
      <AccessControl action={["AccessSetting:viewall"]} noAccessComponent={<NoAccessComponent />}>
        <UsersList />
      </AccessControl>
    </React.Fragment>
  );
};


export default connect(
  null
)(Users);
