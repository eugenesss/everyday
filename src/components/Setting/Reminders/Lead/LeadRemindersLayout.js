import React from "react";

import BgCard from "Components/Everyday/BgCard";
import LeadReminderSettingsForm from "Components/Form/Setting/Reminders/Lead/LeadReminderSettingsForm";

import AccessControl from "Components/AccessControl";
import NoAccessComponent from "Components/AccessControl/NoAccessComponent"

const LeadRemindersLayout = () => {
  return (
    <React.Fragment>
      <AccessControl action={["RemLeadSet:update"]} noAccessComponent={<NoAccessComponent/>}>
        <BgCard heading={"Lead Reminders Settings"}>
          <LeadReminderSettingsForm/>
        </BgCard>
      </AccessControl>
    </React.Fragment>
  );
}

export default LeadRemindersLayout;
