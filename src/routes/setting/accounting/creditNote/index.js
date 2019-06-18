import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CreditNoteSettingsForm from "Components/Form/Setting/Accounting/CreditNote/CreditNoteSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

const setting_acct_credit_note = () => {
  return (
    <React.Fragment>
      <AccessControl
        action={["AccCreditNoteSet:update"]}
        noAccessComponent={<NoAccessComponent />}
      >
        <RctCollapsibleCard heading={"Credit Note Settings"}>
          <CreditNoteSettingsForm />
        </RctCollapsibleCard>
      </AccessControl>
    </React.Fragment>
  );
};

export default setting_acct_credit_note;
