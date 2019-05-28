import React, { Component } from "react";
import { connect } from "react-redux";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Components
import ReportStaffPicker from "../ReportStaffPicker";
import ReportMonthYearPicker from "../ReportMonthYearPicker";

// Actions
import { getAllUsers, onChangeStaffSelect } from "Actions";

class IndividualReport extends Component {
  componentWillMount() {
    this.props.getAllUsers();
  }

  render() {
    const { users } = this.props;
    const { loading, staff } = this.props.individualData;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading="1. Select Staff">
              <ReportStaffPicker
                selectedStaff={staff}
                allStaff={users}
                handleChange={this.props.onChangeStaffSelect}
              />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-6">
            <RctCollapsibleCard heading="2. Select Date">
              <ReportMonthYearPicker />
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

const mapStateToProps = ({ reportState, usersState }) => {
  const { individualData } = reportState;
  const { users } = usersState;
  return { individualData, users };
};

export default connect(
  mapStateToProps,
  {
    getAllUsers,
    onChangeStaffSelect
  }
)(IndividualReport);
