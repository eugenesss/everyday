import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { Redirect } from "react-router";

//buttons
import MatButton from "@material-ui/core/Button";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import BgCard from "Components/Everyday/BgCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import MakePayment from "Components/Form/Payment/MakePayment";
// Invoice Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
// import NotesLayout from "Components/Everyday/Notes/NotesLayout";
import DialogRoot from "Components/Dialog/DialogRoot";

// import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";


// Actions
import { newInvoice, invoiceEditPage, invoiceNewPage } from "Helpers/url/accounting";
import { getSingleInvoice, clearSingleInvoice, deleteSingleInvoice, InvoiceHandleStateUpdate, InvoiceHandleStateCreateNewVersion, InvoiceHandleStateRevertPreviousVersion, makePayment, makePaymentIncompleteFields  } from "Actions";

// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

import InvoiceCard from "Components/Accounting/Invoice/InvoiceCard";
import ProfileTabs from "Components/Everyday/Layout/View/ProfileTabs";
import OverviewTab from "./tabs/Overview";



class acct_view_invoice extends Component {
  state = {
    makePayment: false
  };

  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleInvoice(id);
  }

  componentWillUnmount() {
    this.props.clearSingleInvoice();
  }

  addNote = invoice => {
    this.props.addNoteQuotation(this.props.match.params.id, invoice);
  };

  newInvoice() {
    this.props.history.push(invoiceNewPage)
  }

  edit(invoice) {
    this.props.history.push(invoiceEditPage(invoice.id));
  }

  Redirect = () => {
    return <Redirect to="/app/acct/invoices" />;
  };

  launchMakePaymentDialog = () => {
    this.setState({ makePayment: !this.state.makePayment });
  };

  makePayment = (item) =>  {

    let paidAmount

    if(item.paidAmount != 0){
      item.paidAmount = parseInt(item.paidAmount)
    } else {
      paidAmount = 0;
    }
    
    if(paidAmount == 0) {
      this.props.makePaymentIncompleteFields('paid amount')
      return
    }
    if(item.paymentRef == ""){
      this.props.makePaymentIncompleteFields('payment reference')
      return
    } 
    if(item.paymentMethod == "" ){
      this.props.makePaymentIncompleteFields('payment method')
      return
    }

    this.props.makePayment(item);
    this.launchMakePaymentDialog();
  };



  render() {
    const { loading, invoice } = this.props.invoiceToView;

    let buttonCollection = null;
    let moreButtons = null;

    if (invoice) {
      switch (invoice.state) {
        case "Draft":

        buttonCollection = (
            <PageTitleBar
              title="View Invoice"
              actionGroup={{
                add: { onClick: () => this.newInvoice() },
                mid: { label: "Edit", onClick: () => this.edit(invoice) },
                more: [
                  {
                    label: "Make Invoice Current",
                    onClick: () => this.props.InvoiceHandleStateUpdate(invoice.id, "Current")
                  },
   
                  {
                    label: "Delete Quotation",
                    onClick: () => this.props.deleteSingleInvoice(this.props.match.params.id)
                  },
                ]
              }}
            />
          )
         
          break;

        case "Current":

          buttonCollection = (
            <PageTitleBar
              title="View Invoice"
              actionGroup={{
                add: { onClick: () => this.newInvoice() },
                mid: { label: "Edit", onClick: () => this.edit(invoice) },
                more: [
                  {
                    label: "New Version Invoice",
                    onClick: () => {
                      this.props.InvoiceHandleStateCreateNewVersion(
                        invoice.id,
                        "Invoice"
                      )
                    }
                  },
                  {
                    label: "Confirm Invoice",
                    onClick: () => this.props.InvoiceHandleStateUpdate(invoice.id, "Confirmed")
                  },
    
                ]
              }}
            />
          )
        
          break;

        case "Confirmed":


            buttonCollection = (
              <PageTitleBar
                title="View Invoice"
                actionGroup={{
                  add: { onClick: () => this.newInvoice() },
                  mid: { label: "Pay", onClick:() =>  this.launchMakePaymentDialog()},
                }}
              />
            )

    
          break;

        case "Paid":

            buttonCollection = (
              <PageTitleBar
                title="View Invoice"
                actionGroup={{
                  add: { onClick: () => this.newInvoice() },
                }}
              />
            )

          break;

        default:
          break;
      }
    }

    if (this.props.invoiceList.deleted) {
      return <Redirect to="/app/acct/invoices" />;
    }

    return loading ? (
      <RctPageLoader />
    ) : invoice ? (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Invoice</title>
        </Helmet>
        
        {buttonCollection}

        <div className="row">
          
          <div className="col-md-3">
            <InvoiceCard
              quotation={invoice}
            />
          </div>

          <div className="col-md-9">
          

            <ProfileTabs loading={false}>
                  <div label="Overview">
                    <OverviewTab
                      quotation={invoice}
                    />
                  </div>

                  <div label="Deals">
                    {/* <DealsTab deals={customer.deals} /> */}
                  </div>

                  <div label="Events">
                    {/* <EventsTab
                      eventableType="Customer"
                      eventableId={customer.id}
                      events={customer.events}
                    /> */}
                  </div>

                  <div label="Details">
                    {/* <DetailsTab cust={customer} /> */}
                  </div>
            </ProfileTabs>
            
          </div>
        
        </div>

        {this.state.makePayment && (
          <DialogRoot
            title="Pay Invoice"
            size="sm"
            show={this.state.makePayment}
            handleHide={this.launchMakePaymentDialog}
            dialogActionLabel="Transfer"
            dialogAction={this.onSubmit}
          >
            <div className="row">
              <div className="col">
                <MakePayment
                  invoice={invoice}
                  handleHide={this.launchMakePaymentDialog}
                  makePayment={this.makePayment}
                />
              </div>
            </div>
          </DialogRoot>
        )}
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
  const { invoiceState } = accountingState;
  const { invoiceToView, invoiceList } = invoiceState;
  return { invoiceToView, invoiceList };
};

export default connect(
  mapStateToProps,
  { getSingleInvoice, clearSingleInvoice, deleteSingleInvoice, InvoiceHandleStateUpdate, InvoiceHandleStateCreateNewVersion, InvoiceHandleStateRevertPreviousVersion, makePayment, makePaymentIncompleteFields }
)(acct_view_invoice);

/// current invoice v1  - create new version - takes in same invoice but different version (Current)
