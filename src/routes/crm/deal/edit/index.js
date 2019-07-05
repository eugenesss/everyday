import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import DealForm from "Components/Form/Deal/DealForm";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

// Actions
import { editDeal, getSingleDeal } from "Actions";

class crm_edit_deal extends Component {
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleDeal(id);
  }

  render() {
    const { loading, deal } = this.props.dealToView;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Deal</title>
          <meta name="description" content="Everyday Deals Creation" />
        </Helmet>
        {loading ? (
          <RctPageLoader />
        ) : (
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <RctCollapsibleCard
                heading={<IntlMessages id="sidebar.newDeal" />}
              >
                <DealForm edit={deal} handleSubmit={this.props.editDeal} />
              </RctCollapsibleCard>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { dealState } = crmState;
  const { dealToView } = dealState;
  return { dealToView };
};

export default connect(
  mapStateToProps,
  { editDeal, getSingleDeal }
)(crm_edit_deal);
