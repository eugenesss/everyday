import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import BgCard from "Components/Everyday/BgCard";
import LeadForm from "Components/Form/Lead/LeadForm";

// Actions
import { newLead } from "Actions";

class crm_new_lead extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Lead</title>
          <meta name="description" content="Everyday Leads Creation" />
        </Helmet>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <BgCard heading={<IntlMessages id="sidebar.newLead" />}>
              <LeadForm handleSubmit={this.props.newLead} />
            </BgCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { newLead }
)(crm_new_lead);
