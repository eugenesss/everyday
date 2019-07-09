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
import RecordNotFound from "Components/Everyday/Error/RecordNotFound";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
// Deal Card
import DealCard from "Components/CRM/Deal/DealCard";
// Vertical Tabs
import VerticalTab from "Components/Everyday/VerticalTabs//VerticalTab";
import VerticalContainer from "Components/Everyday/VerticalTabs//VerticalContainer";
// Deal Stage Component
import SelectDealStage from "Components/CRM/Deal/SelectDealStage";
// Details Tab
import DealDetails from "Components/CRM/Deal/DealDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";
// History Tab
import DealHistory from "Components/CRM/Deal/DealHistory";
// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";
// Notes Tab
import NotesLayout from "Components/Everyday/Notes/NotesLayout";
// routes
import { editDeal, dealPage, newDeal } from "Helpers/url/crm";
// Actions
import {
  getSingleDeal,
  clearSingleDeal,
  startDealEdit,
  addNoteDeal,
  deleteDeal,
  transferDeal
} from "Actions";
//  Update Stage/Amount,

class crm_view_deal extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.addNote = this.addNote.bind(this);
    this.transfer = this.transfer.bind(this);
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleDeal(id);
  }
  componentWillUnmount() {
    this.props.clearSingleDeal();
  }
  // Change view tab state
  changeTabView = (_, activeIndex) => this.setState({ activeIndex });

  /**
   * Transfer Record
   */
  transfer(deal) {
    this.props.show("transfer_record", {
      name: deal.name,
      action: val => this.handleTransfer(deal.id, val)
    });
  }
  handleTransfer(id, newOwner) {
    this.props.transferDeal(id, newOwner);
  }

  /**
   * Edit
   */
  edit(deal) {
    this.props.startDealEdit(deal);
    this.props.history.push(editDeal);
  }

  /**
   * DELETE RECORD
   */
  handleDelete(dealId) {
    this.props.deleteDeal(dealId);
    //console.log(dealId);
    setTimeout(() => {
      this.props.history.push(dealPage);
    }, 500);
  }
  delete(deal) {
    this.props.show("alert_delete", {
      name: deal.name,
      action: () => this.handleDelete(deal.id)
    });
  }

  newEvent() {
    console.log("new events");
  }

  /**
   * NEW NOTE
   */
  addNote(note) {
    this.props.addNoteDeal(this.props.match.params.id, note);
  }

  render() {
    const { loading, deal, sectionLoading } = this.props.dealToView;
    const { activeIndex } = this.state;
    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : deal ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Deal</title>
            </Helmet>
            <PageTitleBar
              title="View Deal"
              createLink={newDeal}
              moreButton={
                <MoreButton>
                  {{ handleOnClick: () => this.edit(deal), label: "Edit" }}
                  {{
                    handleOnClick: () => this.transfer(deal),
                    label: "Transfer"
                  }}
                  {{
                    handleOnClick: () => this.delete(deal),
                    label: "Delete"
                  }}
                </MoreButton>
              }
            />
            <RctCollapsibleCard fullBlock>
              <div className="row no-gutters">
                <div className="col-md-3 align-self-center">
                  <DealCard
                    name={deal.name}
                    stage={deal.stage}
                    type={deal.type && deal.type.name}
                    ownerName={deal.userInfo && deal.userInfo.name}
                    amount={deal.amount}
                    account={deal.accountInfo}
                    customer={deal.customerInfo}
                  />
                </div>
                <div className="col-md-9 border-left px-20 py-30">
                  <SelectDealStage deal={deal} />
                </div>
              </div>
            </RctCollapsibleCard>
            <div className="row">
              <div className="col-3">
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
                    icon: "zmdi-book",
                    label: "HISTORY"
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
              <div className="col-9">
                <VerticalContainer
                  activeIndex={activeIndex}
                  handleChange={this.changeTabView}
                  fullBlock
                  loading={sectionLoading}
                >
                  <div>
                    <DealDetails deal={deal} />
                    <DescriptionDetails desc={deal.info} />
                  </div>
                  <div>
                    <DealHistory history={deal.history} />
                  </div>
                  <div>
                    <UpcomingEvents events={deal.upcomingEvents} />
                    <ClosedEvents events={deal.closedEvents} />
                  </div>
                  <div>
                    <NotesLayout
                      allNotes={deal.notes}
                      handleAddNote={this.addNote}
                    />
                  </div>
                </VerticalContainer>
              </div>
            </div>
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
  const { dealState } = crmState;
  const { dealToView } = dealState;
  return { dealToView };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getSingleDeal,
      clearSingleDeal,
      startDealEdit,
      show,
      addNoteDeal,
      deleteDeal,
      transferDeal
    }
  )(crm_view_deal)
);
