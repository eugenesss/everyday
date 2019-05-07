import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import CustomersList from "Components/CRM/Customer/CustomersList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

//import { getAllCustomer } from "Actions";

class crm_customer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Customers</title>
          <meta name="description" content="Everyday Customers Retention" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.customers" />}
          createLink="/crm/new/customer"
        />
        <CustomersList />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {}
)(crm_customer);
