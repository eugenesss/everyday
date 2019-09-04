import React, { Component } from "react";
import { connect } from "react-redux";
import DataBlock from "./DataBlock";
import { Stars } from "@material-ui/icons";

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
        <div className="col-3">
          <DataBlock
            label={"Total Leads"}
            amount={data && data.totalLeads}
            loading={loading}
            icon={<Stars />}
          />
        </div>
        <div className="col-3">
          <DataBlock
            loading={loading}
            label={"Open Deals"}
            amount={data && data.totalOpenDeals}
          />
        </div>
        <div className="col-3">
          <DataBlock
            loading={loading}
            label={"Open Deal Amount"}
            money
            amount={data && data.openDealsAmount}
          />
        </div>
        <div className="col-3">
          <DataBlock
            loading={loading}
            label={"Total Deal Won"}
            money
            amount={data && data.dealsWonAmount}
          />
        </div>
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
