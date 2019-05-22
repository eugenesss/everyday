import React from "react";
import Avatar from "Components/Everyday/Avatar";

const AccountCard = ({
  name,
  industry,
  ownerName,
  office,
  fax,
  address,
  address2,
  state,
  city,
  zip
}) => {
  return (
    <div className="user-profile-widget">
      <div className="py-70" style={{ background: "#e46464" }} />
      <div style={{ padding: "1.25rem 6%" }}>
        <div className="d-flex user-avatar">
          <Avatar name={name} size={100} customClasses="mr-20 ml-15" />
          <div className="user-info text-white pt-20">
            <h1 className="mb-0">{name}</h1>
            <span>{industry}</span>
          </div>
        </div>
        <ul className="list-unstyled my-25">
          {office && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-phone mr-20 fs-14" />
              {office}
            </li>
          )}
          {fax && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-local-printshop mr-20 fs-14" />
              {fax}
            </li>
          )}
          {address && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-pin-drop mr-20 fs-14" />
              {`${address}, ${address2}`} <br />
              {`${state}, ${city}, ${zip}`}
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

export default AccountCard;
