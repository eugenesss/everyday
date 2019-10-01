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

// Invoice Credited Tab
// import CreditedInvoices from "Components/Accounting/CreditNote/CreditedInvoices";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
// import NewNote from "Components/Form/Note/NewNote";
// import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// InvoicePaymentList
// import ViewInvoicePaymentList from "Components/Accounting/CreditNote/ViewInvoicePaymentList";
import ViewCredit from "Components/Form/Credit/ViewCredit"
import FormWrapper from "Components/Form/Components/Layout/FormWrapper";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

import BalancePayment from "Components/Accounting/CreditNote/BalancePayment";



// Actions
import { getSingleCreditNote, convertSingleCreditNote } from "Actions";

class acct_view_payment extends Component {

  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleCreditNote(id);
  }

  componentWillUnmount() {
    // this.props.clearSinglePayment();
  }

  // _submitPayment = () => {
  //   const r = window.confirm(`Click OK to confirm the credit note`); if(r == true){
  //     console.log('submit payment')
  //     this.props.convertSingleCreditNote()
  //   }
  // }

  state=({
    payment: {},
    paymentData : []
  })

  preparePayment = (item) => {
    // this.setState({payment: item})
    const r = window.confirm(`Click OK to confirm the credit note`); if(r == true){
      this.props.convertSingleCreditNote(item)
    }

  }

  onCheckList = (rowIndex, value) => {
    let data = this.state.paymentData
    data[rowIndex].reconcile.reconcile = value
    this.setState({paymentData: data})
  }



  render() {

    const { loading, creditNote, creditReconcile } = this.props.creditNoteToView;

    return loading ? (
      <RctPageLoader />
    ) : creditNote ? (

      <React.Fragment>
    
        <Helmet>
            <title>Everyday | View Payment</title>
        </Helmet>


        <FormWrapper
          // onSave={this._submitPayment}
          disabled={false}
          title={`Payment for ${creditNote.customerName}`}
        >
        
          {/* {loading && <RctSectionLoader />} */}

          <form autoComplete="off">

            <FormInputLayout
              title="Key Information"
              desc="Payment information"
            >

              <ViewCredit
                state={creditNote}
                preparePayment={this.preparePayment}
              />
                
            </FormInputLayout>

            {creditNote.paidOff !==  "" &&
              <BalancePayment
                title={'Credit Balances'}
                tableData={creditReconcile}
              />
            }
      
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
  const { creditNoteState } = accountingState;
  const { creditNoteToView } = creditNoteState;
  return { creditNoteToView };
};

export default connect(
  mapStateToProps,
  { getSingleCreditNote, convertSingleCreditNote }
)(acct_view_payment);

