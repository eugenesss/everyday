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

import { 
  submitAccountQuotationInvoice
} from "Actions";


class acct_new_invoice extends Component {
  state = {};

  _quotationParent = (element, item) =>{
    console.log('quotation new')
    this.props.submitAccountQuotationInvoice(element, item)
  }

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
                accountPage={'Invoice'}
                _quotationParent={this._quotationParent}
              />
            </div>
            <div className="col-md-1" />
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}


const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  { 
    submitAccountQuotationInvoice
  }
)(acct_new_invoice);

