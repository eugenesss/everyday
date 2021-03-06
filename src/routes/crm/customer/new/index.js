import React from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// Page Components
import CustomerForm from "Components/Form/Customer/CustomerForm";

// Action
import { newCustomer } from "Actions";

const crm_new_customer = props => (
  <React.Fragment>
    <Helmet>
      <title>Everyday | New Customer</title>
      <meta name="description" content="Everyday Customers Creation" />
    </Helmet>

    <CustomerForm
      title="sidebar.newCustomer"
      handleSubmit={props.newCustomer}
    />
  </React.Fragment>
);

export default connect(
  null,
  { newCustomer }
)(crm_new_customer);
