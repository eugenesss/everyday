import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import LeadForm from "Components/Form/Lead/LeadForm";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

class crm_new_lead extends Component {
  render() {
    const { loading } = this.props.leadForm;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Lead</title>
          <meta name="description" content="Everyday Leads Creation" />
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.newLead" />}>
          {loading && <RctSectionLoader />}
          <div className="row">
            <div className="col-md-11">
              <LeadForm />
            </div>
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { leadState } = crmState;
  const { leadForm } = leadState;
  return { leadForm };
};

export default connect(mapStateToProps)(crm_new_lead);
