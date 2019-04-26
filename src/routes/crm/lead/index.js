import React, { Component } from "react";
import { connect } from "react-redux";

//Sub Components
/* import MyLeadsList from "Components/CRM/Leads/MyLeadsList";
 */
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
      <div className="data-table-wrapper">
        <Helmet>
          <title>CRM | Leads</title>
          <meta name="description" content="OCRM Leads Generation" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.leads" />}
          match={this.props.match}
        />
        {/* <MyLeadsList />
         */}
        <LeadsList />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(crm_lead);
