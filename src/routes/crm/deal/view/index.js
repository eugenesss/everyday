import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";

//Page Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import DealCard from "Components/CRM/Deal/DealCard";

// Deal Stage Component
import SelectDealStage from "Components/CRM/View/SelectDealStage";

// Details Tab
import DealDetails from "Components/CRM/Deal/DealDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";

// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";
import NewEventsButton from "Components/CRM/View/Events/NewEventsButton";

// Acitivty Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// History Tab
import DealHistory from "Components/CRM/Deal/DealHistory";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
import { getSingleDeal, clearSingleDeal, startDealEdit } from "Actions";
// Edit Deal, Delete Deal, Update Stage/Amount, getDealStage,
// addNoteToDeal(dealID), onNoteChange, clearNote
// Add Event Dialog

class crm_view_deal extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleDeal(id);
  }

  componentWillUnmount() {
    this.props.clearSingleDeal();
  }

  reload() {
    console.log("reload");
  }
  edit(deal) {
    this.props.startDealEdit(deal);
    this.props.history.push("/app/crm/deals/edit");
  }
  delete() {
    console.log("delete");
  }
  newEvent() {
    console.log("new events");
  }

  render() {
    const { loading, deal } = this.props.dealToView;
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
              createLink="/crm/new/deal"
              moreButton={
                <MoreButton>
                  {{
                    handleOnClick: this.reload.bind(this),
                    label: "Reload"
                  }}
                  {{ handleOnClick: () => this.edit(deal), label: "Edit" }}
                  {{
                    handleOnClick: this.delete.bind(this),
                    label: "Delete"
                  }}
                </MoreButton>
              }
            />
            <RctCollapsibleCard fullBlock>
              <DealCard
                name={deal.name}
                stage={deal.stage.name}
                chance={deal.stage.chance}
                type={deal.type && deal.type.name}
                ownerName={deal.userInfo && deal.userInfo.name}
                amount={deal.amount}
              />
            </RctCollapsibleCard>
            <RctCollapsibleCard heading={"Update Deal Stage"} fullBlock>
              <SelectDealStage deal={deal} />
            </RctCollapsibleCard>
            <TabsWrapper>
              <div icon="zmdi-coffee text-success" label="DETAILS">
                <DealDetails deal={deal} />
                <DescriptionDetails desc={deal.description} />
              </div>
              <div icon="zmdi-book-image text-secondary" label="HISTORY">
                <DealHistory history={deal.history} />
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                <NewEventsButton handleOnClick={this.newEvent} />
                <UpcomingEvents events={deal.upcomingEvents} />
                <hr />
                <ClosedEvents events={deal.closedEvents} />
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
                    <DisplayAllNotes notes={deal.notes} />
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
  const { dealState } = crmState;
  const { dealToView } = dealState;
  return { dealToView };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSingleDeal, clearSingleDeal, startDealEdit }
  )(crm_view_deal)
);
