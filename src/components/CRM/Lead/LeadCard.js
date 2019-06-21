import React from "react";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/CRM/View/Layout/ViewCard";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";
import LeadInterestLevel from "Components/CRM/Lead/LeadInterestLevel";

const LeadCard = ({
  name,
  companyName,
  status,
  statusColor,
  ownerName,
  mobile,
  office,
  email,
  interest
}) => {
  return (
    <ViewCardLayout statusColor={statusColor}>
      <ViewCardTitle
        name={name}
        subHeading={[
          companyName,
          <StatusBadge name={status} color={statusColor} />
        ]}
      />
      <div className="row px-20">
        <div className="col-sm-3 text-right">
          <p className="fs-12">
            <i>Interest</i>
          </p>
        </div>
        <div className="col-sm-8 text-left">
          <LeadInterestLevel interest={interest} />
        </div>
      </div>
      <ViewCardDetails>
        {{ title: "Owner", icon: "zmdi-account", detail: ownerName }}
        {{ title: "Email", icon: "zmdi-email", detail: email }}
        {{ title: "Mobile", icon: "zmdi-smartphone", detail: mobile }}
        {{ title: "Office", icon: "zmdi-phone", detail: office }}
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default LeadCard;
