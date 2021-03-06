import React from "react";
import { connect } from "react-redux";
import ReportContainer from "Components/Report/Components/ReportContainer";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
// Charts
import LeadsByOwnerChart from "Components/Charts/LeadsByOwnerChart";
// Action
import { getLeadsByOwner } from "Actions";

function LeadsByOwnerReport(props) {
  const { loading, data } = props.leadsByOwner;
  return (
    <React.Fragment>
      {loading && <RctSectionLoader />}
      <ReportContainer handleSubmit={props.getLeadsByOwner}>
        {data ? (
          <LeadsByOwnerChart data={data} />
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
  const { leadsByOwner } = reportState.leadsReport;
  return { leadsByOwner };
};

export default connect(
  mapStateToProps,
  { getLeadsByOwner }
)(LeadsByOwnerReport);
