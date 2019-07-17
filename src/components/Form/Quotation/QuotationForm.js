import React, { Component } from "react";
import { connect } from "react-redux";

// Inputs
import InvoiceFields from "Components/Form/Components/Inputs/Accounting/InvoiceFields";
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import InvoiceProductInput from "Components/Form/Components/Inputs/Accounting/InvoiceProductInput";
import Button from '@material-ui/core/Button';


// Actions
import { clearSingleQuotation, addNewProdQuote, removeProdQuote, handleProdQuote,  handleChangeQuote, getAllAccount, getAllUsers, submitNewQuote} from "Actions";

// get all account
// get all customer
// get discount type
// get currency
// get owners

class QuotationForm extends Component {
  
  state = {};

  componentDidMount() {
    this.props.clearSingleQuotation();
    this.props.getAllAccount()
    this.props.getAllUsers();
  }

  render() {
    const { products, quotation, attn_to_array } = this.props.quotationForm;
    const tableData = this.props.tableData
    const {currencyTable, taxTable, discountTable} = this.props.quotationList
    const users = this.props.users


    return (
      <React.Fragment>
        <InvoiceFields 
          handleChange  = {(e, value, target) => this.props.handleChangeQuote(e, value, target)}
          tableData={tableData}
          currencyTable={currencyTable}
          discountTable={discountTable}
          quotation={quotation}
          users={users}
          attn_to_array={attn_to_array}
          invoice 
          handleAttnTo
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
                this.props.submitNewQuote(quotation, products)
              }} variant="contained" color="primary"  className="mr-10">
              Save
            </Button>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ accountingState, crmState, usersState }) => {
  const {tableData, } = crmState.accountState.accountList 
  const { quotationState,} = accountingState;
  const { quotationForm, quotationList } = quotationState;
  const { users } = usersState;

  return { quotationForm, tableData, users, quotationList};
};

export default connect(
  mapStateToProps,
  { addNewProdQuote, clearSingleQuotation, removeProdQuote, handleProdQuote, handleChangeQuote, getAllAccount, getAllUsers, submitNewQuote}
)(QuotationForm);
