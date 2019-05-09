import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import { viewCustomer, viewCustomerEnd, deleteCustomer } from "Actions";

//Page Components
import CustomerCard from "Components/CRM/Customer/CustomerCard";
import CustomerDetails from "Components/CRM/Customer/CustomerDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Req
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";

class crm_view_customer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillMount() {
    // var id = this.props.match.params.id;
    // this.props.viewCustomer(id);
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 600);
  }
  componentWillUnmount() {
    // this.props.viewCustomerEnd();
  }

  render() {
    const { loading } = this.state;
    const { customer } = this.props;
    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : customer ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Customer</title>
            </Helmet>
            <PageTitleBar
              title="View Customer"
              createLink="/crm/new/customer"
            />
            <div className="row">
              <RctCollapsibleCard colClasses="col-md-6 col-lg-6" fullBlock>
                <CustomerCard
                  fullName="customer one"
                  jobTitle="job title"
                  ownerName="admin admin"
                  mobile="1234-5678"
                  email="customer1@one.com"
                />
              </RctCollapsibleCard>
            </div>
            <TabsWrapper>
              <div icon="zmdi-coffee text-success" label="DETAILS">
                <CustomerDetails />
                <AddressDetails />
                <DescriptionDetails />
              </div>

              <div icon="zmdi-drink text-secondary" label="RELATED">
                Related
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                Activities
              </div>
              <div icon="zmdi-local-florist text-info" label="REMINDERS">
                Reminders
              </div>
              <div icon="zmdi-assignment text-danger" label="NOTES">
                {/*  <ViewNote /> */}
              </div>
            </TabsWrapper>
          </React.Fragment>
        ) : (
          <PageErrorMessage
            heading="Not Found"
            message="This could be because of a network problem or the record might have been deleted"
          />
        )}
      </React.Fragment>
    );
  }
}

export default crm_view_customer;
