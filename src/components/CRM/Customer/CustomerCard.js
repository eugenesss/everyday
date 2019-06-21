import React from "react";
import { Link } from "react-router-dom";
import { getAppLayout } from "Helpers/helpers";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/CRM/View/Layout/ViewCard";
import ActiveStatusBadge from "Components/Everyday/StatusBadge/ActiveStatusBadge";

const CustomerCard = ({
  name,
  account,
  ownerName,
  mobile,
  office,
  email,
  isActive
}) => {
  return (
    <ViewCardLayout>
      <ViewCardTitle
        name={name}
        subHeading={[
          account && (
            <Link
              to={`/${getAppLayout(location)}/crm/account/view/${account.id}`}
            >
              {account.name}
            </Link>
          ),
          <ActiveStatusBadge isActive={isActive} />
        ]}
      />
      <ViewCardDetails>
        {{ title: "Owner", icon: "zmdi-account", detail: ownerName }}
        {{ title: "Email", icon: "zmdi-email", detail: email }}
        {{ title: "Mobile", icon: "zmdi-smartphone", detail: mobile }}
        {{ title: "Office", icon: "zmdi-phone", detail: office }}
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default CustomerCard;
