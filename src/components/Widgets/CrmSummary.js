import React, { Component } from "react";
import { connect } from "react-redux";
import DataBlock from "./DataBlock";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// actions
import { getCrmSummary } from "Actions";

class CrmSummary extends Component {
  componentDidMount() {
    this.props.getCrmSummary();
  }
  render() {
    const { loading, data } = this.props.crmSummary;
    return (
      <div className="row">
        {loading && <RctSectionLoader />}
        {data && (
          <React.Fragment>
            <div className="col">
              <DataBlock label={"Total Leads"} amount={data.totalLeads} />
            </div>
            <div className="col">
              <DataBlock label={"Open Deals"} amount={data.totalOpenDeals} />
            </div>
            <div className="col">
              <DataBlock
                label={"Open Deal Amount"}
                money
                amount={data.openDealsAmount}
              />
            </div>
            <div className="col">
              <DataBlock
                label={"Total Deal Won"}
                money
                amount={data.dealsWonAmount}
              />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ widgetState }) => {
  const { crmSummary } = widgetState;
  return { crmSummary };
};

export default connect(
  mapStateToProps,
  { getCrmSummary }
)(CrmSummary);
