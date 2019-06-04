import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import QuotationSettingsForm from "Components/Form/Setting/Accounting/Quotation/QuotationSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent"

const QuotationLayout = () => {
  return (
    <React.Fragment>
      <AccessControl action={["AccQuotationSet:update"]} noAccessComponent={<NoAccessComponent/>}>
        <RctCollapsibleCard heading={"Quotation Settings"}>
          <QuotationSettingsForm/>
        </RctCollapsibleCard>
      </AccessControl>
    </React.Fragment>
  );
}

export default QuotationLayout;
