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
import ListSummaryItem from "Components/Everyday/ListSummary/ListSummaryItem";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

// Actions
import {
  changeDealView,
  toggleDealDropDown,
  toggleDealSummary,
  getAllDeal
} from "Actions";

class crm_deal extends Component {
  componentDidMount() {
    this.props.getAllDeal();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      showSummary,
      action,
      tableData,
      loading
    } = this.props.dealState.dealList;
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
        {showSummary && (
          <ListSummary>
            <ListSummaryItem
              heading={"New Lead"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Cold Lead"}
              number={"10"}
              positive={false}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Hot Lead"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Open Leads"}
              number={"10"}
              positive={true}
              percentage="20"
            />
          </ListSummary>
        )}
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
  { changeDealView, toggleDealDropDown, toggleDealSummary, getAllDeal }
)(crm_deal);
