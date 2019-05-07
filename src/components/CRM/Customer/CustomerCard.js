import React from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "reactstrap";
import UserAvatar from "Components/User/UserAvatar";
import StatusLabel from "Components/CRM/Leads/LeadStatusBadge";

const CustomerCard = ({ customer }) => {
  return (
    <div className="lazy-up">
      <div className="card border-0" style={{ padding: "3% 6%" }}>
        <div className="media">
          <div className="media-left mr-50">
            <UserAvatar user={contact} size={80} />
          </div>
          <div className="media-body ml-10">
            <h3 className="mb-0">
              {contact.firstName + " " + contact.lastName}
            </h3>
            <span className="text-muted fs-12 d-block">{contact.jobTitle}</span>
            <span className="text-muted fs-14 mb-5 d-block">
              <i className="zmdi zmdi-city-alt" />{" "}
              {lead ? (
                lead.companyName
              ) : customer.account ? (
                <NavLink to={`/ocrm/crm/accounts/${customer.account.id}`}>
                  {customer.account.name}
                </NavLink>
              ) : null}
            </span>
            <span className="mb-10 fs-14 d-block">
              {lead ? (
                <div>
                  <Badge className="bg-purple fs-10 mr-2" pill>
                    Lead
                  </Badge>{" "}
                  <StatusLabel status={lead.status} />
                </div>
              ) : (
                <Badge className="bg-rss fs-10" pill>
                  Customer
                </Badge>
              )}
            </span>
          </div>
        </div>
        {Object.assign([], Object.entries(contact))
          .filter(
            field =>
              !!field[1] &&
              ["mobile", "office", "fax", "emailAddress"].includes(field[0])
          )
          .map(val => (
            <div
              key={val}
              className="card-foot d-flex justify-content-between mt-10 fs-14"
            >
              <div className="text-capitalize">
                {val[0] == "emailAddress" ? "Email" : val[0]}
              </div>
              <div>{val[1]}</div>
            </div>
          ))}
        <div className="card-foot d-flex justify-content-between mt-10 fs-14">
          <div>Owner</div>
          <div>{lead ? lead.owner.fullName : customer.owner.fullName}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
