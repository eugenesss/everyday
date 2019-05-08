import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import CustomersList from "Components/CRM/Customer/CustomersList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListSummary from "Components/CRM/ListSummary/ListSummary";
import ListSummaryItem from "Components/CRM/ListSummary/ListSummaryItem";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";
import ShowListSummaryButton from "Components/CRM/ListSummary/ShowListSummaryButton";

//import { getAllCustomer } from "Actions";

class crm_customer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nowShowing: "All Customers",
      options: ["All Customers", "My Customers", "Open Customers"],
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
          <title>Everyday | Customers</title>
          <meta name="description" content="Everyday Customers Retention" />
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
          createLink="/crm/new/customer"
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
        <CustomersList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_customer);
