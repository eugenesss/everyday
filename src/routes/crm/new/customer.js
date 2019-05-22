import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomerForm from "Components/Form/Customer/CustomerForm";

class crm_new_customer extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Customer</title>
          <meta name="description" content="Everyday Customers Creation" />
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.newCustomer" />}>
          <div className="row">
            <div className="col-md-10">
              <CustomerForm />
            </div>
            <div className="col-md-1" />
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default crm_new_customer;
