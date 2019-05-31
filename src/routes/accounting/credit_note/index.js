import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// List
import CreditNoteList from "Components/Accounting/CreditNote/CreditNoteList";

// Actions
import {
  changeCreditNoteView,
  toggleCreditNoteDropDown,
  getAllCreditNote
} from "Actions";

class acct_credit_note extends Component {
  componentDidMount() {
    this.props.getAllCreditNote();
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
            </div>
          }
          createLink="/acct/new/credit_note"
        />
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
    getAllCreditNote
  }
)(acct_credit_note);
