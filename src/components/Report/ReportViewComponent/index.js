import React from "react";
import ReportDefaultMessage from "./DefaultMessages/ReportDefaultMessage";
import ReportMaintenanceMessage from "./DefaultMessages/ReportMaintenanceMessage";

// Report Components
import DealsReport from "./View/DealsReport";
import LeadsReport from "./View/LeadsReport";
import IndividualReport from "./View/IndividualReport";

const ReportRender = ({ componentToRender }) => {
  switch (componentToRender) {
    case "allDeals":
      return <DealsReport />;
    case "leadsReport":
      return <LeadsReport />;
    case "proposalReport":
      return <ReportMaintenanceMessage />;
    case "invoiceReport":
      return <ReportMaintenanceMessage />;
    case "customerValue":
      return <ReportMaintenanceMessage />;
    case "individual":
      return <IndividualReport />;
    default:
      return <ReportDefaultMessage />;
  }
};

export default ReportRender;
