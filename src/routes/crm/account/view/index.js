import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Page Components
import AccountCard from "Components/CRM/Account/AccountCard";

// Details Tab
import AccountDetails from "Components/CRM/Account/AccountDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";

// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";

// Activity Log
import ActivityLog from "Components/Everyday/ActivityLog";

// Related Tab
import RelatedDeals from "Components/CRM/View/Related/RelatedDeals";
import RelatedCustomers from "Components/CRM/View/Related/RelatedCustomers";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Req
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";

// Actions
// get Account - account details, open events, closed events, notes
// addNoteToAccount(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Account, Edit Account, Transfer Account

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
        ) : !account ? (
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
                <RelatedDeals />
                <br />
                <RelatedCustomers />
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                <UpcomingEvents />
                <ClosedEvents />
              </div>
              <div icon="zmdi-local-florist text-info" label="ACTIVITY LOG">
                <ActivityLog />
              </div>
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div className="col-md-4">
                    <NewNote /* onAddNote="function" */ />
                  </div>
                  <div className="col-md-8">
                    <DisplayAllNotes />
                  </div>
                </div>
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
