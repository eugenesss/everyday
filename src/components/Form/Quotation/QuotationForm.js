import React, { Component } from "react";
import { connect } from "react-redux";

// Inputs
import InvoiceFields from "Components/Form/Components/Inputs/Accounting/InvoiceFields";
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import InvoiceTotalTableInput from "Components/Form/Components/Inputs/Accounting/InvoiceTotalTableInput";
import InvoiceProductInput from "Components/Form/Components/Inputs/Accounting/InvoiceProductInput";
import Button from '@material-ui/core/Button';

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

    accountingClearState,
    submitAccountQuotationInvoice
} from "Actions";

// get all account
// get all customer
// get discount type
// get currency
// get owners

class QuotationForm extends Component {
  
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    
    if(this.props.quotationForm){

      this.state = {
        formFields: this.props.quotationForm,
        formFieldsProducts: this.props.quotationForm.quotationline,
        attn_to_array : []
      };

    } else {
      this.state = {
        formFields: {
          date: new Date(),
          currency: "",
          currency_rate: "",
          version: "",
    
          subtotal: 0,
          tax_amount: 0,
          discount_total: 0,
          totalAmt: 0,
          discount: "",
          discount_rate: 0,
    
          description: "",
          owner: "",
          accountId:"",
          attn_toId:"",
          details: '',
          address_1:"",
          address_2:"",
          city: "",
          state: "",
          zip: "",
          sent_date: "",
          tnc: "",
          quoteID: "",
          account: null,
          state: "Draft",
          sentOn: new Date(),
          dueDate: new Date(),
        },
        formFieldsProducts: [
          {
            description: "",
            quantity: 0,
            price: 0,
            discount: 0,
            tax_id: { name: "GST", rate: 0 },
            tax_rate: 0,
            tax_amount: 0,
            amount: 0
          }
        ],
        attn_to_array : []
      };
    
    }

  }

  componentWillUnmount(){
    this.props.accountingClearState()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {

      if(prevProps.status){
        if(prevProps.status.success != this.props.status.success){
          return true
        }
      }

      return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   
      if(snapshot){
        // restart state
        console.log('snapshot')
        this.setState({
          formFields: {
            date: new Date(),
            currency: "",
            currency_rate: "",
            version: "",
      
            subtotal: 0,
            tax_amount: 0,
            discount_total: 0,
            totalAmt: 0,
            discount: "",
            discount_rate: 0,
      
            description: "",
            owner: "",
            accountId:"",
            attn_toId:"",
            details: '',
            address_1:"",
            address_2:"",
            city: "",
            state: "",
            zip: "",
            sent_date: "",
            tnc: "",
            quoteID: "",
            account: null,
            state: "Draft",
            sentOn: new Date(),
            dueDate: new Date(),
          },
          formFieldsProducts: [
            {
              description: "",
              quantity: 0,
              price: 0,
              discount: 0,
              tax_id: { name: "GST", rate: 0 },
              tax_rate: 0,
              tax_amount: 0,
              amount: 0
            }
          ],
          attn_to_array : []
        });
      }
  }


  // quotationForm
  componentDidMount() {
    // this.props.clearSingleQuotation();
    this.props.getAllAccount()
    this.props.getAllUsers();
  }


  _handleChangeFormField = (e, value, target) => {
    let formFields = {...this.state.formFields}

    switch(e){
        case "accountId":
                formFields[e] = value
                formFields.details = value.baseContact._address.address_1 + `\n` + value.baseContact._address.address_1 + `\n` + value.baseContact._address.city + `\n` + value.baseContact._address.zip
            return this.setState({formFields: formFields, attn_to_array: value.customers})

        case "currency":
                formFields.currency_rate = value.rate
            break

        case "discount":
                formFields.discount_rate = value.rate
            break
        default : break 

    }

    formFields[e] = value

    this.setState({formFields: formFields})
    this._tabluteTaxDiscountTotal(formFields)
  }

  _handleProdQuote =(key, element , value) => {


    let formFieldsProducts = [...this.state.formFieldsProducts]
    let formFields = {...this.state.formFields}

    // calculate tax
    formFieldsProducts[key][element] = value

    switch(element){

        case "tax_id":
            formFieldsProducts[key].tax_rate = value.rate
            break

        default:break
    }
 

    const productSingleSubTotal = getSingleProductTotal(formFieldsProducts[key])
    formFieldsProducts[key].tax_amount = productSingleSubTotal[1]
    formFieldsProducts[key].amount = productSingleSubTotal[0]

    this.setState({formFieldsProducts: formFieldsProducts})
    this._tabluteTaxDiscountTotal(formFields)
  }

  _addNewProdQuote = () => {
    let formFieldsProducts = [...this.state.formFieldsProducts]
    formFieldsProducts.push({
        name: "",
        description: "",
        quantity: "",
        price: "",
        discount: "",
        tax_id: { name: "GST", rate: 0 },
        tax_rate:"",
        tax_amount: "",
        amount: 0
    })

    this.setState({formFieldsProducts: formFieldsProducts})
  }

  _removeProdQuote =(key) =>{
    let formFieldsProducts = [...this.state.formFieldsProducts]
    formFieldsProducts.splice(key, 1)
    this.setState({formFieldsProducts: formFieldsProducts})
  }

  _tabluteTaxDiscountTotal(formFields) {

    let formFieldsProducts = [...this.state.formFieldsProducts]
 
    const productSubTotal = getSubTotal(formFieldsProducts, 'amount')
    formFields.subtotal = productSubTotal

    const productTax = getTax(formFieldsProducts)
    formFields.tax_amount = productTax
 
    let totalAmt = productSubTotal + productTax
    const productTotal = getTotal(totalAmt, formFields.discount_rate)
    formFields.totalAmt = productTotal

    this.setState({formFields: formFields})

  }

  _submitFormFieldsDB = () =>{

    var today = new Date();
    var duedate = new Date();
    duedate.setDate(today.getDate()+3);

    // payload: {item: item, products: products}
    const postData = {...this.state.formFields}
    const quotationLine = [...this.state.formFieldsProducts]

    let formFields = {
      ...this.state.formFields,

      date : postData.date,
      sent_date : postData.date,
      attn_toId : {id: postData.attn_toId.id, name: postData.attn_toId.name},
      accountId : {id: postData.accountId.id, name: postData.accountId.name},
      owner: {companyId: postData.owner.companyId, id: postData.owner.id, name: postData.owner.name},
      currency : postData.currency,
      currency_rate : postData.currency_rate,
      due_date : duedate,
      totalAmt : postData.totalAmt,
      subtotal : postData.subtotal,
      tax_amount : postData.tax_amount,
      discount_rate: postData.discount_rate,
      description: postData.description,
      details: postData.details,
      quotationline: quotationLine,
      userId : postData.owner.id
    }

    this.props._quotationParent(this.props.accountPage, formFields)
  }



  render() {

    // const { products, quotation, attn_to_array } = this.props.quotationForm;
    const {currencyTable, taxTable, discountTable} = this.props.quotationList

    const tableData = this.props.tableData
    const users = this.props.users
    
    return (
      <React.Fragment>
          <InvoiceFields 
            // handleChange  = {(e, value, target) => this.props.handleChangeQuote(e, value, target)}
            handleChange  = {this._handleChangeFormField}
            edit={this.props.edit}
            tableData={tableData}
            currencyTable={currencyTable}
            discountTable={discountTable}
            quotation={this.state.formFields}
            attn_to_array={this.state.attn_to_array}
            users={users}

          />

        <div style={{marginTop: 20, marginBottom: 20}}>
          <InvoiceProductInput
            products={this.state.formFieldsProducts}
            taxTable={taxTable}
            handleChange={this._handleProdQuote}
            handleAdd={this._addNewProdQuote}
            handleRemove={this._removeProdQuote}
          />

          <div className="row">
            <div className="col-md-6"/>
            <div className="col-md-6">
              <InvoiceTotalTableInput invoice={this.state.formFields} />
            </div>
          </div>

        </div>
        
    

        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop: 20}}>
            {/* <Button variant="contained" color="secondary" className="mr-10" style={{color:'white'}}>
              Save Draft
            </Button> */}

            {/* <Button onClick={() => {
                this.props.submitNewQuote(quotation, products, '', this.props.type)
              }} variant="contained" color="primary"  className="mr-10">
              Save
            </Button> */}

            <Button onClick={this._submitFormFieldsDB} variant="contained" color="primary"  className="mr-10">
              Save
            </Button>
            
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ accountingState, crmState, usersState }) => {
  const { tableData, } = crmState.accountState.accountList 
  const { quotationState, accountState} = accountingState;
  const { quotationList } = quotationState;
  const { users } = usersState;

  return { tableData, users, quotationList};
};

export default connect(
  mapStateToProps,
  { 
    addNewProdQuote, 
    clearSingleQuotation, 
    removeProdQuote, 
    handleProdQuote, 
    handleChangeQuote, 
    getAllAccount, 
    getAllUsers, 
    submitNewQuote,

    accountingClearState,
    submitAccountQuotationInvoice
  }
)(QuotationForm);




function getSubTotal(array, key) {
    return array.reduce((a, b) => a + (b[key] || 0), 0);
}

function getSingleProductTotal(product) {
    var subtotal = product.price * product.quantity;
    let total
    let tax

    if(product.tax_rate != "0"){
        tax = product.tax_rate/100 * subtotal
    } else {
        tax = 0
    }

    total = subtotal - product.discount;

    if(total < 0) {
        total = 0
    }

    return [total, tax];
}

function getTotal(subTotal, discount) {

    var total = (subTotal) * (1-(discount/100));

    return total;

}

function getTax (product) {
    // let subTotal = 0
    let totalTax = 0
    // let total = 0
    if (product.length > 0) {
        product.forEach(element =>{
        totalTax = totalTax + element.tax_amount
    })
        return totalTax
    }
}