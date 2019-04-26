import React from "react";
import { Badge } from "reactstrap";
import { Avatar } from "@material-ui/core";

const AccountCard = ({ account }) => {
  return (
    <div className="lazy-up">
      <div className="card border-0" style={{ padding: "3% 6%" }}>
        <div className="media">
          <div className="media-left mr-50 mb-10">
            <Avatar className="size-80">
              {account.name.charAt(0).toUpperCase()}
            </Avatar>
          </div>
          <div className="media-body ml-10">
            <h3 className="mb-0">{account.name}</h3>
            <span className="text-muted fs-14 mb-0 d-block">
              {account.industry && account.industry.name}
            </span>
            <span className="text-muted fs-12 mb-5 d-block">
              {account.address} {account.address2}
            </span>
            <span className="mb-10 fs-14 d-block">
              <Badge className="bg-orange fs-10 mr-2" pill>
                Account
              </Badge>
            </span>
          </div>
        </div>
        {Object.assign([], Object.entries(account))
          .filter(
            field =>
              !!field[1] && ["office", "fax", "website"].includes(field[0])
          )
          .map(val => (
            <div
              key={val}
              className="card-foot d-flex justify-content-between mt-10 fs-14"
            >
              <div className="text-capitalize">{val[0]}</div>
              <div>{val[1]}</div>
            </div>
          ))}
        <div className="card-foot d-flex justify-content-between mt-10 fs-14">
          <div>Owner</div>
          <div>{account.owner.firstName + " " + account.owner.lastName}</div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
