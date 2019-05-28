import React from "react";

// page req
import { Helmet } from "react-helmet";
import ReportDrawer from "Components/Report";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

const Reports = ({}) => {
  return (
    <div className="todo-dashboard">
      <Helmet>
        <title>Everyday | Reports</title>
        <meta name="description" content="Everyday Informational Reports" />
      </Helmet>
      <ReportDrawer />
      <RctCollapsibleCard fullBlock />
    </div>
  );
};

export default Reports;
