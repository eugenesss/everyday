import React, { Component } from "react";
import { connect } from "react-redux";
import { show } from "redux-modal";

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
  getAllCreditNote
} from "Actions";

import ViewCreditNoteDialog from "Components/Accounting/CreditNote/ViewCreditNoteDialog";

class acct_credit_note extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
  }
  componentDidMount() {
    this.props.getAllCreditNote();
  }
  handleOpen = creditNoteID => () => {
    this.props.show("view_credit_note", {
      viewCreditNote: `This is a ${creditNoteID} modal`
    });
  };

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      showSummary,
      action,
      tableData,
      loading
    } = this.props.creditNoteState.creditNoteList;

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
        {showSummary && (
          <ListSummary>
            <ListSummaryItem
              heading={"New Credit Notes"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Open Credit Notes"}
              number={"10"}
              positive={false}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Closed Credit Notes"}
              number={"10"}
              positive={true}
              percentage="20"
            />
          </ListSummary>
        )}
        <CreditNoteList
          title={nowShowing}
          action={action}
          tableData={tableData}
          loading={loading}
          handleOpen={this.handleOpen}
        />
        <ViewCreditNoteDialog />
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
    show,
    changeCreditNoteView,
    toggleCreditNoteDropDown,
    toggleCreditNoteSummary,
    getAllCreditNote
  }
)(acct_credit_note);
