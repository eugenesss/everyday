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
import SelectInvoicePaymentList from "Components/Accounting/Payment/SelectInvoicePaymentList";
import NewPayment from "Components/Form/Payment/NewPayment"

import FormWrapper from "Components/Form/Components/Layout/FormWrapper";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

// Actions
import { fetchAllCompanies} from "Actions";

class acct_new_payment extends Component {
 
  componentDidMount(){
    this.props.fetchAllCompanies()
  }


  render() {

    const {loading, companyList} = this.props.paymentList

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
                    />

                </FormInputLayout>


                <div className="row border-top py-30 px-30 justify-content-md-center">
                  <div className="col-11">
                    {/* <SelectInvoicePaymentList
                        // title={nowShowing}
                        // action={action}
                        tableData={this.state.paymentData}
                        loading={loading}
                        onCheckList={this.onCheckList}
                    /> */}
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
  const { paymentToView, paymentList } = paymentState;
  return { paymentToView, paymentList };
};

export default connect(
  mapStateToProps,
  { fetchAllCompanies}
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