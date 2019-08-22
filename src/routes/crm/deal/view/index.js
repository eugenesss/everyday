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
import DealCard from "Components/CRM/Deal/DealCard";
import ProfileTabs from "Components/Everyday/Layout/View/ProfileTabs";
// routes
import { dealEditPage, dealListPage, dealNewPage } from "Helpers/url/crm";
// Tabs
import OverviewTab from "./tabs/Overview";
import DetailsTab from "./tabs/Details";
import EventsTab from "Components/CRM/View/Events/EventTab";
// Actions
import {
  getSingleDeal,
  clearSingleDeal,
  addNoteDeal,
  deleteDeal,
  transferDeal
} from "Actions";
//  Update Stage/Amount,

class crm_view_deal extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.transfer = this.transfer.bind(this);
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleDeal(id);
  }
  componentWillUnmount() {
    this.props.clearSingleDeal();
  }
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
    this.props.history.push(dealEditPage(deal.id));
  }

  /**
   * DELETE RECORD
   */
  handleDelete(dealId) {
    this.props.deleteDeal(dealId);
    //console.log(dealId);
    setTimeout(() => {
      this.props.history.push(dealListPage);
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
    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : deal ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Deal</title>
            </Helmet>
            <PageTitleBar title="View Deal" />

            <div className="row">
              <div className="col-3">
                <DealCard deal={deal} />
              </div>
              <div className="col-9">
                <ProfileTabs loading={sectionLoading}>
                  <div label="Overview">
                    <OverviewTab deal={deal} />
                  </div>
                  <div label="Events">
                    <EventsTab
                      pastEvents={deal.pastEvents}
                      upcomingEvents={deal.upcomingEvents}
                    />
                  </div>
                  <div label="Details">
                    <DetailsTab deal={deal} />
                  </div>
                </ProfileTabs>
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
      show,
      addNoteDeal,
      deleteDeal,
      transferDeal
    }
  )(crm_view_deal)
);
