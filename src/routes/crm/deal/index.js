import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import DealList from "Components/CRM/Deal/DealList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// List Summary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

// Actions
import {
  changeDealView,
  toggleDealDropDown,
  toggleDealSummary,
  getAllDeal,
  getDealSummary
} from "Actions";

class crm_deal extends Component {
  componentDidMount() {
    this.props.getAllDeal();
    this.props.getDealSummary();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.dealState.dealList;
    const { showSummary, summary } = this.props.dealState.dealSummary;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Deals</title>
          <meta name="description" content="Everyday Deals Management" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.toggleDealDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeDealView}
              />
              <ShowListSummaryButton action={this.props.toggleDealSummary} />
            </div>
          }
          createLink="/crm/new/deal"
        />
        {showSummary && <ListSummary summary={summary} />}
        <DealList
          title={nowShowing}
          action={action}
          tableData={tableData}
          loading={loading}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { dealState } = crmState;
  return { dealState };
};

export default connect(
  mapStateToProps,
  {
    changeDealView,
    toggleDealDropDown,
    toggleDealSummary,
    getAllDeal,
    getDealSummary
  }
)(crm_deal);
