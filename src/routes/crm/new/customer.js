import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class crm_new_customer extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Customer</title>
          <meta name="description" content="Everyday Customers Creation" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.newCustomer" />} />
      </React.Fragment>
    );
  }
}

export default crm_new_customer;
