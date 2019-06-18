import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import QuotationReminderSettingsForm from "Components/Form/Setting/Reminders/Quotation/QuotationReminderSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

const setting_rem_quotation = () => {
  return (
    <React.Fragment>
      <AccessControl
        action={["RemQuotationSet:update"]}
        noAccessComponent={<NoAccessComponent />}
      >
        <RctCollapsibleCard heading={"Quotation Reminders Settings"}>
          <QuotationReminderSettingsForm />
        </RctCollapsibleCard>
      </AccessControl>
    </React.Fragment>
  );
};

export default setting_rem_quotation;
