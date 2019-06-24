import React from "react";
import Avatar from "Components/Everyday/Avatar";

const ConvertedBlock = ({ bgColor, name, smallText, heading }) => {
  return (
    <div className="user-profile-widget">
      <div className={`bg-${bgColor} py-60`} />
      <div className="p-20 px-60">
        <div className="d-flex user-avatar">
          <Avatar name={name} size={100} customClasses="mr-15" />
          <div className="user-info text-white">
            <h4>{heading}</h4>
            <h2 className="mb-0">{name}</h2>
            <span>{smallText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertedBlock;
