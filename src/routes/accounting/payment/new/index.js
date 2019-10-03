import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import BgCard from "Components/Everyday/BgCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";

// Credit Note Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";



// InvoicePaymentList
import NewPayment from "Components/Form/Payment/NewPayment"
import InvoicesOneCompany from "Components/Accounting/Payment/InvoicesOneCompany";
import BalancePayment from "Components/Accounting/Payment/BalancePayment";

import FormWrapper from "Components/Form/Components/Layout/FormWrapper";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

import DialogRoot from "Components/Dialog/DialogRoot";

// Actions
import { 
  fetchAllCompanies, 
  fetchAllInovicesOneCompany,
  handleRegErrorForm,
  handleRegSuccessForm,
  handleRegWarningForm,
  makePayment
} from "Actions";



class acct_new_payment extends Component {

  constructor(props) {
    super(props)
    // this.SubmitPaymentArray = []
  }

  state=({

    invoice:{
      customer: '',
      customerName: '',
      amount : 0,
      paymentMethod: '',
      date: new Date(),
      paymentRef: '',
      memo : '',
      paymentDifference: '',
      userId : localStorage.getItem('user_id'),
    },

    currentInvoiceAmount : 0,

    InvoiceList : [],
    BalancePayment: [],
   
    SubmitPaymentArray:[],
    redirectAllocation: false,
    currentAllocation: ''

  })

  componentDidMount(){
    this.props.fetchAllCompanies()
  }

