import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
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

// Actions
import { getSingleAccount, clearSingleAccount } from "Actions";
// addNoteToAccount(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Account, Edit Account, Transfer Account

class crm_view_account extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleAccount(id);
  }

  componentWillUnmount() {
    this.props.clearSingleAccount();
  }

  render() {
    const { loading, account } = this.props.accountToView;
    return loading ? (
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
              name={account.name}
              industry={account.industry && account.industry.name}
              ownerName={account.owner.name}
              office={account.office}
              fax={account.fax}
              address={account.address}
              address2={account.address2}
              state={account.state}
              city={account.city}
              zip={account.zip}
            />
          </RctCollapsibleCard>
        </div>
        <TabsWrapper>
          <div icon="zmdi-coffee text-success" label="DETAILS">
            <React.Fragment>
              <AccountDetails account={account} />
              <AddressDetails
                address={account.address}
                address2={account.address2}
                state={account.state}
                city={account.city}
                zip={account.zip}
              />
              <DescriptionDetails desc={account.description} />
            </React.Fragment>
          </div>
          <div icon="zmdi-drink text-secondary" label="RELATED">
            <RelatedDeals deals={account.deals} />
            <hr />
            <RelatedCustomers customers={account.customers} />
          </div>
          <div icon="zmdi-pizza text-warning" label="EVENTS">
            <UpcomingEvents events={account.upcomingEvents} />
            <hr />
            <ClosedEvents events={account.closedEvents} />
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
                <DisplayAllNotes notes={account.notes} />
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
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { accountState } = crmState;
  const { accountToView } = accountState;
  return { accountToView };
};

export default connect(
  mapStateToProps,
  { getSingleAccount, clearSingleAccount }
)(crm_view_account);
