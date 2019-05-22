import React from "react";
import Avatar from "Components/Everyday/Avatar";

const LeadCard = ({ name, companyName, status, statusColor, ownerName }) => {
  return (
    <div className="lazy-up">
      <div className="card b-0" style={{ minHeight: "150px" }}>
        <div className="media" style={{ padding: "1.5% 4%" }}>
          <div className="media-left mr-50 mt-10">
            <Avatar name={name} size={100} />
          </div>
          <div className="media-body d-flex justify-content-between mlr-10">
            <div className="mt-15">
              <h1 className="mb-5">{name}</h1>
              <p className="mb-0 d-block">
                <span className="mr-1">{companyName}</span>
              </p>
              <span className="d-block fs-12">Owner - {ownerName}</span>
              <p className="mb-5">
                <span className="fs-12" style={{ color: statusColor }}>
                  {status}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 py-10" style={{ background: statusColor }} />
      </div>
    </div>
  );
};

export default LeadCard;
