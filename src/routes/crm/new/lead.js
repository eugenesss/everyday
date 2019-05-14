import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

class crm_new_lead extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Lead</title>
          <meta name="description" content="Everyday Leads Creation" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.newLead" />} />
        <RctCollapsibleCard fullBlock>Form</RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default crm_new_lead;
