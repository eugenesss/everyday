import React from "react";
import { NavLink } from "react-router-dom";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/CRM/View/Layout/ViewCard";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";
import NumberFormat from "react-number-format";

import { singleAccount, singleCustomer } from "Helpers/url/crmRoutes";

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
            <NavLink to={singleAccount(account.id)}>{account.name}</NavLink>
          )
        }}
        {{
          title: "Customer",
          icon: "zmdi-accounts-outline",
          detail: customer && (
            <NavLink to={singleCustomer(customer.id)}>{customer.name}</NavLink>
          )
        }}
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default DealCard;
