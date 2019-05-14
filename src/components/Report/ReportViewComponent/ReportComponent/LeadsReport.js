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
  getLeadReport
} from "Actions";

class LeadsReport extends Component {
  render() {
    const { startDate, endDate, focusedInput } = this.props.dateRange;
    const { loading } = this.props.leadReportData;
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
                handleSubmit={this.props.getLeadReport}
                reset={this.props.reportResetDate}
              />
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Leads Created by Source this year"}>
              {loading && <RctSectionLoader />}
            </RctCollapsibleCard>
          </div>
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Overall Leads Status"}>
              Report
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RctCollapsibleCard heading={"Leads Created By Staff"}>
              Report
            </RctCollapsibleCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ reportState }) => {
  const { dateRange, leadReportData } = reportState;
  return { dateRange, leadReportData };
};

export default connect(
  mapStateToProps,
  {
    reportOnChangeDate,
    reportOnFocusChange,
    reportResetDate,
    getLeadReport
  }
)(LeadsReport);
