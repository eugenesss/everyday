import React from "react";
import { Link } from "react-router-dom";
import { getAppLayout } from "Helpers/helpers";
import Avatar from "Components/Everyday/Avatar";

const CustomerCard = ({
  fullName,
  jobTitle,
  account,
  email,
  mobile,
  office,
  fax,
  ownerName
}) => {
  return (
    <div className="user-profile-widget">
      <div className="py-70" style={{ background: "#fac257" }} />
      <div style={{ padding: "1.25rem 6%" }}>
        <div className="d-flex user-avatar">
          <Avatar fullName={fullName} size={100} customClasses="mr-20 ml-15" />
          <div className="user-info text-white pt-20">
            <h1 className="mb-0">{fullName}</h1>
            <span>{jobTitle}</span>
          </div>
        </div>
        <ul className="list-unstyled my-25">
          {account && (
            <li className="border-bottom py-10 d-flex align-items-center">
              <i className="zmdi zmdi-city-alt mr-20 fs-12" />
              <Link
                to={`/${getAppLayout(location)}/crm/account/view/${account.id}`}
              >
                {account.name}
              </Link>
            </li>
          )}
          {email && (
            <li className="border-bottom py-10 d-flex align-items-center">
              <i className="zmdi zmdi-email mr-20 fs-12" />
              <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
                {email}
              </a>
            </li>
          )}
          {mobile && (
            <li className="border-bottom py-10 d-flex align-items-center">
              <i className="zmdi zmdi-phone mr-20 fs-14" />
              <a href="tel:011234567890" className="fs-14 text-dark">
                {mobile}
              </a>
            </li>
          )}
          {office && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-store mr-20 fs-14" />
              {office}
            </li>
          )}
          {fax && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-local-printshop mr-20 fs-14" />
              {fax}
            </li>
          )}
          {ownerName && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-account-box mr-20 fs-14" />
              {ownerName}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CustomerCard;
