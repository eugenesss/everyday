import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import BgCard from "Components/Everyday/BgCard";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import QuotationForm from "Components/Form/Quotation/QuotationForm";

import { 
  submitAccountQuotationInvoice
} from "Actions";


class acct_new_invoice extends Component {
  state = {};

  _quotationParent = (element, item) =>{
    this.props.submitAccountQuotationInvoice(element, item)
  }

  render() {

    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Invoice</title>
          <meta name="description" content="Everyday Invoices Creation" />
        </Helmet>
        <BgCard
          heading={<IntlMessages id="sidebar.newInvoice" />}
        >
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <QuotationForm
                accountPage={'Invoice'}
                quotationForm={null}
                status={this.props.accountingState.accountState}
                _quotationParent={this._quotationParent}
              />
            </div>
            <div className="col-md-1" />
          </div>
        </BgCard>
      </React.Fragment>
    );
  }
}


const mapStateToProps = ({accountingState}) => {
  return {
    accountingState
  };
};

export default connect(
  mapStateToProps,
  { 
    submitAccountQuotationInvoice
  }
)(acct_new_invoice);

