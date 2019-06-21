import React from "react";

const SingleDetail = ({ title, value, fullCol }) => {
  return (
    <React.Fragment>
      <div className="col-lg-2 text-right pb-1">
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <div className={`text-left pb-1 ` + (fullCol ? "col-10" : "col-lg-4")}>
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
      <div className={`text-right pb-1 ${colClassTitle}`}>
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <div className={`text-left pb-1 ${colClassValue}`}>
        <p>{value}</p>
      </div>
    </React.Fragment>
  );
};

export { SingleDetailVariation };
