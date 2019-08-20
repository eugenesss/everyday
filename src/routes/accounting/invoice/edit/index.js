import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import BgCard from "Components/Everyday/BgCard";
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
  submitNewQuote,

  submitInvoice,
  getSingleInvoice
} from "Actions";
// import { clearSingleQuotation, addNewProdQuote, removeProdQuote, handleProdQuote,  handleChangeQuote, getAllAccount, getAllUsers, submitNewQuote} from "Actions";

// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

class acct_edit_quotation extends Component {


  UNSAFE_componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleInvoice(id);
  }

  componentWillUnmount() {
    this.props.clearSingleQuotation();
  }

  _quotationParent = (element, item) =>{
    // console.log(element)
    this.props.submitInvoice(item)
  }

  render() {

    // const {currencyTable, taxTable, discountTable} = this.props.quotationList
    // const {products, quotation} = this.props.quotationForm 
    const { loading, invoice } = this.props.invoiceToView

    return loading ? (
      <RctPageLoader />
    ) : invoice ? (
      
      <React.Fragment>
      <Helmet>
        <title>Everyday | Edit Invoice</title>
        <meta name="description" content="Everyday Invoice Creation" />
      </Helmet>
      <BgCard
        heading={<IntlMessages id="Edit Invoice" />}
      >
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <QuotationForm
              accountPage={'Invoice'}
              edit={true}
              quotationForm={invoice}
              _quotationParent={this._quotationParent}
            />
          </div>
          <div className="col-md-1" />
        </div>
      </BgCard>
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


const mapStateToProps = ({ accountingState }) => {
  const { invoiceState } = accountingState;
  const { invoiceToView , invoiceList} = invoiceState;
  return { invoiceToView , invoiceList};
};

// deleted

export default connect(
  mapStateToProps,
  { getSingleInvoice, submitInvoice, getSingleQuotation, clearSingleQuotation, deleteSingleQuote, addNewProdQuote, removeProdQuote, handleProdQuote, handleChangeQuote, submitNewQuote }
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
