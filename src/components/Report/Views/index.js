import React from "react";
import {
  ReportDefaultMessage,
  ReportMaintenanceMessage
} from "Components/Report/Components/DefaultMessages";

// Report Components

// Deal Reports
import DealsByOwnerReport from "./DealReports/DealsByOwnerReport";
import DealsByTypeReport from "./DealReports/DealsByTypeReport";
import DealsPipelineReport from "./DealReports/DealsPipelineReport";

// Lead Reports
// import LeadsReport from "./View/LeadsReport";

// Individual Report
// import IndividualReport from "./View/IndividualReport";

const ReportRender = ({ componentToRender }) => {
  switch (componentToRender) {
    case "dealsByOwner":
      return <DealsByOwnerReport />;
    case "dealsByType":
      return <DealsByTypeReport />;
    case "dealsPipeline":
      return <DealsPipelineReport />;
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
