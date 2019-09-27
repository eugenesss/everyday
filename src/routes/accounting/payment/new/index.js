import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import BgCard from "Components/Everyday/BgCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";

// Credit Note Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Invoice Credited Tab
import CreditedInvoices from "Components/Accounting/CreditNote/CreditedInvoices";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
// import NewNote from "Components/Form/Note/NewNote";
// import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// InvoicePaymentList
import NewPayment from "Components/Form/Payment/NewPayment"
import InvoicesOneCompany from "Components/Accounting/Payment/InvoicesOneCompany";

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
} from "Actions";



const newPayment = {


}


class acct_new_payment extends Component {

  state=({
    InvoiceList : [],

    invoice:{
      customer: '',
      invoiceId: '',
      paidAmount : 0,
      paymentMethod: '',
      date: new Date(),
      paymentRef: '',
      memo : '',
      paymentDifference: 'Keep Open'
    },


    paymentObjects:[],

    redirectAllocation: false
  
  })

  componentDidMount(){
    this.props.fetchAllCompanies()
  }

  _renderAllInvoicesForOneCompany = (e) => {
    this.props.fetchAllInovicesOneCompany(e.id)
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
  
    const { fetchInvoice, fetchInvoiceList} = this.props.paymentList
  
    if(prevProps.paymentList.fetchInvoice != fetchInvoice){
      if(fetchInvoiceList.length > 0){
        return fetchInvoiceList
      }
    }
   
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.setState({InvoiceList: snapshot})
    }
  }

  onSetState = (a, b) =>{
    let invoice = {...this.state.invoice}
    invoice[a] = b

    this.setState({invoice: invoice})
  }


  onCheckList = (rowIndex, value) => {
   
    let Invoice = {...this.state.invoice}

    if(Invoice.paidAmount==0){
      this.props.handleRegErrorForm('Unable to process, please input paid amount')
      return
    }

    let InvoiceList = [...this.state.InvoiceList]

    console.log(InvoiceList)

    if(value){

      if(!InvoiceList[rowIndex].reconcile.disabled){

        InvoiceList[rowIndex].reconcile.reconcile = false
        this.setState({InvoiceList: InvoiceList})
        this.props.handleRegWarningForm(`#${InvoiceList[rowIndex].invoiceId} invoice removed from payment, item updated`)

      } else {
        this.props.handleRegWarningForm(`#${InvoiceList[rowIndex].invoiceId} invoice has been previously marked paid, therefore unable to process your order`)
      }

    } else {

      if(Invoice.paidAmount >= InvoiceList[rowIndex].openBalance){

        InvoiceList[rowIndex].reconcile.reconcile = true
        this.setState({InvoiceList: InvoiceList})
        this.props.handleRegSuccessForm(`#${InvoiceList[rowIndex].invoiceId} invoice marked paid, item updated`)
     
      } else {

        if(InvoiceList[rowIndex].reconcile.disabled){
          this.props.handleRegWarningForm(`#${InvoiceList[rowIndex].invoiceId} invoice has been previously marked paid, therefore unable to process your order`)
        } else {
          this.setState({redirectAllocation:true})
          this.props.handleRegErrorForm('Unable to reconcile due to insufficent fund. Redirected to pay with remaining sum amount')
        }

      }
      
    }
  
    // let data = this.state.paymentData
    // data[rowIndex].reconcile.reconcile = value
    // this.setState({paymentData: data})

  }


  _redirectAllocationRestart = () =>{
    this.setState({redirectAllocation: false})
  }

  render() {

    const {loading, companyList, fetchInvoice} = this.props.paymentList

    let container = null
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
          />
        )
      } else {
        container = (
          <FormInputLayout 
            title="Select a Company"
            desc="To show all confirmed invoices"
          >
          </FormInputLayout>
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
              // disabled={false}
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

                {this.state.InvoiceList.length >0 && 
                  <div className="col text-right">
                    Allocation = total input amount - allocation
                  </div>
                }


     
     
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
    handleRegWarningForm
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