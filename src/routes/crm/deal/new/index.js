import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import BgCard from "Components/Everyday/BgCard";
import DealForm from "Components/Form/Deal/DealForm";

// Actions
import { newDeal } from "Actions";

class crm_new_deal extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Deal</title>
          <meta name="description" content="Everyday Deals Creation" />
        </Helmet>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <BgCard heading={<IntlMessages id="sidebar.newDeal" />}>
              <DealForm handleSubmit={this.props.newDeal} />
            </BgCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { newDeal }
)(crm_new_deal);
