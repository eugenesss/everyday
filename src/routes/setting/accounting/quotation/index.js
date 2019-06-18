import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import QuotationSettingsForm from "Components/Form/Setting/Accounting/Quotation/QuotationSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

const setting_acct_quotation = () => {
  return (
    <React.Fragment>
      <AccessControl
        action={["AccQuotationSet:update"]}
        noAccessComponent={<NoAccessComponent />}
      >
        <RctCollapsibleCard heading={"Quotation Settings"}>
          <QuotationSettingsForm />
        </RctCollapsibleCard>
      </AccessControl>
    </React.Fragment>
  );
};

export default setting_acct_quotation;
