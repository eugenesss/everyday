import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

class acct_credit_note extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Credit Note</title>
          <meta name="description" content="Everyday Quotation Management" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.credit_note" />}
          match={match}
        />
      </React.Fragment>
    );
  }
}

export default acct_credit_note;
