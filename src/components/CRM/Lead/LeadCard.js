import React from "react";
import UserAvatar from "Components/User/UserAvatar";

const LeadCard = ({ lead, contact }) => {
  return (
    <div className="lazy-up">
      <div
        className={"card b-0 bg-" + lead.status.color}
        style={{ border: "none" }}
      >
        <div className="card" style={{ padding: "2% 1% 2% 4%", width: "97%" }}>
          <div className="media">
            <div className="media-left mr-50 mt-10">
              <UserAvatar user={contact} size={100} />
            </div>
            <div className="media-body d-flex justify-content-between mlr-10">
              <div className="mt-15">
                <h1 className="mb-5">
                  {contact.firstName + " " + contact.lastName}
                </h1>
                <p className="mb-5 d-block">
                  <span className="mr-1">{lead.companyName}</span>
                </p>
                <span className="d-block fs-14">
                  Owner - {lead.owner.firstName + " " + lead.owner.lastName}
                </span>
              </div>
              <div className="mt-50">
                <h1>{lead.status.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
