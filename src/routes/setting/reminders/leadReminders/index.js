import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import LeadReminderSettingsForm from "Components/Form/Setting/Reminders/Lead/LeadReminderSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent";

const setting_rem_lead = () => {
  return (
    <React.Fragment>
      <AccessControl
        action={["RemLeadSet:update"]}
        noAccessComponent={<NoAccessComponent />}
      >
        <RctCollapsibleCard heading={"Lead Reminders Settings"}>
          <LeadReminderSettingsForm />
        </RctCollapsibleCard>
      </AccessControl>
    </React.Fragment>
  );
};

export default setting_rem_lead;
