import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// ListSummary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ListSummaryItem from "Components/Everyday/ListSummary/ListSummaryItem";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

// List
import CreditNoteList from "Components/Accounting/CreditNote/CreditNoteList";

// Actions
import {
  changeCreditNoteView,
  toggleCreditNoteDropDown,
  toggleCreditNoteSummary,
  getAllCreditNote,
  getCreditNoteSummary
} from "Actions";

class acct_credit_note extends Component {
  componentDidMount() {
    this.props.getAllCreditNote();
    this.props.getCreditNoteSummary();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.creditNoteState.creditNoteList;
    const {
      showSummary,
      summary
    } = this.props.creditNoteState.creditNoteSummary;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Credit Notes</title>
          <meta name="description" content="Everyday Invoice Management" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.toggleCreditNoteDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeCreditNoteView}
              />
              <ShowListSummaryButton
                action={this.props.toggleCreditNoteSummary}
              />
            </div>
          }
          createLink="/acct/new/credit_note"
        />
        {showSummary && <ListSummary summary={summary} />}
        <CreditNoteList
          title={nowShowing}
          action={action}
          tableData={tableData}
          loading={loading}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ accountingState }) => {
  const { creditNoteState } = accountingState;
  return { creditNoteState };
};

export default connect(
  mapStateToProps,
  {
    changeCreditNoteView,
    toggleCreditNoteDropDown,
    toggleCreditNoteSummary,
    getAllCreditNote,
    getCreditNoteSummary
  }
)(acct_credit_note);
