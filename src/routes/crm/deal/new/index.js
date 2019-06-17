import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import DealForm from "Components/Form/Deal/DealForm";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Actions
import { submitDeal } from "Actions";

class crm_new_deal extends Component {
  state = {};

  render() {
    const { loading } = this.props.dealForm;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Deal</title>
          <meta name="description" content="Everyday Deals Creation" />
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.newDeal" />}>
          {loading && <RctSectionLoader />}
          <div className="row">
            <div className="col-md-11">
              <DealForm handleSubmit={this.props.submitDeal} />
            </div>
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { dealState } = crmState;
  const { dealForm } = dealState;
  return { dealForm };
};

export default connect(
  mapStateToProps,
  { submitDeal }
)(crm_new_deal);
