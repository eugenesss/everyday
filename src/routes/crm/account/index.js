import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

//import { getAccount } from "Actions";

//sub components
import AccountsList from "Components/CRM/Account/AccountsList";
import MyAccountsList from "Components/CRM/Account/MyAccountsList";

class crm_account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>CRM | Accounts</title>
          <meta name="description" content="OCRM Accounts Management" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.accounts" />}
          match={match}
        />
        <MyAccountsList />
        <AccountsList />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_account);
