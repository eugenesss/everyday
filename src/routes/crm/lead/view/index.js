import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { show } from "redux-modal";
// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";
//Page Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
// Card
import LeadCard from "Components/CRM/Lead/LeadCard";
// Vertical Tabs
import VerticalTab from "Components/Everyday/VerticalTabs//VerticalTab";
import VerticalContainer from "Components/Everyday/VerticalTabs//VerticalContainer";
// Details Tab
import LeadDetails from "Components/CRM/Lead/LeadDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";
// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";
// Notes Tab
import NotesLayout from "Components/Everyday/Notes/NotesLayout";
// Convert Lead Modal
import ConvertLeadModal from "Components/CRM/Lead/Convert/ConvertLeadModal";
import ConvertSuccessModal from "Components/CRM/Lead/Convert/ConvertSuccessModal";

//Actions
import {
  getSingleLead,
  clearSingleLead,
  handleConvertModal,
  startLeadEdit,
  deleteLead,
  addNoteLead,
  checkAccountExist
} from "Actions";
// Add events dialog
//  Transfer Lead

class crm_view_lead extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.startConvert = this.startConvert.bind(this);
    this.edit = this.edit.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleLead(id);
  }
  componentWillUnmount() {
    this.props.clearSingleLead();
  }

  // Change view tab state
  changeTabView = (_, activeIndex) => this.setState({ activeIndex });

  transfer() {
    console.log("transger");
  }
  // edit
  edit(lead) {
    this.props.startLeadEdit(lead);
    this.props.history.push("/app/crm/leads/edit");
  }

  /**
   * DELETE RECORD
   */
  handleDelete(leadId) {
    this.props.deleteLead(leadId);
    setTimeout(() => {
      this.props.history.push(`/app/crm/leads`);
    }, 500);
  }
  delete(lead) {
    this.props.show("alert_delete", {
      name: lead.name,
      action: () => this.handleDelete(lead.id)
    });
  }

  // events
  newEvent() {
    console.log("new events");
  }

  /**
   * START CONVERT LEAD
   */
  startConvert(companyName) {
    this.props.checkAccountExist(companyName);
  }

  /**
   * NEW NOTE
   */
  addNote(note) {
    this.props.addNoteLead(this.props.match.params.id, note);
  }

  render() {
    const { lead, loading, sectionLoading } = this.props.leadToView;
    const { activeIndex } = this.state;
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
                  handleOnClick: () => this.startConvert(lead.companyName)
                }
              ]}
              moreButton={
                <MoreButton>
                  {{ handleOnClick: () => this.edit(lead), label: "Edit" }}
                  {{
                    handleOnClick: this.transfer.bind(this),
                    label: "Transfer Lead"
                  }}
                  {{
                    handleOnClick: () => this.delete(lead),
                    label: "Delete"
                  }}
                </MoreButton>
              }
            />
            <div className="row">
              <div className="col-md-3">
                <div>
                  <LeadCard
                    name={lead.name}
                    companyName={lead.companyName}
                    status={lead.status && lead.status.name}
                    statusColor={lead.status && lead.status.color}
                    ownerName={lead.userInfo && lead.userInfo.name}
                    mobile={lead.baseContact.mobile}
                    office={lead.baseContact.office}
                    email={lead.baseContact.email}
                    interest={lead.interest}
                  />
                  <VerticalTab
                    activeIndex={activeIndex}
                    handleChange={this.changeTabView}
                    selectedcolor="crm"
                  >
                    {{
                      icon: "zmdi-info-outline",
                      label: "DETAILS"
                    }}
                    {{
                      icon: "zmdi-calendar",
                      label: "EVENTS"
                    }}
                    {{
                      icon: "zmdi-comment-text",
                      label: "NOTES"
                    }}
                  </VerticalTab>
                </div>
              </div>
              <div className="col-md-9">
                <VerticalContainer
                  activeIndex={activeIndex}
                  handleChange={this.changeTabView}
                  fullBlock
                  loading={sectionLoading}
                >
                  <div>
                    <LeadDetails lead={lead} />
                    <AddressDetails
                      addressDetails={lead.baseContact._address}
                    />
                    <DescriptionDetails desc={lead.baseContact.info} />
                  </div>
                  <div>
                    <UpcomingEvents
                      events={lead.upcomingEvents}
                      handleNewEvent={this.newEvent}
                    />
                    <ClosedEvents events={lead.pastEvents} />
                  </div>
                  <div>
                    <NotesLayout
                      allNotes={lead.notes}
                      handleAddNote={this.addNote}
                    />
                  </div>
                </VerticalContainer>
              </div>
            </div>
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

export default withRouter(
  connect(
    mapStateToProps,
    {
      getSingleLead,
      clearSingleLead,
      handleConvertModal,
      startLeadEdit,
      show,
      deleteLead,
      addNoteLead,
      checkAccountExist
    }
  )(crm_view_lead)
);
