import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";
import { Route, Redirect } from "react-router";
//buttons
import MatButton from "@material-ui/core/Button";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import BgCard from "Components/Everyday/BgCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";

// Quotation Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

import {
  quoteNewPage,
  quoteEditPage,
  singleQuote
} from "Helpers/url/accounting";

import NotesLayout from "Components/Everyday/Notes/NotesLayout";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
// import NewNote from "Components/Form/Note/NewNote";
// import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
import {
  getSingleQuotation,
  clearSingleQuotation,
  deleteSingleQuote,
  addNoteQuotation,
  HandleStateUpdate,
  HandleStateCreateNewVersion,
  HandleStateRevertPreviousVersion,
  HandleConvertInvoiceQuotation
} from "Actions";
// addNoteToQuotation(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Quotation, Edit Quotation, Transfer Quotation

class acct_view_quotation extends Component {
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleQuotation(id);
  }

  componentWillUnmount() {
    this.props.clearSingleQuotation();
  }

  edit(quotation) {
    this.props.history.push(quoteEditPage(quotation.id));
  }

  addNote = quotation => {
    this.props.addNoteQuotation(this.props.match.params.id, quotation);
  };

  componentDidUpdate() {
    if (this.props.quotationToView.quotation) {
      var id = this.props.match.params.id;
      var newId = this.props.quotationToView.quotation.id;
      if (id != newId) {
        this.props.history.push(singleQuote(newId));
      }
    }
  }

  render() {
    const { loading, quotation } = this.props.quotationToView;

    let buttonCollection = null;
    let moreButtons = null;
    
    if (quotation) {
      switch (quotation.state) {
        case "Draft":
          // console.log('Draft Mode')
          buttonCollection = (
            <div className="rct-block p-10 mb-10">
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() =>
                  this.props.HandleStateUpdate(quotation.id, "Open")
                }
              >
                Open Quotation
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => this.edit(quotation)}
              >
                Edit Quotation
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  this.props.deleteSingleQuote(this.props.match.params.id);
                }}
              >
                Delete Quotation
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  this.props.HandleConvertInvoiceQuotation(quotation.id);
                }}
              >
                Convert to invoice
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

        case "Open":
          buttonCollection = (
            <div className="rct-block p-10 mb-10">
              {/* <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> this.props.HandleStateUpdate(quotation.id, 'Draft')}
                >
                  Convert to draft
                </MatButton> */}
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => this.edit(quotation)}
              >
                Edit Quotation
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  if (quotation.version == 1) {
                    this.props.deleteSingleQuote(this.props.match.params.id);
                  } else {
                    this.props.HandleStateRevertPreviousVersion(
                      quotation.id,
                      "Quotation"
                    );
                  }
                }}
              >
                Delete Quotation
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  this.props.HandleStateCreateNewVersion(
                    quotation.id,
                    "Quotation"
                  );
                }}
              >
                Create New Version
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => {
                  this.props.HandleConvertInvoiceQuotation(quotation.id);
                }}
              >
                Convert to invoice
              </MatButton>
              <MatButton
                variant="contained"
                className="btn-primary mr-10 text-white"
                onClick={() => console.log("Email Client")}
              >
                Email Client
              </MatButton>
              {/* <MatButton
                  variant="contained"
                  className="btn-primary mr-10 text-white"
                  onClick={()=> console.log('To Pdf Print')}
                >
                  Save to PDF &amp; Print
                </MatButton> */}
            </div>
          );

          // moreButtons =
          //   <MoreButton >
          //   {{
          //     label: "Edit", handleOnClick: () => this.edit(quotation)
          //   }}
          //   {{
          //     label: "Delete", handleOnClick: (() => {
          //       this.props.deleteSingleQuote(this.props.match.params.id)
          //     })
          //   }}
          //   {{
          //     label: "Clone", handleOnClick: ()=> console.log('Clone item')
          //   }}
          //   {{
          //     label: "New Version",handleOnClick: ()=> console.log('Create new version of the quotation')
          //   }}
          //   </MoreButton>
          break;

        case "Closed":
          // buttonCollection = (
          //   <div className="rct-block p-10 mb-10">
          //     <MatButton
          //       variant="contained"
          //       className="btn-primary mr-10 text-white"
          //       onClick={()=> this.props.HandleStateUpdate(quotation.id, 'Open')}
          //     >

          //     </MatButton>
          //   </div>
          // )
          break;

        case "Converted":
          console.log("Converted Mode");
          break;

        default:
          break;
      }
    }

    if (this.props.quotationList.deleted) {
      return <Redirect to="/app/acct/quotations" />;
    }

    return loading ? (
      <RctPageLoader />
    ) : quotation ? (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Quotation</title>
        </Helmet>
        <PageTitleBar
          title="View Quotation"
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
          createLink={quoteNewPage}
          moreButton={moreButtons}
        />
        <div className="row">
          <div className="col-md-3">
            <BgCard>
              <AccountingDetails
                type="quotation"
                accountID={quotation.quoteID}
                status={quotation.state}
                account={quotation.account && quotation.account.name}
                customer={quotation.customer && quotation.customer.name}
                sent_date={quotation.sent_date}
                created_date={quotation.createdAt}
                owner={quotation.owner.name}
                price={quotation.totalAmt}
                version={quotation.version}
                currency={quotation.currency.name}
              />
            </BgCard>
          </div>
          <div className="col-md-9">
            {buttonCollection}
            <TabsWrapper>
              <div icon="zmdi-shopping-basket text-success" label="QUOTATION">
                <ViewTemplate
                  order={quotation}
                  id={quotation.quoteID}
                  disabled={true}
                />
              </div>
              {/*  <div icon="zmdi-pizza text-warning" label="ACTIVITY LOG">
                <ActivityLog />
              </div> */}
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div>
                    <NotesLayout
                      allNotes={quotation.notes}
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
  const { quotationState } = accountingState;
  const { quotationToView, quotationList } = quotationState;
  return { quotationToView, quotationList };
};

// deleted

export default connect(
  mapStateToProps,
  {
    getSingleQuotation,
    clearSingleQuotation,
    deleteSingleQuote,
    addNoteQuotation,
    HandleStateUpdate,
    HandleStateCreateNewVersion,
    HandleStateRevertPreviousVersion,
    HandleConvertInvoiceQuotation
  }
)(acct_view_quotation);
