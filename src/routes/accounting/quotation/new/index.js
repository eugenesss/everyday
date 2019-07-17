import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import QuotationForm from "Components/Form/Quotation/QuotationForm";

class acct_new_quote extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Quotation</title>
          <meta name="description" content="Everyday Quotations Creation" />
        </Helmet>
        <RctCollapsibleCard
          heading={<IntlMessages id="sidebar.newQuotation" />}
        >
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <QuotationForm />
            </div>
            <div className="col-md-1" />
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default acct_new_quote;
