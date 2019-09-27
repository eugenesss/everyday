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
import RctPageLoader from "Components/RctPageLoader";
import BgCard from "Components/Everyday/BgCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import MakePayment from "Components/Form/Payment/Payment";
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
          // console.log('Draft Mode')
          buttonCollection = (
            <div className="rct-block p-10 mb-10">
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() =>
                  this.props.InvoiceHandleStateUpdate(invoice.id, "Current")
                }
              >
                Make Current Invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => this.edit(invoice)}
              >
                Edit Invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  this.props.deleteSingleInvoice(this.props.match.params.id);
                }}
              >
                Delete Invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() =>
                  this.props.InvoiceHandleStateUpdate(invoice.id, "Confirmed")
                }
              >
                Confirm Invoice
              </MatButton>
              {/* <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> console.log('To Pdf Print')}
                >
                  To PDF &amp; Print
                </MatButton> */}
            </div>
          );

          break;

        case "Current":
          buttonCollection = (
            <div className="rct-block p-10 mb-10">
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => this.edit(invoice)}
              >
                Edit Invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  this.props.InvoiceHandleStateCreateNewVersion(
                    invoice.id,
                    "Invoice"
                  );
                }}
              >
                New Version
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() =>
                  this.props.InvoiceHandleStateUpdate(invoice.id, "Confirmed")
                }
              >
                Confirm Invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  this.props.deleteSingleInvoice(this.props.match.params.id);
                }}
              >
                Delete Quotation
              </MatButton>
            </div>
          );
          break;

        case "Confirmed":
          buttonCollection = (
            <div className="rct-block p-10 mb-10">
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={this.launchMakePaymentDialog}
              >
                Pay Invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => console.log("Email Client")}
              >
                Email Client
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => console.log("To Pdf Print")}
              >
                Save to PDF &amp; Print
              </MatButton>
            </div>
          );

          break;

        case "Paid":
          console.log("Paid Mode");
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
        <PageTitleBar
          title="View Invoice"
          createLink={invoiceNewPage}
          moreButton={moreButtons}
        />

        <div className="row">
          <div className="col-md-3">
            <BgCard>
              <AccountingDetails
                type="invoice"
                accountID={invoice.quoteID}
                status={invoice.state}
                account={invoice.account && invoice.account.name}
                customer={invoice.customer && invoice.customer.name}
                sent_date={invoice.sent_date}
                owner={invoice.owner.name}
                created_date={invoice.createdAt}
                price={invoice.totalAmt}
                version={invoice.version}
                currency={invoice.currency.name}
              />
            </BgCard>
          </div>
          <div className="col-md-9">
            {buttonCollection}
            <TabsWrapper>
              <div icon="zmdi-shopping-basket text-success" label="INVOICE">
                <ViewTemplate order={invoice} id={invoice.invoiceID} />
              </div>
              {/* <div icon="zmdi-pizza text-warning" label="ACTIVITY LOG">
                <ActivityLog />
              </div> */}
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div>
                    {/* <NotesLayout
                      allNotes={invoice.notes}
                      handleAddNote={this.addNote}
                    /> */}
                  </div>
                </div>
              </div>
            </TabsWrapper>
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
