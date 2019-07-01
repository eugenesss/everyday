import React from "react";

const SingleDetail = ({ title, value, fullCol }) => {
  return (
    <React.Fragment>
      <div className="col-lg-2 text-right pb-1">
        <p className="align-self-center">
          <strong>{title}</strong>
        </p>
      </div>
      <div
        className={
          `text-left pb-1 align-self-center ` +
          (fullCol ? "col-10" : "col-lg-4")
        }
      >
        <p>{value}</p>
      </div>
    </React.Fragment>
  );
};

export { SingleDetail };

const SingleDetailVariation = ({
  title,
  value,
  colClassTitle,
  colClassValue
}) => {
  return (
    <React.Fragment>
      <div className={`text-right pb-1 align-self-center ${colClassTitle}`}>
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <div className={`text-left pb-1 align-self-center ${colClassValue}`}>
        <p>{value}</p>
      </div>
    </React.Fragment>
  );
};

export { SingleDetailVariation };