  _renderAllInvoicesForOneCompany = (e) => {
    this.props.fetchAllInovicesOneCompany({id: e.id, key: 'all'})
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
  
    const {fetchInvoice, fetchInvoiceList, fetchBalancePayment} = this.props.paymentList
  
    if(prevProps.paymentList.fetchInvoice != fetchInvoice){
      if(fetchInvoiceList.length > 0){
        return [fetchInvoiceList, fetchBalancePayment]
      } else {
        return [[], fetchBalancePayment]
      }
    }
   
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.setState({InvoiceList: snapshot[0], BalancePayment: snapshot[1]})
    }
  }

  onSetState = (a, b,c) =>{

    let invoice = {...this.state.invoice}
    if(a == "customerName"){
      invoice.customer = c.id
    }
    invoice[a] = b
    this.setState({invoice: invoice})
  }

  onCheckList = (rowIndex, value) => {
    let InvoiceList = [...this.state.InvoiceList]

    // if(!value){
    //   InvoiceList[rowIndex].amount = InvoiceList[rowIndex].openBalance
    // } else {
    //   InvoiceList[rowIndex].amount = 0
    // }

    InvoiceList[rowIndex].reconciled = !value
    this.setState({InvoiceList: InvoiceList})
  }

  onBalancePaymentCheck = (rowIndex, value) => {
    let BalancePayment = [...this.state.BalancePayment]

    if(!value){
      BalancePayment[rowIndex].reconciled = true 
      if(BalancePayment[rowIndex].allocation == 0){
        BalancePayment[rowIndex].allocation = BalancePayment[rowIndex].amount
      }
    } else{
      BalancePayment[rowIndex].reconciled = false 
      // BalancePayment[rowIndex].allocation = 0
    }
  
    this.setState({BalancePayment: BalancePayment})
  }

  balanceHandleChange = (value, index) => {
    let BalancePayment = [...this.state.BalancePayment]
    BalancePayment[index].allocation = value

    if(BalancePayment[index].allocation < BalancePayment[index].amount){
      BalancePayment[index].reconciled = false
    }

    if(BalancePayment[index].allocation >= BalancePayment[index].amount){
      BalancePayment[index].allocation = BalancePayment[index].amount
      BalancePayment[index].reconciled = true
    }

    this.setState({BalancePayment: BalancePayment})
  }

  // key allocation
  handleChange = (e, index) => {

    let InvoiceList = [...this.state.InvoiceList]
    let currentInvoiceAmount = 0

    InvoiceList[index].amount = e

    if(e >= InvoiceList[index].openBalance) {
      InvoiceList[index].reconciled = true
      InvoiceList[index].amount = InvoiceList[index].openBalance
    } else {
      InvoiceList[index].amount = e
      InvoiceList[index].reconciled = false
    }

    this.setState({InvoiceList: InvoiceList, currentInvoiceAmount: currentInvoiceAmount})
  }

  _redirectAllocationRestart = () =>{
    this.setState({redirectAllocation: false})
  }

  _submitPayment = (e) => {

    let SubmitPaymentArray = []
    const array = [...this.state.InvoiceList]
    let currentAmount = 0

    array.map((item, index) => {
      if(item.amount > 0){
        currentAmount = parseFloat(currentAmount) + parseFloat(item.amount) 
        // let invoice = {...this.state.invoice}
        // invoice.amount = item.amount
        // invoice.invoiceQuote = item.invoiceId
        // invoice.invoiceId = item.id
        // invoice.reconciled = item.reconciled
        SubmitPaymentArray.push(item)
      }
    })

    // Single payment for multiple invoices
    let payment = {
      payment: this.state.invoice,
      invoices : SubmitPaymentArray
    }

    const calculatePaymentAmount = this.state.invoice.amount - currentAmount

    let BalancePayment = [...this.state.BalancePayment]
    let paymentBalance = []
    
    if(BalancePayment.length > 0) {
      BalancePayment.map(item =>{
        if(item.reconciled){
          if(item.allocation > 0){
            paymentBalance.push(item)
          } else{
            window.confirm('No allocation detected, input your amount')
          }
        }
      })
    }
    

    if(SubmitPaymentArray.length > 0){
  
      if(calculatePaymentAmount > 0){

        if(!this.state.invoice.paymentDifference) {
        
          const r = window.confirm(`Your current payment amount will lead to excess balance. Click OK to confirm excess amount to be saved into balance which will be surfaced during next payment or Cancel to return.`); if(r == true){
            payment.balancePayment = calculatePaymentAmount
            this.props.makePayment({payment: payment, balance: paymentBalance})
          }

        } else {
          
          const r = window.confirm(`You have set the reconciled to "Fully Reconciled". Click OK to confirm the remaining amount will not be reflected in the balance in your next payment or Cancel to return.`); if(r == true) {
            payment.balancePayment = calculatePaymentAmount
            this.props.makePayment({payment: payment, balance: paymentBalance})
          }

        }

      } else if (calculatePaymentAmount == 0){

        // if(!this.state.invoice.paymentDifference) {
        //   this.props.makePayment({payment: payment, balance: paymentBalance});
        // } else {
        //   const r = window.confirm(`You have set the reconciled to "Fully Reconciled", the balance of $${calculatePaymentAmount} will not be reflected in the balance in your next payment.`); if(r == true) {
        //     this.props.makePayment({payment: payment, balance: paymentBalance})
        //   }
        // }
        this.props.makePayment({payment: payment, balance: paymentBalance});


      } else {
        const r = window.confirm(`Your payment amount does not match your invoice(s) payment, you have a record balance of $${calculatePaymentAmount}. Please check your payment again.`); if(r == true){}
      }

    } else {
      // window.confirm('No items to make payment, please check your invoices again')

      if(paymentBalance.length > 0){
        const r = window.confirm("You have opted to pay using existing balance(s) from previous payment, click OK to confirm or Cancel to return."); if(r == true){
          this.props.makePayment({payment: {}, balance: paymentBalance})
        }
      } else {
        const r = window.confirm('No payment detected, please key in the amount and payment details to proceed'); if(r == true){
          this.props.makePayment({payment: {}, balance: paymentBalance})
        }
      }

    }

  }

  render() {



    // Access Category
    // export const category = { id: "1", name: "CRM Access" };
    // // Access Rights
    // export const accessRight1 = {
    //   id: "1",
    //   name: "Lead",
    //   model: "lead",
    //   method: "read",
    //   editable: true,
    //   category: 1,
    //   description: "Lorem Ipsum"
    // };
    // export const accessRight2 = {
    //   id: "1",
    //   name: "Lead",
    //   model: "lead",
    //   method: "create",
    //   editable: true,
    //   category: 1,
    //   description: "Lorem Ipsum"
    // };

    // // Roles
    // export const role1 = { name: "Company Admin", id: "1", tier: 0, isAdmin: true };
    // export const role2 = {
    //   name: "Sales Manager",
    //   id: "2",
    //   tier: 1,
    //   isAdmin: false,
    //   parentId: "1",
    //   accessRight: [
    //     { categoryName: "CRM", accessRight: [accessRight1, accessRight2] }
    //   ]
    // };
    // export const role3 = {
    //   name: "Accounting Manager",
    //   id: "3",
    //   tier: 2,
    //   parentId: "2",
    //   isAdmin: false,
    //   accessRight: [{ categoryName: "CRM", accessRight: [accessRight1] }]
    // };





    const {loading, companyList, fetchInvoice} = this.props.paymentList

    let container = null
    let balancePayment = null

    if(fetchInvoice){
      container = (
        <RctPageLoader/>         
      )
    } else {
      
      if(this.state.InvoiceList.length > 0){ 
        container = (
          <InvoicesOneCompany
            title={'All Invoices'}
            tableData={this.state.InvoiceList}
            onCheckList={this.onCheckList}
            handleChange={this.handleChange}
          />
        )
      } else {
        container = (
          <FormInputLayout 
            title="Select a Company"
            desc="No outstanding invoices found"
          >
          </FormInputLayout>
        )
      }

      if(this.state.BalancePayment.length > 0){
        balancePayment = (
          <BalancePayment
            title={'Credit & Debit Balances'}
            tableData={this.state.BalancePayment}
            onBalancePaymentCheck={this.onBalancePaymentCheck}
            balanceHandleChange={this.balanceHandleChange}
          />
        )
      }
    }

    return loading ? (
      <RctPageLoader />
    ) : companyList ? (
  
      // companyList
        <React.Fragment>
            <Helmet>
              <title>Everyday | Payment</title>
              <meta name="description" content="Everyday Payment Management" />
            </Helmet>
            
            <FormWrapper
              onSave={this._submitPayment}
              disabled={true}
              title={`Create New Payment`}
            >
   
              <form autoComplete="off">

                <FormInputLayout
                  title="Key Information"
                  desc="Payment information"
                >
                    <NewPayment
                      companyList={companyList}
                      onSetState={this.onSetState}
                      state={this.state.invoice}
                      _renderAllInvoicesForOneCompany={this._renderAllInvoicesForOneCompany}
                    />

                </FormInputLayout>
                

                  {container}

                  {balancePayment}

                  {/* <div>
                    <div>
                      total input: {this.state.invoice.amount}
                    </div>
                    <div>
                      total invoice amount: {this.state.currentInvoiceAmount}
                    </div>
                  </div> */}


                {this.state.redirectAllocation && (
                  <DialogRoot
                    title="Allocate Paid Amount"
                    size="sm"
                    show={this.state.redirectAllocation}
                    handleHide={this._redirectAllocationRestart}
                    dialogActionLabel="Transfer"
                    dialogAction={this.onSubmit}
                  >
                    <div className="row">
                      {/* <div className="col">
                        <MakePayment
                          invoice={invoice}
                          handleHide={this.launchMakePaymentDialog}
                          makePayment={this.makePayment}
                        />
                      </div> */}
                      show open balance,

                      show current paid amount, 

                      show how much you want to pay,

                      back and enter payment
                    </div>
                  </DialogRoot>
                )}


              </form>

            </FormWrapper>
        </React.Fragment>
     ) : (
      <PageErrorMessage
        heading="Not Found"
        message="This could be because of a network problem or the record might have been deleted"
      />
    );
  }
}

const mapStateToProps = ({ accountingState }) => {
  const { paymentState } = accountingState;
  const { paymentToView, paymentList } = paymentState;
  return { paymentToView, paymentList };
};

export default connect(
  mapStateToProps,
  { 
    fetchAllCompanies,
    fetchAllInovicesOneCompany,
    handleRegErrorForm,
    handleRegSuccessForm,
    handleRegWarningForm,
    makePayment
  }
)(acct_new_payment);



/*
<div className="col-md-8">
  <TabsWrapper>
    <div icon="zmdi-shopping-cart-plus text-success" label="PAYMENT">
      <ViewTemplate />
    </div>
    <div icon="zmdi-shopping-cart text-warning" label="INVOICE PAID">
      <CreditedInvoices />
    </div>
    <div icon="zmdi-pizza text-info" label="ACTIVITY LOG">
      <ActivityLog />
    </div> 
    <div icon="zmdi-assignment text-danger" label="NOTES">
      <div className="row">
        <div className="col-md-5">
        </div>
        <div className="col-md-7">
          {/* <DisplayAllNotes notes={payment.notes} />
        </div>
      </div>
    </div>
  </TabsWrapper>
</div>
*/