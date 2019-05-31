import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class acct_new_invoice extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Invoice</title>
          <meta name="description" content="Everyday Invoices Creation" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.newInvoice" />} />
      </React.Fragment>
    );
  }
}

export default acct_new_invoice;
