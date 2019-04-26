import React from "react";
import NumberFormat from "react-number-format";
import DealStageBadge from "Components/CRM/Deal/DealStageBadge";
import DealTypeBadge from "Components/CRM/Deal/DealTypeBadge";
import LeadSourceBadge from "Components/CRM/Leads/LeadSourceBadge";

const DealCard = ({ deal }) => {
  return (
    <div className="lazy-up">
      <div className="card bg-primary text-white" style={{ padding: "2% 4%" }}>
        <div className="media">
          <div className="media-body d-flex justify-content-between mlr-10">
            <div className="mt-15">
              <h1 className="mb-5">{deal.name}</h1>
              <p className="mb-10 d-block">
                <span className="mr-1">
                  <DealStageBadge stage={deal.stage} />
                </span>
                <span className="mr-1">
                  {deal.type && <DealTypeBadge type={deal.type} />}
                </span>
                <span className="mr-1">
                  {deal.source && <LeadSourceBadge source={deal.source} />}
                </span>
              </p>
              <span className="d-block fs-14">
                Owner - {deal.owner.firstName + " " + deal.owner.lastName}
              </span>
            </div>
            <div className="mt-30">
              <h1 className="text-white">
                <NumberFormat
                  value={deal.amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
