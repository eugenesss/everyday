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

// Actions
import { submitEditCustomer } from "Actions";

class crm_edit_customer extends Component {
  render() {
    const { loading } = this.props.customerForm;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Edit Customer</title>
        </Helmet>
        <RctCollapsibleCard
          heading={<IntlMessages id="sidebar.editCustomer" />}
        >
          {loading && <RctSectionLoader />}
          <div className="row">
            <div className="col-md-11">
              <CustomerForm edit handleSubmit={this.props.submitEditCustomer} />
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

export default connect(
  mapStateToProps,
  { submitEditCustomer }
)(crm_edit_customer);
