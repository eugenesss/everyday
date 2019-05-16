import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Page Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import LeadCard from "Components/CRM/Lead/LeadCard";

// Details Tab
import LeadDetails from "Components/CRM/Lead/LeadDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";

// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";

// Activity Log Tab
import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Actions
import { getSingleLead, clearSingleLead } from "Actions";
// addNoteToLead(leadID) onNoteChange, clearNote
// Add events dialog
// Delete Lead, Convert Lead, Edit Lead, Transfer Lead

class crm_view_lead extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleLead(id);
  }
  componentWillUnmount() {
    this.props.clearSingleLead();
  }

  render() {
    const { lead, loading } = this.props.leadToView;

    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : lead ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Lead</title>
            </Helmet>
            <PageTitleBar title="View Lead" createLink="/crm/new/lead" />
            <RctCollapsibleCard fullBlock>
              <LeadCard
                fullName={lead.fullName}
                companyName={lead.companyName}
                status={lead.status.name}
                statusColor={lead.status.color}
                ownerName={lead.owner.fullName}
              />
            </RctCollapsibleCard>
            <TabsWrapper>
              <div icon="zmdi-coffee text-primary" label="DETAILS">
                <LeadDetails lead={lead} />
                <AddressDetails
                  address={lead.address}
                  address2={lead.address2}
                  city={lead.city}
                  state={lead.state}
                  zip={lead.zip}
                />
                <DescriptionDetails desc={lead.description} />
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                <UpcomingEvents events={lead.upcomingEvents} />
                <hr />
                <ClosedEvents events={lead.closedEvents} />
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
                    <DisplayAllNotes notes={lead.notes} />
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
  const { leadState } = crmState;
  const { leadToView } = leadState;
  return { leadToView };
};

export default connect(
  mapStateToProps,
  { getSingleLead, clearSingleLead }
)(crm_view_lead);
