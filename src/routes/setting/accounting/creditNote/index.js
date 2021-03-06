import React from "react";

import BgCard from "Components/Everyday/BgCard";
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
        <BgCard heading={"Credit Note Settings"}>
          <CreditNoteSettingsForm />
        </BgCard>
      </AccessControl>
    </React.Fragment>
  );
};

export default setting_acct_credit_note;
