import React from "react";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/CRM/View/Layout/ViewCard";
import ActiveStatusBadge from "Components/Everyday/StatusBadge/ActiveStatusBadge";

const AccountCard = ({
  name,
  industry,
  ownerName,
  phone,
  fullAddress,
  isActive,
  website
}) => {
  return (
    <ViewCardLayout>
      <ViewCardTitle
        name={name}
        subHeading={[
          industry && industry.name,
          <ActiveStatusBadge isActive={isActive} />
        ]}
      />
      <ViewCardDetails>
        {{ title: "Owner", icon: "zmdi-account", detail: ownerName }}
        {{ title: "Office", icon: "zmdi-phone", detail: phone }}
        {{ title: "Website", icon: "zmdi-desktop-mac", detail: website }}
        {{ title: "Address", icon: "zmdi-pin", detail: fullAddress }}
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default AccountCard;
