import React from "react";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/CRM/View/Layout/ViewCard";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";
import NumberFormat from "react-number-format";

const DealCard = ({ name, stage, type, ownerName, amount }) => {
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
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default DealCard;
