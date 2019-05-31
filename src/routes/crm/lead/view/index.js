import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";

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
import NewEventsButton from "Components/CRM/View/Events/NewEventsButton";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Convert Lead Modal
import ConvertLeadModal from "Components/CRM/Lead/ConvertModals/ConvertLeadModal";
import ConvertSuccessModal from "Components/CRM/Lead/ConvertModals/ConvertSuccessModal";

//Actions
import { getSingleLead, clearSingleLead, handleConvertModal } from "Actions";
// addNoteToLead(leadID) onNoteChange, clearNote
// Add events dialog
// Delete Lead, Edit Lead, Transfer Lead

class crm_view_lead extends Component {
  constructor(props) {
    super(props);
    this.convert = this.convert.bind(this);
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleLead(id);
  }
  componentWillUnmount() {
    this.props.clearSingleLead();
  }

  reload() {
    console.log("reload");
  }
  edit() {
    console.log("edit");
  }
  delete() {
    console.log("delete");
  }
  newEvent() {
    console.log("new events");
  }
  convert() {
    this.props.handleConvertModal();
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
            <PageTitleBar
              title="View Lead"
              createLink="/crm/new/lead"
              extraButtons={[
                {
                  color: "success",
                  label: "Convert",
                  handleOnClick: () => this.convert(lead)
                }
              ]}
              moreButton={
                <MoreButton>
                  {{
                    handleOnClick: this.reload.bind(this),
                    label: "Reload"
                  }}
                  {{ handleOnClick: this.edit.bind(this), label: "Edit" }}
                  {{
                    handleOnClick: this.delete.bind(this),
                    label: "Delete"
                  }}
                </MoreButton>
              }
            />
            <RctCollapsibleCard fullBlock>
              <LeadCard
                name={lead.name}
                companyName={lead.companyName}
                status={lead.status.name}
                statusColor={lead.status.color}
                ownerName={lead.owner && lead.owner.name}
              />
            </RctCollapsibleCard>
            <TabsWrapper>
              <div icon="zmdi-coffee text-primary" label="DETAILS">
                <LeadDetails lead={lead} />
                <AddressDetails
                  address_1={lead.address_1}
                  address_2={lead.address_2}
                  city={lead.city}
                  state={lead.state}
                  zip={lead.zip}
                />
                <DescriptionDetails desc={lead.description} />
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                <NewEventsButton handleOnClick={this.newEvent} />
                <UpcomingEvents events={lead.upcomingEvents} />
                <hr />
                <ClosedEvents events={lead.closedEvents} />
              </div>
              {/* <div icon="zmdi-local-florist text-info" label="ACTIVITY LOG">
                <ActivityLog />
              </div> */}
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
            <ConvertLeadModal />
            <ConvertSuccessModal />
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
  { getSingleLead, clearSingleLead, handleConvertModal }
)(crm_view_lead);
