import React, { Component } from "react";
import { connect } from "react-redux";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import ReportDateRangePicker from "../ReportDateRangePicker";

// Charts
import BarChart from "Components/Charts/BarChart";
import DonutChart from "Components/Charts/DonutChart";
import PieChart from "Components/Charts/PieChart";
import DealReportTable from "Components/Report/ReportViewComponent/ReportComponent/DealReportTable";

// Actions
import {
  reportOnChangeDate,
  reportOnFocusChange,
  reportResetDate,
  getDealReport
} from "Actions";

import {
  dealByOwner,
  dealByType,
  dealStage,
  dealRecordsInStage
} from "Components/ReportDummy";

class DealsReport extends Component {
  render() {
    const { startDate, endDate, focusedInput } = this.props.dateRange;
    const { loading } = this.props.dealReportData;
    return (
      <React.Fragment>
        {loading && <RctSectionLoader />}
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
        </div>
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Overall Deal by Owners"}>
              <BarChart data={dealByOwner} />
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Total Deals by Type"}>
              <DonutChart data={dealByType} />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Overall Deal Stages"}>
              <PieChart data={dealStage} />
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {dealRecordsInStage.map((stage, key) => {
              return (
                <RctCollapsibleCard
                  key={key}
                  heading={`${stage.stageName} count: ${stage.count}`}
                >
                  <DealReportTable deals={stage.deals} />
                </RctCollapsibleCard>
              );
            })}
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
