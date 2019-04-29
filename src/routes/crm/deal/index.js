import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import MyDealsList from "Components/CRM/Deal/MyDealsList";
import DealsList from "Components/CRM/Deal/DealsList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

import { getAllDeal, getMyDeal } from "Actions";

class crm_deal extends Component {
  /*   reloadTable() {
    this.props.getAllDeal();
  } */

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Deals</title>
          <meta name="description" content="Everyday Deals Management" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.deals" />}
          match={match}
        />
        <MyDealsList />
        <DealsList />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_deal);
