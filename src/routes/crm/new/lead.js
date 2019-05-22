import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import LeadForm from "Components/Form/Lead/LeadForm";

class crm_new_lead extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Lead</title>
          <meta name="description" content="Everyday Leads Creation" />
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.newLead" />}>
          <div className="row">
            <div className="col-md-10">
              <LeadForm />
            </div>
            <div className="col-md-1" />
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default crm_new_lead;
