import React from "react";
import Avatar from "Components/Everyday/Avatar";

const ConvertedBlock = ({ bgColor, name, smallText, heading }) => {
  return (
    <div className="user-profile-widget">
      <div className={`bg-${bgColor} py-60`} />
      <div className="p-20 px-60">
        <div className="d-flex user-avatar">
          <Avatar name={"name"} size={100} customClasses="mr-15" />
          <div className="user-info text-white">
            <h4>{heading}</h4>
            <h2 className="mb-0">{"name"}</h2>
            <span>{smallText}</span>
          </div>
        </div>
        {/*  <ul className="list-unstyled my-25">
          <li className="border-bottom py-10 d-flex align-items-center">
            <i className="zmdi zmdi-email mr-10 fs-14" />
            <a href="mail-to:phoebe@gmail.com" className="fs-14 text-dark">
              phoebe@gmail.com
            </a>
          </li>
          <li className="border-bottom py-10 d-flex align-items-center">
            <i className="zmdi zmdi-phone mr-10 fs-14" />
            <a href="tel:011234567890" className="fs-14 text-dark">
              +01 123 456 7890
            </a>
          </li>
          <li className="border-bottom py-10 fs-14 d-flex align-items-center">
            <i className="zmdi zmdi-account-box mr-10 fs-14" />
            e-51, Industrial area, Phase2, Mohali
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default ConvertedBlock;
