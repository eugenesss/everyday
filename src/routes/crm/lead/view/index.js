import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { show } from "redux-modal";
// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
//Page Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import RecordNotFound from "Components/Everyday/Error/RecordNotFound";
// Layout
import LeadCard from "Components/CRM/Lead/LeadCard";
import ProfileTabs from "Components/Everyday/Layout/View/ProfileTabs";
// Tabs
import LeadOverviewTab from "./tabs/Overview";
import LeadDetailsTab from "./tabs/Details";
import LeadEventsTab from "./tabs/Events";
// Convert Lead Modal
import ConvertLeadModal from "Components/CRM/Lead/Convert/ConvertLeadModal";
import ConvertSuccessModal from "Components/CRM/Lead/Convert/ConvertSuccessModal";
// routes
import { leadEditPage, leadListPage, leadNewPage } from "Helpers/url/crm";
//Actions
import {
  getSingleLead,
  clearSingleLead,
  handleConvertModal,
  deleteLead,
  addNoteLead,
  checkAccountExist,
  transferLead
} from "Actions";
// Add events dialog

class crm_view_lead extends Component {
  constructor(props) {
    super(props);
    this.startConvert = this.startConvert.bind(this);
    this.edit = this.edit.bind(this);
    this.addNote = this.addNote.bind(this);
    this.transfer = this.transfer.bind(this);
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleLead(id);
  }
  componentWillUnmount() {
    this.props.clearSingleLead();
  }

  /**
   * Transfer Record
   */
  transfer(lead) {
    this.props.show("transfer_record", {
      name: lead.name,
      action: val => this.handleTransfer(lead.id, val)
    });
  }
  handleTransfer(id, newOwner) {
    this.props.transferLead(id, newOwner);
  }

  /**
   * Edit
   */
  edit(lead) {
    this.props.history.push(leadEditPage(lead.id));
  }

  /**
   * DELETE RECORD
   */
  handleDelete(leadId) {
    this.props.deleteLead(leadId);
    setTimeout(() => {
      this.props.history.push(leadListPage);
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

    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Lead</title>
        </Helmet>
        {loading ? (
          <RctPageLoader />
        ) : lead ? (
          <React.Fragment>
            <PageTitleBar title="View Lead" />
            <div className="row">
              <div className="col-md-3">
                <LeadCard lead={lead} />
              </div>
              <div className="col-md-9">
                <ProfileTabs loading={sectionLoading}>
                  <div label="Overview">
                    <LeadOverviewTab lead={lead} />
                  </div>
                  <div label="Events">
                    <LeadEventsTab />
                  </div>
                  <div label="Details">
                    <LeadDetailsTab lead={lead} />
                  </div>
                </ProfileTabs>
              </div>
            </div>

            <ConvertLeadModal />
            <ConvertSuccessModal />
          </React.Fragment>
        ) : (
          <RecordNotFound />
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
      show,
      deleteLead,
      addNoteLead,
      checkAccountExist,
      transferLead
    }
  )(crm_view_lead)
);

// import MoreButton from "Components/PageTitleBar/MoreButton";
// // Vertical Tabs
// import VerticalTab from "Components/Everyday/VerticalTabs//VerticalTab";
// import VerticalContainer from "Components/Everyday/VerticalTabs//VerticalContainer";
// // Details Tab
// import LeadDetails from "Components/CRM/Lead/LeadDetails";
// import AddressDetails from "Components/CRM/View/Details/AddressDetails";
// import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";
// // Events Tab
// import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
// import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";
// // Notes Tab
// import NotesLayout from "Components/Everyday/Notes/NotesLayout";

//  <VerticalContainer
//                   activeIndex={activeIndex}
//                   handleChange={this.changeTabView}
//                   fullBlock
//                   loading={sectionLoading}
//                 >
//                   <div>
//                     <LeadDetails lead={lead} />
//                     <AddressDetails
//                       addressDetails={lead.baseContact._address}
//                     />
//                     <DescriptionDetails desc={lead.baseContact.info} />
//                   </div>
//                   <div>
//                     <UpcomingEvents
//                       events={lead.upcomingEvents}
//                       handleNewEvent={this.newEvent}
//                     />
//                     <ClosedEvents events={lead.pastEvents} />
//                   </div>
//                   <div>
//                     <NotesLayout
//                       allNotes={lead.notes}
//                       handleAddNote={this.addNote}
//                     />
//                   </div>
//                 </VerticalContainer>
