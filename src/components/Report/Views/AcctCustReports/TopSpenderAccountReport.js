import React from "react";
import { connect } from "react-redux";
import ReportContainer from "Components/Report/Components/ReportContainer";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
// Charts
import TopSpenderAccountChart from "Components/Charts/TopSpenderAccountChart";
// Actions
import { getTopSpenderAccount } from "Actions";

function TopSpenderAccountReport(props) {
  const { loading, data } = props.topSpenderAccount;
  return (
    <React.Fragment>
      {loading && <RctSectionLoader />}
      <ReportContainer handleSubmit={props.getTopSpenderAccount}>
        {data ? (
          <TopSpenderAccountChart data={data} />
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
  const { topSpenderAccount } = reportState.acctcustReport;
  return { topSpenderAccount };
};

export default connect(
  mapStateToProps,
  { getTopSpenderAccount }
)(TopSpenderAccountReport);
