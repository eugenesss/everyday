import React from "react";
import { connect } from "react-redux";
import ReportContainer from "Components/Report/Components/ReportContainer";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
// Charts
import DealsPipelineChart from "Components/Charts/DealsPipelineChart";
// Action
import { getDealsPipeline } from "Actions";

function DealsPipelineReport(props) {
  const { loading, data } = props.dealsPipeline;
  return (
    <React.Fragment>
      {loading && <RctSectionLoader />}
      <ReportContainer handleSubmit={props.getDealsPipeline}>
        <DealsPipelineChart data={data} />
      </ReportContainer>
    </React.Fragment>
  );
}

const mapStateToProps = ({ reportState }) => {
  const { dealsPipeline } = reportState.dealsReport;
  return { dealsPipeline };
};

export default connect(
  mapStateToProps,
  { getDealsPipeline }
)(DealsPipelineReport);
