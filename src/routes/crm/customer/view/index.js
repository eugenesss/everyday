import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Components
import CustomerCard from "Components/CRM/Customer/CustomerCard";

// Details Tab
import CustomerDetails from "Components/CRM/Customer/CustomerDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";

// Related Tab
import RelatedDeals from "Components/CRM/View/Related/RelatedDeals";

// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";

// Activity Log
import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

//Page Req
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";

// Actions
import { getSingleCustomer, clearSingleCustomer } from "Actions";
// addNoteToCustomer(custID), onNoteChange, clearNote
// Add events dialog
// Delete Customer, Edit Customer, Transfer Customer

class crm_view_customer extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleCustomer(id);
  }
  componentWillUnmount() {
    this.props.clearSingleCustomer();
  }

  render() {
    const { loading, customer } = this.props.customerToView;
    console.log(customer);
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
                  fullName={customer.fullName}
                  ownerName={customer.owner.fullName}
                  jobTitle={customer.jobTitle}
                  mobile={customer.mobile}
                  email={customer.email}
                />
              </RctCollapsibleCard>
            </div>
            <TabsWrapper>
              <div icon="zmdi-coffee text-success" label="DETAILS">
                <CustomerDetails customer={customer} />
                <AddressDetails
                  address={customer.address}
                  address2={customer.address2}
                  city={customer.city}
                  state={customer.state}
                  zip={customer.zip}
                />
                <DescriptionDetails desc={customer.description} />
              </div>
              <div icon="zmdi-drink text-secondary" label="RELATED">
                <RelatedDeals deals={customer.deals} />
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                <UpcomingEvents events={customer.upcomingEvents} />
                <hr />
                <ClosedEvents events={customer.closedEvents} />
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
                    <DisplayAllNotes notes={customer.notes} />
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
// map state to props
const mapStateToProps = ({ crmState }) => {
  const { customerState } = crmState;
  const { customerToView } = customerState;
  return { customerToView };
};

export default connect(
  mapStateToProps,
  { getSingleCustomer, clearSingleCustomer }
)(crm_view_customer);
