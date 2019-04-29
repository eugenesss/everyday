import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class acct_new_credit_note extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Credit Note</title>
          <meta name="description" content="Everyday Credit Note Creation" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.newCredit_note" />}
          match={this.props.match}
          enableBreadCrumb={false}
        />
      </React.Fragment>
    );
  }
}

export default acct_new_credit_note;
