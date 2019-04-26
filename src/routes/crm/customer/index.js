import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import CustomersList from "Components/CRM/Customer/CustomersList";
//import MyCustomersList from "Components/CRM/Customer/MyCustomersList";

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
    const { match } = this.props;
    return (
      <div className="data-table-wrapper">
        <Helmet>
          <title>CRM | Customers</title>
          <meta name="description" content="OCRM Customers Retention" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.customers" />}
          match={match}
        />
        {/* <MyCustomersList /> */}
        <CustomersList />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(crm_customer);
