import React from "react";

import SettingsTab from "./Tabs/SettingsTab"
import DetailsTab from "./Tabs/DetailsTab"
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper"

const CompanyDetailsBlock = () => {
  return (
    <React.Fragment>
      <TabsWrapper>
        <div icon="zmdi-comment text-success" label="Details">
          <DetailsTab/>
        </div>
        <div icon="zmdi-settings text-warning" label="Settings">
          <SettingsTab/>
        </div>
      </TabsWrapper>
    </React.Fragment>
  );
}

export default CompanyDetailsBlock;