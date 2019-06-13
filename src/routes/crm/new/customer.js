import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomerForm from "Components/Form/Customer/CustomerForm";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

class crm_new_customer extends Component {
  render() {
    const { loading } = this.props.customerForm;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Customer</title>
          <meta name="description" content="Everyday Customers Creation" />
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.newCustomer" />}>
          {loading && <RctSectionLoader />}
          <div className="row">
            <div className="col-md-11">
              <CustomerForm />
            </div>
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { customerState } = crmState;
  const { customerForm } = customerState;
  return { customerForm };
};

export default connect(mapStateToProps)(crm_new_customer);
