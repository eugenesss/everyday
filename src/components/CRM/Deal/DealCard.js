import React from "react";
import { NavLink } from "react-router-dom";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/CRM/View/Layout/ViewCard";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";
import NumberFormat from "react-number-format";

const DealCard = ({
  name,
  stage,
  type,
  ownerName,
  amount,
  account,
  customer
}) => {
  return (
    <ViewCardLayout>
      <ViewCardTitle
        noAvatar
        name={name}
        subHeading={[
          <NumberFormat
            value={amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />,
          <StatusBadge
            name={`${stage.name} - ${stage.chance}%`}
            color={stage.color}
          />,
          type
        ]}
      />
      <ViewCardDetails>
        {{ title: "Owner", icon: "zmdi-account", detail: ownerName }}
        {{
          title: "Account",
          icon: "zmdi-city-alt",
          detail: account && (
            <NavLink to={`/app/crm/accounts/${account.id}`}>
              {account.name}
            </NavLink>
          )
        }}
        {{
          title: "Customer",
          icon: "zmdi-accounts-outline",
          detail: customer && (
            <NavLink to={`/app/crm/customers/${customer.id}`}>
              {customer.name}
            </NavLink>
          )
        }}
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default DealCard;
