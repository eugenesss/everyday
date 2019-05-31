import React from "react";

const AccountingDetails = ({
  accountID,
  status,
  account,
  customer,
  sentDate,
  owner,
  type
}) => {
  /* let bgColor = "#7fb38b";
  type == "invoice" && (bgColor = "#7f8cb3");
  type == "credit_note" && (bgColor = "#7f82b3"); */
  const bgColor =
    (type == "quotation" && "#7fb38b") ||
    (type == "invoice" && "#7f8cb3") ||
    (type == "credit_note" && "#7f82b3");
  return (
    <div className="user-profile-widget">
      <div className="py-70" style={{ background: bgColor }} />
      <div style={{ padding: "0.4rem 6%" }}>
        <div className="d-flex user-avatar">
          <div className="user-info text-white pt-10">
            <h1 className="mb-0">{accountID} - V2</h1>
            <span>{status}</span><br />
            <span>2019-01-01</span>
          </div>
        </div>
        <ul className="list-unstyled my-25" style={{ paddingLeft: "10%" }}>
          {account && (
            <li className="py-10 d-flex align-items-center">
              <i className="zmdi zmdi-email mr-20 fs-12" />
              <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
                Account: {account}
              </a>
            </li>
          )}
          {customer && (
            <li className="py-10 d-flex align-items-center">
              <i className="zmdi zmdi-email mr-20 fs-12" />
              <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
                Attn To: {customer}
              </a>
            </li>
          )}          
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              Owner
            </a>
          </li>
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              USD 1.23
            </a>
          </li>
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              $20.50
            </a>
          </li>
          <li className="py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-20 fs-12" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              2019-01-01
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountingDetails;
