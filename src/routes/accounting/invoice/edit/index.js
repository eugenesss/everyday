import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import DealForm from "Components/Form/Deal/DealForm";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import QuotationForm from "Components/Form/Quotation/QuotationForm";

import InvoiceFields from "Components/Form/Components/Inputs/Accounting/InvoiceFields";
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import InvoiceProductInput from "Components/Form/Components/Inputs/Accounting/InvoiceProductInput";
import Button from '@material-ui/core/Button';



// Actions
import { 
  getSingleQuotation, 
  clearSingleQuotation, 
  deleteSingleQuote, 
  addNewProdQuote, 
  removeProdQuote, 
  handleProdQuote, 
  handleChangeQuote, 
  submitNewQuote
} from "Actions";
// import { clearSingleQuotation, addNewProdQuote, removeProdQuote, handleProdQuote,  handleChangeQuote, getAllAccount, getAllUsers, submitNewQuote} from "Actions";

// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

class acct_edit_quotation extends Component {


  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleQuotation(id, true, 'invoice');
  }

  componentWillUnmount() {
    this.props.clearSingleQuotation();
  }


  _quotationParent = (element, item) =>{
    console.log('invoice edit')
    console.log(element, item)
    this.props.submitNewQuote(element, item)
  }


  render() {
    const {loading} = this.props.quotationToView;
    const {currencyTable, taxTable, discountTable} = this.props.quotationList
    const {products, quotation} = this.props.quotationForm 

    return loading ? (
      <RctPageLoader />
    ) : quotation ? (
        
      <React.Fragment>
      <Helmet>
        <title>Everyday | Edit Quotation</title>
        <meta name="description" content="Everyday Quotations Creation" />
      </Helmet>
      <RctCollapsibleCard
        heading={<IntlMessages id="Edit Quotation" />}
      >
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <QuotationForm
              accountPage={'Invoice'}
              quotationForm={this.props.quotationForm}
              _quotationParent={this._quotationParent}
            />
          </div>
          <div className="col-md-1" />
        </div>
      </RctCollapsibleCard>
    </React.Fragment>
      
    ) : (
      <PageErrorMessage
        heading="Not Found"
        message="This could be because of a network problem or the record might have been deleted"
      />
    );
  }
}
// const mapStateToProps = ({ crmState }) => {
//   const { dealState } = crmState;
//   const { dealForm } = dealState;
//   return { dealForm };
// };

// export default connect(
//   mapStateToProps,
//   { submitEditDeal }
// )(acct_edit_quotation);


const mapStateToProps = ({ accountingState, crmState, usersState }) => {
  const { quotationState } = accountingState;
  const { quotationToView, quotationList, quotationForm } = quotationState;

  return { quotationToView, quotationList, quotationForm };
};

// deleted

export default connect(
  mapStateToProps,
  { getSingleQuotation, clearSingleQuotation, deleteSingleQuote, addNewProdQuote, removeProdQuote, handleProdQuote, handleChangeQuote, submitNewQuote }
)(acct_edit_quotation);



// const mapStateToProps = ({ accountingState, crmState, usersState }) => {
//   const {tableData, } = crmState.accountState.accountList 
//   const { quotationState,} = accountingState;
//   const { quotationForm, quotationList, quotationToView } = quotationState;
//   const { users } = usersState;
//   return { quotationForm, tableData, users, quotationList, quotationToView};
// };

// export default connect(
//   mapStateToProps,
//   { addNewProdQuote, removeProdQuote, handleProdQuote, handleChangeQuote, getAllAccount, getAllUsers, submitNewQuote, getSingleQuotation, clearSingleQuotation, deleteSingleQuote }
// )(acct_edit_quotation);
