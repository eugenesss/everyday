import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";

// Invoice Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Activity Log Tab
import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
import { getSingleInvoice, clearSingleInvoice } from "Actions";
// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

class acct_view_invoice extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleInvoice(id);
  }

  componentWillUnmount() {
    this.props.clearSingleInvoice();
  }

  render() {
    const { loading, invoice } = this.props.invoiceToView;
    return loading ? (
      <RctPageLoader />
    ) : invoice ? (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Invoice</title>
        </Helmet>
        <PageTitleBar title="View Invoice" createLink="/acct/new/invoice" />
        <div className="row">
          <div className="col-md-4">
            <RctCollapsibleCard>
              <AccountingDetails
                type="invoice"
                accountID={invoice.invoiceID}
                status={invoice.status.name}
                account={invoice.account && invoice.account.name}
                customer={invoice.customer && invoice.customer.fullName}
                sentDate={invoice.sentOn}
                owner={invoice.owner.fullName}
              />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-8">
            <TabsWrapper>
              <div icon="zmdi-shopping-basket text-success" label="INVOICE">
                <ViewTemplate order={invoice} id={invoice.invoiceID} />
              </div>
              <div icon="zmdi-pizza text-warning" label="ACTIVITY LOG">
                <ActivityLog />
              </div>
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div className="col-md-5">
                    <NewNote /* onAddNote="function" */ />
                  </div>
                  <div className="col-md-7">
                    <DisplayAllNotes notes={invoice.notes} />
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
  const { invoiceToView } = invoiceState;
  return { invoiceToView };
};

export default connect(
  mapStateToProps,
  { getSingleInvoice, clearSingleInvoice }
)(acct_view_invoice);
