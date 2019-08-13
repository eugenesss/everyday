import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import BgCard from "Components/Everyday/BgCard";
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
            <BgCard
              heading={<IntlMessages id="sidebar.newCustomer" />}
            >
              <CustomerForm handleSubmit={this.props.newCustomer} />
            </BgCard>
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
