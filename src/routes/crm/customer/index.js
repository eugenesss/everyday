import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import CustomerList from "Components/CRM/Customer/CustomerList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// List Summary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

import {
  changeCustomerView,
  toggleCustomerDropDown,
  toggleCustomerSummary,
  getAllCustomer,
  getCustomerSummary
} from "Actions";

class crm_customer extends Component {
  componentDidMount() {
    this.props.getAllCustomer();
    this.props.getCustomerSummary();
  }

  reload() {
    console.log("reload");
  }
  massImportCust() {
    console.log("massImportCust");
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.customerState.customerList;

    const { showSummary, summary } = this.props.customerState.customerSummary;
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
          extraButtons={
            <MoreButton>
              <div handleOnClick={() => this.reload()} label="Reload" />
              <div
                handleOnClick={() => this.massImportCust()}
                label={"Mass Import Customers (csv)"}
              />
            </MoreButton>
          }
        />
        {showSummary && <ListSummary summary={summary} />}
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
    getAllCustomer,
    getCustomerSummary
  }
)(crm_customer);
