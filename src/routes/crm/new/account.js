import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class crm_new_account extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Account</title>
          <meta name="description" content="Everyday Account Creation" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.newAccount" />}
          match={this.props.match}
          enableBreadCrumb={false}
        />
      </React.Fragment>
    );
  }
}

export default crm_new_account;
