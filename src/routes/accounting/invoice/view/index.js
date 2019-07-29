import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { Redirect } from 'react-router'

//buttons
import MatButton from "@material-ui/core/Button";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";

// Invoice Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NotesLayout from "Components/Everyday/Notes/NotesLayout";

// import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
import { newInvoice, editInvoice } from "Helpers/url/accounting";

import { getSingleInvoice, clearSingleInvoice, deleteSingleInvoice, InvoiceHandleStateUpdate, InvoiceHandleStateCreateNewVersion, InvoiceHandleStateRevertPreviousVersion  } from "Actions";


// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

class acct_view_invoice extends Component {
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleInvoice(id);
  }

  componentWillUnmount() {
    this.props.clearSingleInvoice();
  }

  addNote = (invoice) => {
    this.props.addNoteQuotation(this.props.match.params.id, invoice);
  }

  edit(invoice) {
    this.props.history.push(editInvoice(invoice.id));
  }

  Redirect=()=> {
    const {deleted} = this.props.invoiceList
    if(deleted){
      return(<Redirect to="/app/acct/invoices"/>)
    }
  }


  render() {
    const { loading, invoice } = this.props.invoiceToView;

    let buttonCollection = null
    let moreButtons = null
    
    console.log(invoice)

    if(invoice){
      
      switch(invoice.state) {
        case "Draft":
            // console.log('Draft Mode')
            buttonCollection = (
              <div className="rct-block p-10 mb-10">
               
                <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> this.props.InvoiceHandleStateUpdate(invoice.id, 'Current')}
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
                  onClick={()=> {
                    this.props.deleteSingleInvoice(this.props.match.params.id)
                  }}
                  >
                  Delete Invoice
                </MatButton>
                <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> this.props.InvoiceHandleStateUpdate(invoice.id, 'Confirmed')}
                >
                  Confirm Invoice
                </MatButton>
                <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> console.log('To Pdf Print')}
                >
                  To PDF &amp; Print
                </MatButton>
              </div>
            )

            break

        case "Current":
              buttonCollection = (
                <div className="rct-block p-10 mb-10">
                  <MatButton
                    variant="contained"
                    className="btn-primary mr-10 text-white"
                    onClick={()=> console.log('To Pdf Print')}
                  >
                    To PDF &amp; Print
                  </MatButton>
                  <MatButton
                    variant="contained"
                    className="btn-primary mr-10 text-white"
                    onClick={()=> {
                      this.props.InvoiceHandleStateCreateNewVersion(invoice.id, 'Invoice')
                  }}
                  >
                    New Version
                  </MatButton>
                  <MatButton
                    variant="contained"
                    className="btn-primary mr-10 text-white"
                    onClick={()=> {
                      this.props.deleteSingleInvoice(this.props.match.params.id)
                    }}
                    >
                      Delete Quotation
                  </MatButton>
                </div>
              )
            break
              
        case "Confirmed":
            buttonCollection = (
              <div className="rct-block p-10 mb-10">

                <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> console.log('Invoice Paid')}
                >
                  Invoice Paid
                </MatButton>
                <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> console.log('Email Client')}
                >
                  Email Client
                </MatButton>
                <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> console.log('To Pdf Print')}
                >
                  Save to PDF &amp; Print
                </MatButton>
              </div>
            )

            break

        case "Paid":
            console.log('Paid Mode')
            break

        default:break
      }
    }
 

    return loading ? (
      <RctPageLoader />
    ) : invoice ? (
      <React.Fragment>
        {this.Redirect()}
        <Helmet>
          <title>Everyday | View Invoice</title>
        </Helmet>
        <PageTitleBar
          title="View Invoice"
          // extraButtons={[
          //   {
          //     color: "primary",
          //     label: "Convert to invoice"
          //   },
          //   {
          //     color: "primary",
          //     label: "Send by email"
          //   },
          //   {
          //     color: "primary",
          //     label: "To PDF & Print"
          //   }
          // ]}
          createLink={newInvoice}
          moreButton={moreButtons}
        />
        <div className="row">
          <div className="col-md-3">
            <RctCollapsibleCard>
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
            </RctCollapsibleCard>
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
                    <NotesLayout
                      allNotes={invoice.notes}
                      handleAddNote={this.addNote}
                    />
                  </div>
                </div>
              </div>
            </TabsWrapper>
          </div>
        </div>
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
  const { invoiceToView , invoiceList} = invoiceState;
  return { invoiceToView , invoiceList};
};

export default connect(
  mapStateToProps,
  { getSingleInvoice, clearSingleInvoice, deleteSingleInvoice, InvoiceHandleStateUpdate, InvoiceHandleStateCreateNewVersion, InvoiceHandleStateRevertPreviousVersion }
)(acct_view_invoice);



/// current invoice v1  - create new version - takes in same invoice but different version (Current)