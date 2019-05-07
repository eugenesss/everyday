import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

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
      options: ["All Accounts", "My Accounts", "Open Accounts"]
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
          <title>Everyday | Accounts</title>
          <meta name="description" content="Everyday Accounts Management" />
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
          createLink="/crm/new/account"
        />
        <AccountsList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_account);
