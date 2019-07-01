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

// Actions
import { submitEditLead } from "Actions";

class crm_edit_lead extends Component {
  render() {
    const { loading } = this.props.leadForm;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Edit Lead</title>
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.editLead" />}>
          {loading && <RctSectionLoader />}
          <div className="row">
            <div className="col-md-11">
              <LeadForm edit handleSubmit={this.props.submitEditLead} />
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

export default connect(
  mapStateToProps,
  { submitEditLead }
)(crm_edit_lead);
