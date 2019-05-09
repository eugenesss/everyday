import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";
import ReportDrawer from "Components/Report/ReportDrawer";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

class Reports extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="saas-dashboard">
        <Helmet>
          <title>Everyday | Reports</title>
          <meta name="description" content="Everyday Informational Reports" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.reports" />} />
        <RctCollapsibleCard fullBlock>
          <ReportDrawer />
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default Reports;
