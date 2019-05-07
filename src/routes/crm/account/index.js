import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

//import { getAccount } from "Actions";

//sub components
import AccountsList from "Components/CRM/Account/AccountsList";

class crm_account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Accounts</title>
          <meta name="description" content="Everyday Accounts Management" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.accounts" />}
          createLink="/crm/new/account"
        />
        <AccountsList />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_account);
