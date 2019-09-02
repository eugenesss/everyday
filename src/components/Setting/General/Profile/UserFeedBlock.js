import React from "react";

import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";

import UpdatePasswordForm from "Components/Form/Setting/General/UpdatePasswordForm";
import UpdateUserDetailsForm from "Components/Form/Setting/General/UpdateUserDetailsForm";

import { Person, SupervisedUserCircle } from "@material-ui/icons";

const UserFeedBlock = () => {
  return (
    <React.Fragment>
      <TabsWrapper>
        <div icon={<Person />} label="Update Personal Details">
          <UpdateUserDetailsForm />
        </div>
        <div icon={<SupervisedUserCircle />} label="Update Password">
          <UpdatePasswordForm />
        </div>
      </TabsWrapper>
    </React.Fragment>
  );
};

export default UserFeedBlock;
