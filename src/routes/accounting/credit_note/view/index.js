import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RecordNotFound from "Components/Everyday/Error/RecordNotFound";

// Credit Note Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Invoice Credited Tab
import CreditedInvoices from "Components/Accounting/CreditNote/CreditedInvoices";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
// import NewNote from "Components/Form/Note/NewNote";
// import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
import { getSingleCreditNote, clearSingleCreditNote } from "Actions";

class acct_view_credit_note extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleCreditNote(id);
  }

  componentWillUnmount() {
    this.props.clearSingleCreditNote();
  }

  render() {
    const { loading, creditNote } = this.props.creditNoteToView;
    return loading ? (
      <RctPageLoader />
    ) : creditNote ? (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Credit Note</title>
        </Helmet>
        <PageTitleBar
          title="View Credit Note"
          createLink="/acct/new/credit_note"
        />
        <div className="row">
          <div className="col-md-4">
            <RctCollapsibleCard>
              <AccountingDetails
                type="credit_note"
                accountID={creditNote.creditID}
                status={creditNote.status.name}
                account={creditNote.account && creditNote.account.name}
                sentDate={creditNote.sentOn}
                owner={creditNote.owner.name}
              />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-8">
            <TabsWrapper>
              <div
                icon="zmdi-shopping-cart-plus text-success"
                label="CREDIT NOTE"
              >
                {/* <ViewTemplate /> */}
              </div>
              <div
                icon="zmdi-shopping-cart text-warning"
                label="INVOICE CREDITED"
              >
                <CreditedInvoices />
              </div>
              {/* <div icon="zmdi-pizza text-info" label="ACTIVITY LOG">
                <ActivityLog />
              </div> */}
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div className="col-md-5">
                    <NewNote /* onAddNote="function" */ />
                  </div>
                  <div className="col-md-7">
                    <DisplayAllNotes notes={creditNote.notes} />
                  </div>
                </div>
              </div>
            </TabsWrapper>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <RecordNotFound />
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
  { getSingleCreditNote, clearSingleCreditNote }
)(acct_view_credit_note);
