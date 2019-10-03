import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Contact,
  KeyDetails
} from "Components/Everyday/Layout/View/ProfileCard";
import { EventOutlined } from "@material-ui/icons";
import { singleAccount } from "Helpers/crmURL";

// import ShowUpcoming from "Components/CRM/View/Events/ShowUpcoming";

function QuotationCard(props) {
  //   const { cust } = props;
  return (
    <Wrapper>
      {/* <Contact
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
        indicator={deal.stageInfo}
      />
      <div className="profile-card-section">
        <div className="profile-heading">
          <PeopleOutline />
          Related Contacts
        </div>
        <Info
          title={deal.accountInfo.name}
          subtitle="Account"
          onClick={() => props.history.push(singleAccount(deal.accountInfo.id))}
          button
        />
        {deal.customerInfo && (
          <Info
            title={deal.customerInfo.name}
            subtitle="Customer"
            onClick={() =>
              props.history.push(singleCustomer(deal.customerInfo.id))
            }
            button
          />
        )}
      </div>
      <KeyDetails
        keyDetails={[
          {
            label: "Chance",
            value: deal.stageInfo.chance
          },
          {
            label: "Owner",
            value: deal.userInfo && deal.userInfo.name
          }
        ]}
      /> */}
    </Wrapper>
  );
}

export default QuotationCard;
