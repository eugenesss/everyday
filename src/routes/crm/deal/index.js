import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import DealsList from "Components/CRM/Deal/DealsList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// import { getAllDeal, getMyDeal } from "Actions";

class crm_deal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nowShowing: "All Deals",
      options: [
        "All Deals",
        "My Deals",
        "Open Deals",
        "Closed Deals",
        "Won Deals"
      ]
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

  /*   reloadTable() {
    this.props.getAllDeal();
  } */

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Deals</title>
          <meta name="description" content="Everyday Deals Management" />
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
          createLink="/crm/new/deal"
        />
        <DealsList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_deal);
