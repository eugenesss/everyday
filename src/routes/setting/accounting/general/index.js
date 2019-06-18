import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import GeneralAccountingSettingsForm from "Components/Form/Setting/Accounting/General/GeneralAccountingSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

const setting_acct_general = () => {
  return (
    <React.Fragment>
      <AccessControl
        action={["AccGeneralSet:update"]}
        noAccessComponent={<NoAccessComponent />}
      >
        <RctCollapsibleCard heading={"General Accounting Settings"}>
          <GeneralAccountingSettingsForm />
        </RctCollapsibleCard>
      </AccessControl>
    </React.Fragment>
  );
};

export default setting_acct_general;
