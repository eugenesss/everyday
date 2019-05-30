import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

//sub components
import AccountList from "Components/CRM/Account/AccountList";

// Actions
import {
  changeAccountView,
  toggleAccountDropDown,
  toggleAccountSummary,
  getAllAccount
} from "Actions";

class crm_account extends Component {
  componentDidMount() {
    this.props.getAllAccount();
  }

  reload() {
    console.log("reload");
  }
  massImportAccount() {
    console.log("massImportAccount");
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
            </div>
          }
          createLink="/crm/new/account"
          moreButton={
            <MoreButton>
              {{ handleOnClick: this.reload.bind(this), label: "Reload" }}
              {{
                handleOnClick: this.massImportAccount.bind(this),
                label: "Mass Import Accounts (csv)"
              }}
            </MoreButton>
          }
        />
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
    getAllAccount
  }
)(crm_account);
