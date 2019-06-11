import React, { Component } from "react";
import { connect } from "react-redux";

// Inputs
import InvoiceFields from "Components/Form/Components/Inputs/Accounting/InvoiceFields";
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import InvoiceProductInput from "Components/Form/Components/Inputs/Accounting/InvoiceProductInput";

// Actions
import { addNewProdQuote, removeProdQuote, handleProdQuote } from "Actions";

// get all account
// get all customer
// get discount type
// get currency
// get owners

class QuotationForm extends Component {
  state = {};
  render() {
    const { products, quotation } = this.props.quotationForm;
    return (
      <React.Fragment>
        <InvoiceFields handleChange invoice handleAttnTo />
        {/* <InvoiceProductInput
          products={products}
          invoice={quotation}
          handleChange={this.props.handleProdQuote}
          handleAdd={this.props.addNewProdQuote}
          handleRemove={this.props.removeProdQuote}
        /> */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ accountingState }) => {
  const { quotationState } = accountingState;
  const { quotationForm } = quotationState;
  return { quotationForm };
};

export default connect(
  mapStateToProps,
  { addNewProdQuote, removeProdQuote, handleProdQuote }
)(QuotationForm);
