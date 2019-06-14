import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import CustomerList from "Components/CRM/Customer/CustomerList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

import { changeCustomerView, getAllCustomer } from "Actions";

class crm_customer extends Component {
  componentDidMount() {
    this.props.getAllCustomer();
  }

  reload() {
    console.log("reload");
  }
  massImportCust() {
    console.log("massImportCust");
  }

  render() {
    const {
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.customerState.customerList;

    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Customers</title>
          <meta name="description" content="Everyday Customers Retention" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeCustomerView}
              />
            </div>
          }
          createLink="/crm/new/customer"
          moreButton={
            <MoreButton>
              {{ handleOnClick: this.reload.bind(this), label: "Reload" }}
              {{
                handleOnClick: this.massImportCust.bind(this),
                label: "Mass Import Customers (csv)"
              }}
            </MoreButton>
          }
        />
        <CustomerList
          title={nowShowing}
          action={action}
          tableData={tableData}
          loading={loading}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { customerState } = crmState;
  return { customerState };
};

export default connect(
  mapStateToProps,
  {
    changeCustomerView,
    getAllCustomer
  }
)(crm_customer);
