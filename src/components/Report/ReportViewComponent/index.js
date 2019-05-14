import React from "react";
import ReportDefaultMessage from "./DefaultMessages/ReportDefaultMessage";
import ReportMaintenanceMessage from "./DefaultMessages/ReportMaintenanceMessage";

// Report Components
import DealsReport from "./ReportComponent/DealsReport";
import LeadsReport from "./ReportComponent/LeadsReport";
import IndividualReport from "./ReportComponent/IndividualReport";

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
