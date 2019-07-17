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

import InvoiceFields from "Components/Form/Components/Inputs/Accounting/InvoiceFields";
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import InvoiceProductInput from "Components/Form/Components/Inputs/Accounting/InvoiceProductInput";
import Button from '@material-ui/core/Button';



// Actions
import { getSingleQuotation, clearSingleQuotation, deleteSingleQuote, addNewProdQuote, removeProdQuote, handleProdQuote, handleChangeQuote, submitNewQuote } from "Actions";
// import { clearSingleQuotation, addNewProdQuote, removeProdQuote, handleProdQuote,  handleChangeQuote, getAllAccount, getAllUsers, submitNewQuote} from "Actions";

// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

class acct_edit_quotation extends Component {


  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleQuotation(id, true);
  }

  componentWillUnmount() {
    this.props.clearSingleQuotation();
  }

  render() {
    const {loading} = this.props.quotationToView;
    const {currencyTable, taxTable, discountTable} = this.props.quotationList
    const {products, quotation} = this.props.quotationForm 


    console.log(quotation)
    console.log(quotation.discount_total)
    console.log(quotation.discount_rate)

    console.log(quotation.currency)

    return loading ? (
      <RctPageLoader />
    ) : quotation.accountId ? (
        
      <React.Fragment>
    
          <InvoiceFields 
              handleChange  = {(e, value, target) => this.props.handleChangeQuote(e, value, target)}
              tableData={[quotation.accountId]}
              currencyTable={currencyTable}
              discountTable={discountTable}
              quotation={quotation}
              users={[quotation.owner]}
              attn_to_array={[quotation.attn_toId]}
          />


          <div style={{marginTop: 20, marginBottom: 20}}>
            <InvoiceProductInput
              products={products}
              taxTable={taxTable}
              invoice={quotation}
              handleChange={this.props.handleProdQuote}
              handleAdd={this.props.addNewProdQuote}
              handleRemove={this.props.removeProdQuote}
            />
          </div>

          <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop: 20}}>
              {/* <Button variant="contained" color="secondary" className="mr-10" style={{color:'white'}}>
                Save Draft
              </Button> */}
              <Button onClick={() => {
                  this.props.submitNewQuote(quotation, products, true)
                }} variant="contained" color="primary"  className="mr-10">
                Save Edit
              </Button>
          </div>

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
