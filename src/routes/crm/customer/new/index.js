import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomerForm from "Components/Form/Customer/CustomerForm";

// Action
import { newCustomer } from "Actions";

class crm_new_customer extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Customer</title>
          <meta name="description" content="Everyday Customers Creation" />
        </Helmet>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <RctCollapsibleCard
              heading={<IntlMessages id="sidebar.newCustomer" />}
            >
              <CustomerForm handleSubmit={this.props.newCustomer} />
            </RctCollapsibleCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { newCustomer }
)(crm_new_customer);
