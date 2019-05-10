import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import { viewCustomer, viewCustomerEnd, deleteCustomer } from "Actions";

//Page Components
import AccountCard from "Components/CRM/Account/AccountCard";
import AccountDetails from "Components/CRM/Account/AccountDetails";
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

class crm_view_account extends Component {
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
    const { account } = this.props;
    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : account ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Account</title>
            </Helmet>
            <PageTitleBar title="View Account" createLink="/crm/new/account" />
            <div className="row">
              <RctCollapsibleCard colClasses="col-md-6 col-lg-6" fullBlock>
                <AccountCard
                  name="Account One"
                  industry="Fashion"
                  ownerName="admin admin"
                  office="12345678"
                  fax=""
                  address="1 Address Street"
                  address2="An Account Building"
                  state="Singapore"
                  city="Singapore"
                  zip="654321"
                />
              </RctCollapsibleCard>
            </div>
            <TabsWrapper>
              <div icon="zmdi-coffee text-success" label="DETAILS">
                <React.Fragment>
                  <AccountDetails />
                  <AddressDetails />
                  <DescriptionDetails />
                </React.Fragment>
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

export default crm_view_account;
