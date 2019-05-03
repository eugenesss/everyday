import React, { Component } from "react";
import { connect } from "react-redux";

//Sub Components
import LeadsList from "Components/CRM/Lead/LeadsList";

//Page Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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
  /*   reloadTable() {
    this.props.getLead();
    this.props.getMyLead();
  } */

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Leads</title>
          <meta name="description" content="Everyday Leads Generation" />
        </Helmet>
        <PageTitleBar
          title={
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle
                //color="default"
                caret
              >
                {this.state.nowShowing}
              </DropdownToggle>
              <DropdownMenu>
                {this.state.options.map((opt, key) => {
                  return (
                    <DropdownItem
                      onClick={() => this.changeValue(opt)}
                      key={key}
                    >
                      {opt}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          }
          match={this.props.match}
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
