import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import ReportDrawer from "Components/Report";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

class Reports extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todo-dashboard">
        <Helmet>
          <title>Everyday | Reports</title>
          <meta name="description" content="Everyday Informational Reports" />
        </Helmet>
        {/* <PageTitleBar title={<IntlMessages id="sidebar.reports" />} /> */}
        <ReportDrawer />
        <RctCollapsibleCard fullBlock />
      </div>
    );
  }
}

export default Reports;
