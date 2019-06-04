import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import InvoiceSettingsForm from "Components/Form/Setting/Accounting/Invoice/InvoiceSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent"

const InvoiceLayout = () => {
  return (
    <React.Fragment>
      <AccessControl action={["AccInvoiceSet:update"]} noAccessComponent={<NoAccessComponent/>}>
        <RctCollapsibleCard heading={"Invoice Settings"}>
          <InvoiceSettingsForm/>
        </RctCollapsibleCard> 
      </AccessControl>
    </React.Fragment>
  );
}

export default InvoiceLayout;
