import React from "react";
import Avatar from "Components/Everyday/Avatar";

const AccountingDetails = ({
  fullName,
  jobTitle,
  account,
  email,
  mobile,
  office,
  fax,
  ownerName,
  type
}) => {
  return (
    <div className="user-profile-widget">
      <div
        className="py-70"
        style={{ background: type == "invoice" ? "#2d7a84" : "#9e7fb3" }}
      />
      <div style={{ padding: "1.25rem 6%" }}>
        <div className="d-flex user-avatar">
          <div className="user-info text-white pt-20">
            <h1 className="mb-0">{"QUOT-1230I1"}</h1>
            <span>{"Quotation Status"}</span>
          </div>
        </div>
        <ul className="list-unstyled my-25" style={{ paddingLeft: "10%" }}>
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              {"Account"}
            </a>
          </li>
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              {"Customer"}
            </a>
          </li>
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              {"Sent On"}
            </a>
          </li>
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              {"Owner"}
            </a>
          </li>

          {email && (
            <li className="border-bottom py-10 d-flex align-items-center">
              <i className="zmdi zmdi-email mr-20 fs-12" />
              <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
                {"email"}
              </a>
            </li>
          )}
          {mobile && (
            <li className="border-bottom py-10 d-flex align-items-center">
              <i className="zmdi zmdi-phone mr-20 fs-14" />
              <a href="tel:011234567890" className="fs-14 text-dark">
                {"mobile"}
              </a>
            </li>
          )}
          {office && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-store mr-20 fs-14" />
              {"office"}
            </li>
          )}
          {fax && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-local-printshop mr-20 fs-14" />
              {"fax"}
            </li>
          )}
          {ownerName && (
            <li className="border-bottom py-10 fs-14 d-flex align-items-center">
              <i className="zmdi zmdi-account-box mr-20 fs-14" />
              {"ownerName"}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AccountingDetails;
