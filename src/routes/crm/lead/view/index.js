import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";
// Convert Lead Modal
import ConvertLeadModal from "Components/CRM/Lead/ConvertModals/ConvertLeadModal";
import ConvertSuccessModal from "Components/CRM/Lead/ConvertModals/ConvertSuccessModal";

// Vertical Tabs
import VerticalTab from "Components/Everyday/VerticalTabs//VerticalTab";
import VerticalContainer from "Components/Everyday/VerticalTabs//VerticalContainer";

//Actions
import {
  getSingleLead,
  clearSingleLead,
  handleConvertModal,
  startLeadEdit
} from "Actions";
// addNoteToLead(leadID) onNoteChange, clearNote
// Add events dialog
// Delete Lead, Edit Lead, Transfer Lead

class crm_view_lead extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.convert = this.convert.bind(this);
    this.edit = this.edit.bind(this);
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    //this.props.getSingleLead(id);
  }
  componentWillUnmount() {
    this.props.clearSingleLead();
  }

  // Change view tab state
  changeTabView = (_, activeIndex) => this.setState({ activeIndex });

  transfer() {
    console.log("transger");
  }
  edit(lead) {
    this.props.startLeadEdit(lead);
    this.props.history.push("/app/crm/leads/edit");
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
    const { activeIndex } = this.state;
    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : !lead ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Lead</title>
            </Helmet>
            {/*  <PageTitleBar
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
                  {{ handleOnClick: () => this.edit(lead), label: "Edit" }}
                  {{
                    handleOnClick: this.transfer.bind(this),
                    label: "Transfer Lead"
                  }}
                  {{
                    handleOnClick: this.delete.bind(this),
                    label: "Delete"
                  }}
                </MoreButton>
              }
            /> */}
            <div className="row">
              <div className="col-md-3">
                <RctCollapsibleCard>header</RctCollapsibleCard>

                <VerticalTab
                  activeIndex={activeIndex}
                  handleChange={this.changeTabView}
                  selectedcolor="crm"
                >
                  {{
                    icon: "zmdi-coffee text-danger",
                    label: "Details"
                  }}
                  {{ icon: "zmdi-coffee text-success", label: "Details" }}
                  {{ icon: "zmdi-coffee text-warning", label: "Details" }}
                </VerticalTab>
              </div>
              <div className="col-md-9">
                <VerticalContainer
                  activeIndex={activeIndex}
                  handleChange={this.changeTabView}
                >
                  <div>heh</div>
                  <div>heh</div>
                  <div>heh</div>
                </VerticalContainer>
              </div>
            </div>

            {/* <RctCollapsibleCard fullBlock>
              <LeadCard
                name={lead.name}
                companyName={lead.companyName}
                status={lead.status && lead.status.name}
                statusColor={lead.status && lead.status.color}
                ownerName={lead.userInfo && lead.userInfo.name}
              />
            </RctCollapsibleCard>
            <TabsWrapper>
              <div icon="zmdi-coffee text-primary" label="DETAILS">
                <LeadDetails lead={lead} />
                <AddressDetails
                  address_1={lead.baseContact._address.address_1}
                  address_2={lead.baseContact._address.address_2}
                  city={lead.baseContact._address.city}
                  state={lead.baseContact._address.state}
                  zip={lead.baseContact._address.zip}
                />
                <DescriptionDetails desc={lead.description} />
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                <NewEventsButton handleOnClick={this.newEvent} />
                <UpcomingEvents events={lead.upcomingEvents} />
                <hr />
                <ClosedEvents events={lead.closedEvents} />
              </div>
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div className="col-md-4">
                    <NewNote />
                  </div>
                  <div className="col-md-8">
                    <DisplayAllNotes notes={lead.notes} />
                  </div>
                </div>
              </div>
            </TabsWrapper> */}
            {/* <ConvertLeadModal />
            <ConvertSuccessModal /> */}
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
    { getSingleLead, clearSingleLead, handleConvertModal, startLeadEdit }
  )(crm_view_lead)
);
