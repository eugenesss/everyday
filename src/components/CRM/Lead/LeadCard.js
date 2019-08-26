import React from "react";
import {
  Wrapper,
  Contact,
  KeyDetails
} from "Components/Everyday/Layout/View/ProfileCard";

import LeadInterestLevel from "Components/CRM/Lead/LeadInterestLevel";

function LeadCard(props) {
  const { lead } = props;
  return (
    <Wrapper>
      <Contact
        name={lead.name}
        subHeading={lead.companyName}
        call={lead.baseContact.mobile}
        email={lead.baseContact.email}
        website={lead.baseContact.website}
      />
      <div className="profile-card-section">
        <div>
          <h4 className="mb-20 text-muted">Lead Interest</h4>
          <LeadInterestLevel interest={lead.interest} />
        </div>
      </div>
      <KeyDetails
        keyDetails={[
          {
            label: "Status",
            value: lead.statusInfo && lead.statusInfo.name
          },
          {
            label: "Owner",
            value: lead.userInfo && lead.userInfo.name
          }
        ]}
      />
    </Wrapper>
  );
}

export default LeadCard;
