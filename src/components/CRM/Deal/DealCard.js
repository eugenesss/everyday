import React from "react";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  Contact,
  KeyDetails
} from "Components/Everyday/Layout/View/ProfileCard";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";
import NumberFormat from "react-number-format";
import { singleAccount, singleCustomer } from "Helpers/url/crm";

function DealCard(props) {
  const { deal } = props;
  return (
    <Wrapper>
      <Contact
        noAvatar
        name={deal.name}
        subHeading={
          <NumberFormat
            value={deal.amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        }
      />
      <div className="profile-card-section">
        <div>
          <h4 className="mb-20 text-muted">Related Parties</h4>
        </div>
      </div>
      <KeyDetails
        keyDetails={[
          {
            label: "Status",
            value: deal.stageInfo.name
          },
          {
            label: "Chance",
            value: deal.stageInfo.chance
          },
          {
            label: "Owner",
            value: deal.userInfo && deal.userInfo.name
          }
        ]}
      />
    </Wrapper>
  );
}

export default DealCard;
