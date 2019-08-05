import React from "react";

import SettingsTab from "./Tabs/SettingsTab";
import DetailsTab from "./Tabs/DetailsTab";
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

const CompanyDetailsBlock = ({ company }) => {
  return (
    <React.Fragment>
      <TabsWrapper>
        <div icon="zmdi-comment text-success" label="Details">
          <DetailsTab company={company} />
        </div>
        <div icon="zmdi-settings text-warning" label="Settings">
          <AccessControl
            action={["CompanyDetails:update"]}
            noAccessComponent={<NoAccessComponent />}
          >
            <SettingsTab />
          </AccessControl>
        </div>
      </TabsWrapper>
    </React.Fragment>
  );
};

export default CompanyDetailsBlock;
