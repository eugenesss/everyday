import React from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// Page Components
import AccountForm from "Components/Form/Account/AccountForm";

// Actions
import { newAccount } from "Actions";

const crm_new_account = props => (
  <React.Fragment>
    <Helmet>
      <title>Everyday | New Account</title>
      <meta name="description" content="Everyday Account Creation" />
    </Helmet>
    <AccountForm title="sidebar.newAccount" handleSubmit={props.newAccount} />
  </React.Fragment>
);

export default connect(
  null,
  { newAccount }
)(crm_new_account);
