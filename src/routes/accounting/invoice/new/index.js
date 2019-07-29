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

class acct_new_invoice extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Invoice</title>
          <meta name="description" content="Everyday Invoices Creation" />
        </Helmet>
        <RctCollapsibleCard
          heading={<IntlMessages id="sidebar.newInvoice" />}
        >
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <QuotationForm
                type={'invoice'}
              />
            </div>
            <div className="col-md-1" />
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default acct_new_invoice;
