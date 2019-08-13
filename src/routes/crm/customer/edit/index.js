import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import BgCard from "Components/Everyday/BgCard";
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
          <div className="row">
            <div className="col-md-11">
              <BgCard
                heading={<IntlMessages id="sidebar.editCustomer" />}
              >
                <CustomerForm
                  edit={customer}
                  handleSubmit={this.props.editCustomer}
                />
              </BgCard>
            </div>
          </div>
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
