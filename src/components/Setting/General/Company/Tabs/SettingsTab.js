import React from "react";

import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import UpdateCompanyDetailsForm from "Components/Form/Setting/General/UpdateCompanyDetailsForm";

const SettingsTab = () => {
  return (
    <React.Fragment>
      <TabsHeader title={"Update Information"}/>
      <UpdateCompanyDetailsForm/>
    </React.Fragment>
  );
};

export default SettingsTab;
