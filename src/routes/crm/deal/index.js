import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import DealsList from "Components/CRM/Deal/DealsList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

// import { getAllDeal, getMyDeal } from "Actions";

class crm_deal extends Component {
  /*   reloadTable() {
    this.props.getAllDeal();
  } */

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Deals</title>
          <meta name="description" content="Everyday Deals Management" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.deals" />}
          createLink="/crm/new/deal"
        />
        <DealsList />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_deal);
