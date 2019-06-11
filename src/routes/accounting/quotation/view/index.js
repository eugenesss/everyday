import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";

//buttons
import MatButton from "@material-ui/core/Button";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";

// Quotation Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
import { getSingleQuotation, clearSingleQuotation } from "Actions";
// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

class acct_view_quotation extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleQuotation(id);
  }

  componentWillUnmount() {
    this.props.clearSingleQuotation();
  }

  render() {
    const { loading, quotation } = this.props.quotationToView;
    return loading ? (
      <RctPageLoader />
    ) : quotation ? (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Quotation</title>
        </Helmet>
        <PageTitleBar
          title="View Quotation"
          extraButtons={[
            {
              color: "primary",
              label: "Convert to invoice"
            },
            {
              color: "primary",
              label: "Send by email"
            },
            {
              color: "primary",
              label: "To PDF & Print"
            }
          ]}
          createLink="/acct/new/quotation"
          moreButton={
            <MoreButton>
              {{
                label: "Edit"
              }}
              {{ label: "Delete" }}
              {{
                label: "Clone"
              }}
              {{
                label: "New Version"
              }}
            </MoreButton>
          }
        />
        <div className="row">
          <div className="col-md-3">
            <RctCollapsibleCard>
              <AccountingDetails
                type="quotation"
                accountID={quotation.quoteID}
                status={quotation.status.name}
                account={quotation.account && quotation.account.name}
                customer={quotation.customer && quotation.customer.name}
                sentDate={quotation.sentOn}
                owner={quotation.owner.name}
              />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-9">
            <div className="rct-block p-10 mb-10">
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
              >
                Convert to invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
              >
                Send by email
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
              >
                To PDF &amp; Print
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
              >
                Clone
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
              >
                New version
              </MatButton>
            </div>
            <TabsWrapper>
              <div icon="zmdi-shopping-basket text-success" label="QUOTATION">
                <ViewTemplate order={quotation} id={quotation.quoteID} />
              </div>
              {/*  <div icon="zmdi-pizza text-warning" label="ACTIVITY LOG">
                <ActivityLog />
              </div> */}
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div className="col-md-5">
                    <NewNote /* onAddNote="function" */ />
                  </div>
                  <div className="col-md-7">
                    <DisplayAllNotes notes={quotation.notes} />
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
  const { quotationState } = accountingState;
  const { quotationToView } = quotationState;
  return { quotationToView };
};

export default connect(
  mapStateToProps,
  { getSingleQuotation, clearSingleQuotation }
)(acct_view_quotation);
