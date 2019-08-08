import React from "react";
import { connect } from "react-redux";
import ReportContainer from "Components/Report/Components/ReportContainer";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
// Charts
import DealsByOwnerChart from "Components/Charts/DealsByOwnerChart";
// Actions
import { getWonByOwner } from "Actions";

function WonByOwnerReport(props) {
  const { loading, data } = props.wonByOwner;
  return (
    <React.Fragment>
      {loading && <RctSectionLoader />}
      <ReportContainer handleSubmit={props.getWonByOwner}>
        {data ? (
          <DealsByOwnerChart data={data} />
        ) : (
          <p className="text-muted text-center">
            <i>No Records</i>
          </p>
        )}
      </ReportContainer>
    </React.Fragment>
  );
}

const mapStateToProps = ({ reportState }) => {
  const { wonByOwner } = reportState.closedDealsReport;
  return { wonByOwner };
};

export default connect(
  mapStateToProps,
  { getWonByOwner }
)(WonByOwnerReport);
