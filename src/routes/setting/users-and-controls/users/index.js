import React from "react";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";
import UsersList from "Components/Setting/UserControl/Users/UsersList";

const UsersLayout = () => {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <AccessControl action={["User:read"]} noAccessComponent={<NoAccessComponent/>}>
      <UsersList />
=======
      <AccessControl
        action={["AccessSetting:viewall"]}
        noAccessComponent={<NoAccessComponent />}
      >
        <UsersList />
>>>>>>> 88b98be98f85a1be3030de050bcf66c6b052bcd1
      </AccessControl>
    </React.Fragment>
  );
};

export default UsersLayout;
