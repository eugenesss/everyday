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
import CreditedInvoices from "Components/Accounting/CreditNote/CreditedInvoices";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
// import NewNote from "Components/Form/Note/NewNote";
// import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// InvoicePaymentList
import ViewInvoicePaymentList from "Components/Accounting/Payment/ViewInvoicePaymentList";
import ViewPayment from "Components/Form/Payment/ViewPayment"

import FormWrapper from "Components/Form/Components/Layout/FormWrapper";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";



// Actions
import { getSingleCompanyPayment, clearSinglePayment } from "Actions";

class acct_view_payment extends Component {
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleCompanyPayment(id);
  }

  componentWillUnmount() {
    // this.props.clearSinglePayment();
  }

  _submitPayment() {
    console.log('submit payment')
  }

  state=({
    payment: {},
    paymentData : []
  })

  preparePayment(item) {
    this.setState({payment: item})
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {

    if (prevState.paymentData.length != this.props.paymentToView.payment.length) {
      return this.props.paymentToView.payment
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.setState({paymentData: snapshot})
    }
  }



  onCheckList = (rowIndex, value) => {
    let data = this.state.paymentData
    data[rowIndex].reconcile.reconcile = value
    this.setState({paymentData: data})
  }



  render() {
    const { loading, company, payment } = this.props.paymentToView;

    console.log('payment')
    console.log(payment)

    return loading ? (
      <RctPageLoader />
    ) : company ? (

      <React.Fragment>
    
      <Helmet>
          <title>Everyday | View Payment</title>
      </Helmet>

      <FormWrapper
        onSave={this._submitPayment}
        // disabled={false}
        title={`Payment for ${company.customerName}`}
      >
      
        {/* {loading && <RctSectionLoader />} */}

        <form autoComplete="off">
          <FormInputLayout
            title="Key Information"
            desc="Payment information"
          >
              <ViewPayment
                invoice={company}
                preparePayment={this.preparePayment}
              />
              
          </FormInputLayout>

          <div className="row border-top py-30 px-30 justify-content-md-center">
            <div className="col-11">
              <ViewInvoicePaymentList
                  // title={nowShowing}
                  // action={action}
                  tableData={this.state.paymentData}
                  loading={loading}
                  onCheckList={this.onCheckList}
              />
            </div>
          </div>

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
  const { paymentToView } = paymentState;
  return { paymentToView };
};

export default connect(
  mapStateToProps,
  { getSingleCompanyPayment, clearSinglePayment }
)(acct_view_payment);



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