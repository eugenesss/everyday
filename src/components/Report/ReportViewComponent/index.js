import React from "react";
import ReportDefaultMessage from "./ReportDefaultMessage";
import ReportMaintenanceMessage from "./ReportMaintenanceMessage";

const ReportRender = ({ componentToRender }) => {
  switch (componentToRender) {
    case "allDeals":
      return (
        <div>
          <p>this is a deals report</p>
        </div>
      );
    case "salesReport":
      return <ReportMaintenanceMessage />;
    default:
      return <ReportDefaultMessage />;
  }
};

export default ReportRender;
