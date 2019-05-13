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

class acct_credit_note extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nowShowing: "All Credit Notes",
      options: ["All Credit Notes", "Open Credit Notes", "Closed Credit Notes"],
      showSummary: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  changeValue(newValue) {
    this.setState({ ...this.state, nowShowing: newValue });
  }
  showSummary() {
    this.setState(prevState => ({
      showSummary: !prevState.showSummary
    }));
  }

  render() {
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
                dropdownOpen={this.state.dropdownOpen}
                toggle={this.toggle.bind(this)}
                options={this.state.options}
                nowShowing={this.state.nowShowing}
                onChangeValue={this.changeValue.bind(this)}
              />
              <ShowListSummaryButton action={this.showSummary.bind(this)} />
            </div>
          }
          createLink="/acct/new/credit_note"
        />
        {this.state.showSummary && (
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
        <CreditNoteList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default acct_credit_note;
