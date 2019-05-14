import React, { Component } from "react";
import { connect } from "react-redux";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

class IndividualReport extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <RctCollapsibleCard>
              <div>staff picker</div> <div>month picker / all time</div>
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <RctCollapsibleCard heading="Closing Rate">
              closing rate,
            </RctCollapsibleCard>
          </div>
          <div className="col-md-4">
            <RctCollapsibleCard heading="Lead To Deal Ratio">
              lead to deal conversion
            </RctCollapsibleCard>
          </div>
          <div className="col-md-4">
            <RctCollapsibleCard heading="Avg Deal Amount">
              avg deal amount,
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <RctCollapsibleCard heading="Types of Deals">
              closing rate,
            </RctCollapsibleCard>
          </div>
          <div className="col-md-4">
            <RctCollapsibleCard heading="Lead Source">
              lead to deal conversion
            </RctCollapsibleCard>
          </div>
          <div className="col-md-4">
            <RctCollapsibleCard heading="Avg Sales Cycle">
              avg deal amount,
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RctCollapsibleCard heading="Open Deals">
              all deal closing in month
            </RctCollapsibleCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ reportState }) => {
  const {} = reportState;
  return {};
};

export default connect(
  null,
  {}
)(IndividualReport);
