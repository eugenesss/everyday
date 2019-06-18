import React from "react";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";
import UsersList from "Components/Setting/UserControl/Users/UsersList";

const UsersLayout = () => {
  return (
    <React.Fragment>
      {/* <AccessControl action={["User:read"]} noAccessComponent={<NoAccessComponent/>}> */}
      <UsersList />
      {/* </AccessControl> */}
    </React.Fragment>
  );
};

export default UsersLayout;
