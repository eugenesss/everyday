import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import CustomersList from "Components/CRM/Customer/CustomersList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

//import { getAllCustomer } from "Actions";

class crm_customer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nowShowing: "All Customers",
      options: ["All Customers", "My Customers", "Open Customers"]
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

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Customers</title>
          <meta name="description" content="Everyday Customers Retention" />
        </Helmet>
        <PageTitleBar
          title={
            <ListViewSelector
              dropdownOpen={this.state.dropdownOpen}
              toggle={this.toggle.bind(this)}
              options={this.state.options}
              nowShowing={this.state.nowShowing}
              onChangeValue={this.changeValue.bind(this)}
            />
          }
          createLink="/crm/new/customer"
        />
        <CustomersList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_customer);
