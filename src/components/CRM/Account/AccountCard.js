import React from "react";
import {
  Wrapper,
  Contact,
  KeyDetails
} from "Components/Everyday/Layout/View/ProfileCard";
import ActiveStatusBadge from "Components/Everyday/StatusBadge/ActiveStatusBadge";

function AccountCard(props) {
  const { acct } = props;
  return (
    <Wrapper>
      <Contact
        name={acct.name}
        subHeading={acct.industryInfo}
        call={acct.baseContact.phone}
        email={acct.baseContact.email}
        website={acct.baseContact.website}
      />
      <div className="profile-card-section">
        <div>
          <h4 className="mb-20 text-muted">Upcoming Events</h4>
        </div>
      </div>
      <KeyDetails
        keyDetails={[
          {
            label: "Status",
            value: <ActiveStatusBadge isActive={acct.isActive} />
          },
          {
            label: "Owner",
            value: acct.userInfo && acct.userInfo.name
          }
        ]}
      />
    </Wrapper>
  );
}

export default AccountCard;
