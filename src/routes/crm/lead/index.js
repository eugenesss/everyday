import React, { Component } from "react";
import { connect } from "react-redux";

//Sub Components
import LeadsList from "Components/CRM/Lead/LeadsList";

//Page Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

//import { getLead, getMyLead } from "Actions";

class crm_lead extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      nowShowing: "All Leads",
      options: [
        "All Leads",
        "My Leads",
        "Open Leads",
        "Hot Leads",
        "Warm Leads",
        "Cold Leads"
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

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Leads</title>
          <meta name="description" content="Everyday Leads Generation" />
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
          createLink="/crm/new/lead"
        />
        <LeadsList title={this.state.nowShowing} />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_lead);
