import React from "react";
import NumberFormat from "react-number-format";
/* import DealStageBadge from "Components/CRM/Deal/DealStageBadge";
import DealTypeBadge from "Components/CRM/Deal/DealTypeBadge";
import LeadSourceBadge from "Components/CRM/Leads/LeadSourceBadge"; */

const DealCard = ({ deal }) => {
  return (
    <div className="lazy-up">
      <div
        className="card text-white"
        style={{ padding: "3% 6%", background: "#9e7fb3" }}
      >
        <div className="media">
          <div className="media-body d-flex justify-content-between mlr-10">
            <div className="mt-15">
              <h1 className="mb-10">DealName</h1>
              <p className="mb-5 d-block">
                <span className="mr-1">Negotiation - 60%</span>
                <span className="mr-1">New Business</span>
                <span className="mr-1">Referral</span>
              </p>
              <span className="d-block fs-12">Owner - admin admin</span>
            </div>
            <div className="mt-30">
              <h1 className="text-white">
                <NumberFormat
                  value={10000}
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
