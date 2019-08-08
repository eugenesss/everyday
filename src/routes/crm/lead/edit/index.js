import React, { Component } from "react";
import { connect } from "react-redux";
// intl messages
import IntlMessages from "Util/IntlMessages";
// Page Components
import { Helmet } from "react-helmet";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import BgCard from "Components/Everyday/BgCard";
import LeadForm from "Components/Form/Lead/LeadForm";

// Actions
import { editLead, getSingleLead } from "Actions";

class crm_edit_lead extends Component {
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleLead(id);
  }

  render() {
    const { lead, loading } = this.props.leadToView;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Edit Lead</title>
        </Helmet>
        {loading ? (
          <RctPageLoader />
        ) : (
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <BgCard
                heading={<IntlMessages id="sidebar.editLead" />}
              >
                <LeadForm edit={lead} handleSubmit={this.props.editLead} />
              </BgCard>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { leadState } = crmState;
  const { leadToView } = leadState;
  return { leadToView };
};

export default connect(
  mapStateToProps,
  { editLead, getSingleLead }
)(crm_edit_lead);
