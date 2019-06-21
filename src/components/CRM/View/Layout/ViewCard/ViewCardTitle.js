import React from "react";
import Avatar from "Components/Everyday/Avatar";

const ViewCardTitle = ({ name, subHeading }) => {
  return (
    <div className="text-center pb-10">
      <Avatar name={name} size={80} customClasses="d-inline-block mb-10" />
      <h1 className="mb-5">{name}</h1>
      {subHeading.length > 1 ? (
        subHeading.map((child, key) => {
          return (
            <p key={key} className="mb-1">
              {child}
            </p>
          );
        })
      ) : (
        <div className="mb-0 d-block">{subHeading}</div>
      )}
    </div>
  );
};

export { ViewCardTitle };
