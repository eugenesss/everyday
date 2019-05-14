import React from "react";
import ReportDefaultMessage from "./ReportDefaultMessage";
import ReportMaintenanceMessage from "./ReportMaintenanceMessage";

// Report Components
import DealReport from "./ReportComponent/DealsReport";

const ReportRender = ({ componentToRender }) => {
  switch (componentToRender) {
    case "allDeals":
      return <DealReport />;
    case "leadsReport":
      return <ReportMaintenanceMessage />;
    case "proposalReport":
      return <ReportMaintenanceMessage />;
    case "invoiceReport":
      return <ReportMaintenanceMessage />;
    case "customerValue":
      return <ReportMaintenanceMessage />;
    case "individual":
      return <ReportMaintenanceMessage />;
    default:
      return <ReportDefaultMessage />;
  }
};

export default ReportRender;
