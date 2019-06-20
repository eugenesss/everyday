import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

const ViewCardDetails = ({ children }) => {
  return (
    <div className="m-10">
      {children.map((child, key) => {
        return (
          <div key={key} className="row px-3 pb-10 justify-content-md-center">
            <div className="col-lg-1 align-self-center text-center ">
              <Tooltip title={child.title} placement="top">
                <i className={`zmdi ${child.icon} mb-2`} />
              </Tooltip>
            </div>
            <div className="col-lg-8">
              <p className="mb-1 fs-12">{child.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ViewCardDetails };
