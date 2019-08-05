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

// Actions
import { 
  clearSingleQuotation, 
  addNewProdQuote, 
  removeProdQuote, 
  handleProdQuote,  
  handleChangeQuote, 
  getAllAccount, 
  getAllUsers, 
  submitNewQuote,

  submitAccountQuotationInvoice
} from "Actions";

class acct_new_quote extends Component {
  state = {};


  _quotationParent = (element, item) =>{
    console.log('quotation new')
    this.props.submitAccountQuotationInvoice(element, item)
  }


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
              <QuotationForm
                accountPage={'Quotation'}
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
)(acct_new_quote);

