import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// List Summary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ListSummaryItem from "Components/Everyday/ListSummary/ListSummaryItem";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

//import { getAccount } from "Actions";

//sub components
import AccountsList from "Components/CRM/Account/AccountsList";

class crm_account extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nowShowing: "All Accounts",
      options: ["All Accounts", "My Accounts", "Open Accounts"],
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
          <title>Everyday | Accounts</title>
          <meta name="description" content="Everyday Accounts Management" />
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
          createLink="/crm/new/account"
        />
        {this.state.showSummary && (
          <ListSummary>
            <ListSummaryItem
              heading={"New Lead"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Cold Lead"}
              number={"10"}
              positive={false}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Hot Lead"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Open Leads"}
              number={"10"}
              positive={true}
              percentage="20"
            />
          </ListSummary>
        )}
        <AccountsList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_account);
