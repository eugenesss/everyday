import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import DealCard from "Components/CRM/Deal/DealCard";
// import ViewDealStage from "Components/CRM/View/Deal/ViewDealStage";

// Details Tab
import DealDetails from "Components/CRM/Deal/DealDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";

// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";

// Acitivty Tab
import ActivityLog from "Components/Everyday/ActivityLog";

// History Tab
import StageHistory from "Components/CRM/View/Deal/StageHistory";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
// getDeal - deal details, history, events, notes
// Edit Deal, Delete Deal, Update Stage/Amount, getDealStage,
// addNoteToDeal(dealID), onNoteChange, clearNote
// Add Event Dialog

class crm_view_deal extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    /*     var id = this.props.match.params.id;
    this.props.viewDeal(id); */
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 800);
  }

  componentWillUnmount() {
    // this.props.viewDealEnd();
  }

  render() {
    const { loading } = this.state;
    const { deal } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Deal</title>
        </Helmet>
        <PageTitleBar title="View Deal" createLink="/crm/new/deal" />
        {loading ? (
          <RctPageLoader />
        ) : (
          <React.Fragment>
            <RctCollapsibleCard fullBlock>
              <DealCard
                name={"Deal Name"}
                stage={"Negotiation"}
                chance={50}
                type={"New Business"}
                ownerName={"admin admin"}
                amount={10000}
              />
            </RctCollapsibleCard>
            <RctCollapsibleCard heading={"Select Deal Stage"} fullBlock>
              {/*  <ViewDealStage deal={deal} /> */}
            </RctCollapsibleCard>
            <TabsWrapper>
              <div icon="zmdi-coffee text-success" label="DETAILS">
                <DealDetails />
                <DescriptionDetails />
              </div>
              <div icon="zmdi-book-image text-secondary" label="HISTORY">
                <StageHistory />
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
        )}
      </React.Fragment>
    );
  }
}

// map state to props
const mapStateToProps = ({ deal }) => {
  const { dealView } = deal;
  return { dealView };
};

export default connect(
  null,
  {}
)(crm_view_deal);
