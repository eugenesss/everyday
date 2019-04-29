import React, { Component } from "react";
import { connect } from "react-redux";

//Sub Components
import MyLeadsList from "Components/CRM/Lead/MyLeadsList";
import LeadsList from "Components/CRM/Lead/LeadsList";

//Page Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

//import { getLead, getMyLead } from "Actions";

class crm_lead extends Component {
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
          title={<IntlMessages id="sidebar.leads" />}
          match={this.props.match}
        />
        <MyLeadsList />
        <LeadsList />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_lead);
