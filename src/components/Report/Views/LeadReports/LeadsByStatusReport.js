import React from "react";
import { connect } from "react-redux";
import ReportContainer from "Components/Report/Components/ReportContainer";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
// Charts
import LeadsByStatusChart from "Components/Charts/LeadsByStatusChart";
// Action
import { getLeadsByStatus } from "Actions";

function LeadsByStatusReport(props) {
  const { loading, data } = props.leadsByStatus;
  return (
    <React.Fragment>
      {loading && <RctSectionLoader />}
      <ReportContainer handleSubmit={props.getLeadsByStatus}>
        {data ? (
          <LeadsByStatusChart data={data} />
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
  const { leadsByStatus } = reportState.leadsReport;
  return { leadsByStatus };
};

export default connect(
  mapStateToProps,
  { getLeadsByStatus }
)(LeadsByStatusReport);
