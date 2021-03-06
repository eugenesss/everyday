import React from "react";

import BgCard from "Components/Everyday/BgCard";
import GeneralAccountingSettingsForm from "Components/Form/Setting/Accounting/General/GeneralAccountingSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

const AccountingGeneralLayout = () => {
  return (
    <React.Fragment>
      <AccessControl action={["AccGeneralSet:update"]} noAccessComponent={<NoAccessComponent/>}>
        <BgCard heading={"General Accounting Settings"}>
          <GeneralAccountingSettingsForm/>
        </BgCard>
      </AccessControl>
    </React.Fragment>
  );
}

export default AccountingGeneralLayout;
