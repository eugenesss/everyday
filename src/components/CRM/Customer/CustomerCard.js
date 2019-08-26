import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Contact,
  KeyDetails
} from "Components/Everyday/Layout/View/ProfileCard";
import ActiveStatusBadge from "Components/Everyday/StatusBadge/ActiveStatusBadge";
import { singleAccount } from "Helpers/url/crm";

function CustomerCard(props) {
  const { cust } = props;
  return (
    <Wrapper>
      <Contact
        name={cust.name}
        subHeading={
          cust.accountId && (
            <Link to={singleAccount(cust.accountInfo.id)}>
              {cust.accountInfo.name}
            </Link>
          )
        }
        call={cust.baseContact.mobile}
        email={cust.baseContact.email}
        website={cust.baseContact.website}
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
            value: <ActiveStatusBadge isActive={cust.isActive} />
          },
          {
            label: "Owner",
            value: cust.userInfo && cust.userInfo.name
          }
        ]}
      />
    </Wrapper>
  );
}

export default CustomerCard;
