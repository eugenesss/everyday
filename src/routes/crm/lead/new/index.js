import React from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// Page Components
import LeadForm from "Components/Form/Lead/LeadForm";

// Actions
import { newLead } from "Actions";

const crm_new_lead = props => (
  <React.Fragment>
    <Helmet>
      <title>Everyday | New Lead</title>
      <meta name="description" content="Everyday Leads Creation" />
    </Helmet>
    <LeadForm title="sidebar.newLead" handleSubmit={props.newLead} />
  </React.Fragment>
);

export default connect(
  null,
  { newLead }
)(crm_new_lead);
