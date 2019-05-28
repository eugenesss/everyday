import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// List Summary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

//sub components
import AccountList from "Components/CRM/Account/AccountList";

// Actions
import {
  changeAccountView,
  toggleAccountDropDown,
  toggleAccountSummary,
  getAllAccount,
  getAccountSummary
} from "Actions";

class crm_account extends Component {
  componentDidMount() {
    this.props.getAllAccount();
    this.props.getAccountSummary();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.accountState.accountList;
    const { showSummary, summary } = this.props.accountState.accountSummary;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Accounts</title>
          <meta name="description" content="Everyday Accounts Management" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.toggleAccountDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeAccountView}
              />
              <ShowListSummaryButton action={this.props.toggleAccountSummary} />
            </div>
          }
          createLink="/crm/new/account"
        />
        {showSummary && <ListSummary summary={summary} />}
        <AccountList
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
  const { accountState } = crmState;
  return { accountState };
};

export default connect(
  mapStateToProps,
  {
    changeAccountView,
    toggleAccountDropDown,
    toggleAccountSummary,
    getAllAccount,
    getAccountSummary
  }
)(crm_account);
