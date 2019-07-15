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
import LeadsByStatusReport from "./LeadReports/LeadsByStatusReport";
import LeadsByOwnerReport from "./LeadReports/LeadsByOwnerReport";
import LeadsBySourceReport from "./LeadReports/LeadsBySourceReport";

// Acct Cust Reports
import TopSpenderAccountReport from "./AcctCustReports/TopSpenderAccountReport";
import TopSpenderCustomerReport from "./AcctCustReports/TopSpenderCustomerReport";

// Individual Report
// import IndividualReport from "./View/IndividualReport";

const ReportRender = ({ componentToRender }) => {
  switch (componentToRender) {
    //===================
    // Deal Reports
    //===================
    case "dealsByOwner":
      return <DealsByOwnerReport />;
    case "dealsByType":
      return <DealsByTypeReport />;
    case "dealsPipeline":
      return <DealsPipelineReport />;
    //===================
    // Lead Reports
    //===================
    case "leadsByStatus":
      return <LeadsByStatusReport />;
    case "leadsByOwner":
      return <LeadsByOwnerReport />;
    case "leadsBySource":
      return <LeadsBySourceReport />;
    //===================
    // Acct Cust Reports
    //===================
    case "topSpenderAccount":
      return <TopSpenderAccountReport />;
    case "topSpenderCustomer":
      return <TopSpenderCustomerReport />;
    //===================
    // Sale Reports
    //===================
    case "proposalReport":
      return <ReportMaintenanceMessage />;
    case "invoiceReport":
      return <ReportMaintenanceMessage />;
    case "customerValue":
      return <ReportMaintenanceMessage />;
    //===================
    // Individual Reports
    //===================
    case "individual":
      return <ReportMaintenanceMessage />;
    default:
      return <ReportDefaultMessage />;
  }
};

export default ReportRender;
