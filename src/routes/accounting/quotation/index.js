import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// ListSummary
import ListSummary from "Components/CRM/ListSummary/ListSummary";
import ListSummaryItem from "Components/CRM/ListSummary/ListSummaryItem";
import ShowListSummaryButton from "Components/CRM/ListSummary/ShowListSummaryButton";

// List
import QuotationList from "Components/Accounting/Quotation/QuotationList";

class acct_quotation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nowShowing: "All Quotations",
      options: ["All Quotations", "Open Quotations", "Closed Quotations"],
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
          <title>Everyday | Quotations</title>
          <meta name="description" content="Everyday Quotation Management" />
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
          createLink="/acct/new/quotation"
        />
        {this.state.showSummary && (
          <ListSummary>
            <ListSummaryItem
              heading={"New Quotations"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Open Quotations"}
              number={"10"}
              positive={false}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Closed Quotations"}
              number={"10"}
              positive={true}
              percentage="20"
            />
          </ListSummary>
        )}
        <QuotationList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default acct_quotation;
