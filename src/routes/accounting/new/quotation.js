import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class acct_new_quote extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Quotation</title>
          <meta name="description" content="Everyday Quotations Creation" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.newQuotation" />} />
      </React.Fragment>
    );
  }
}

export default acct_new_quote;
