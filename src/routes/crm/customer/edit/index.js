import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// Page Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import CustomerForm from "Components/Form/Customer/CustomerForm";

// Actions
import { editCustomer, getSingleCustomer } from "Actions";

class crm_edit_customer extends Component {
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleCustomer(id);
  }
  render() {
    const { loading, customer } = this.props.customerToView;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Edit Customer</title>
        </Helmet>
        {loading ? (
          <RctPageLoader />
        ) : (
          <CustomerForm
            title="sidebar.editCustomer"
            edit={customer}
            handleSubmit={this.props.editCustomer}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { customerState } = crmState;
  const { customerToView } = customerState;
  return { customerToView };
};

export default connect(
  mapStateToProps,
  { editCustomer, getSingleCustomer }
)(crm_edit_customer);
