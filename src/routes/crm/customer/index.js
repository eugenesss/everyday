import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import CustomerList from "Components/CRM/Customer/CustomerList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// List Summary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ListSummaryItem from "Components/Everyday/ListSummary/ListSummaryItem";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

import {
  changeCustomerView,
  toggleCustomerDropDown,
  toggleCustomerSummary,
  getAllCustomer
} from "Actions";

class crm_customer extends Component {
  componentDidMount() {
    this.props.getAllCustomer();
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
    } = this.props.customerState.customerList;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Customers</title>
          <meta name="description" content="Everyday Customers Retention" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.toggleCustomerDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeCustomerView}
              />
              <ShowListSummaryButton
                action={this.props.toggleCustomerSummary}
              />
            </div>
          }
          createLink="/crm/new/customer"
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
        <CustomerList
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
  const { customerState } = crmState;
  return { customerState };
};

export default connect(
  mapStateToProps,
  {
    changeCustomerView,
    toggleCustomerDropDown,
    toggleCustomerSummary,
    getAllCustomer
  }
)(crm_customer);
