import React from "react";

import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import UpdatePasswordForm from "Components/Form/Setting/General/UpdatePasswordForm";
import UpdateUserDetailsForm from "Components/Form/Setting/General/UpdateUserDetailsForm"

import BgCard from "Components/Everyday/BgCard";

const SettingsTab = () => {
  return (
    <React.Fragment>
      <TabsHeader title={"Change Password"}/>
      <UpdatePasswordForm/>
      <TabsHeader title={"Update Information"} customClasses="mt-20"/>
      <UpdateUserDetailsForm/>
    </React.Fragment>
  );
};

export default SettingsTab;
