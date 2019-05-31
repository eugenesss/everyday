import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class acct_new_payment extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Payment</title>
          <meta name="description" content="Everyday Payment Creation" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.newPayment" />} />
      </React.Fragment>
    );
  }
}

export default acct_new_payment;
