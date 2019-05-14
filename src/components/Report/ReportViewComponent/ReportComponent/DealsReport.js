import React, { Component } from "react";
import { connect } from "react-redux";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import ReportDateRangePicker from "../ReportDateRangePicker";

// Actions
import {
  reportOnChangeDate,
  reportOnFocusChange,
  reportResetDate,
  getDealReport
} from "Actions";

class DealsReport extends Component {
  render() {
    const { startDate, endDate, focusedInput } = this.props.dateRange;
    const { loading } = this.props.dealReportData;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading="Set Date Range" fullBlock>
              <ReportDateRangePicker
                startDate={startDate}
                endDate={endDate}
                onDatesChange={this.props.reportOnChangeDate}
                focusedInput={focusedInput}
                onFocusChange={this.props.reportOnFocusChange}
                handleSubmit={this.props.getDealReport}
                reset={this.props.reportResetDate}
              />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Overall Deal by Owners"}>
              {loading && <RctSectionLoader />}
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Total Deals by Type"}>
              Report
            </RctCollapsibleCard>
          </div>
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Overall Deal Stages"}>
              Report
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RctCollapsibleCard heading={"Deals in Stage"}>
              Report
            </RctCollapsibleCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ reportState }) => {
  const { dateRange, dealReportData } = reportState;
  return { dateRange, dealReportData };
};

export default connect(
  mapStateToProps,
  {
    reportOnChangeDate,
    reportOnFocusChange,
    reportResetDate,
    getDealReport
  }
)(DealsReport);