import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import AccountForm from "Components/Form/Account/AccountForm";

// Actions
import { newAccount } from "Actions";

class crm_new_account extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Account</title>
          <meta name="description" content="Everyday Account Creation" />
        </Helmet>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <RctCollapsibleCard
              heading={<IntlMessages id="sidebar.newAccount" />}
            >
              <AccountForm handleSubmit={this.props.newAccount} />
            </RctCollapsibleCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default connect(
  null,
  { newAccount }
)(crm_new_account);
