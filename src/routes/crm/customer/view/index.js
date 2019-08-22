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
import CustomerCard from "Components/CRM/Customer/CustomerCard";
import ProfileTabs from "Components/Everyday/Layout/View/ProfileTabs";
// Tabs
import OverviewTab from "./tabs/Overview";
import DetailsTab from "./tabs/Details";
import DealsTab from "./tabs/Deals";
import EventsTab from "Components/CRM/View/Events/EventTab";

// routes
import {
  customerListPage,
  customerEditPage,
  customerNewPage
} from "Helpers/url/crm";
// Actions
import {
  getSingleCustomer,
  clearSingleCustomer,
  deleteCustomer,
  addNoteCustomer,
  setCustomerActive,
  transferCustomer
} from "Actions";
// Add events dialog

class crm_view_customer extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.addNote = this.addNote.bind(this);
    this.trasnfer = this.transfer.bind(this);
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleCustomer(id);
  }
  componentWillUnmount() {
    this.props.clearSingleCustomer();
  }

  /**
   * Edit
   */
  edit(cust) {
    this.props.history.push(customerEditPage(cust.id));
  }

  /**
   * Transfer Record
   */
  transfer(customer) {
    this.props.show("transfer_record", {
      name: customer.name,
      action: val => this.handleTransfer(customer.id, val)
    });
  }
  handleTransfer(id, newOwner) {
    this.props.transferCustomer(id, newOwner);
  }

  /**
   * DELETE RECORD
   */
  handleDelete(custId) {
    this.props.deleteCustomer(custId);
    //console.log(custId);
    setTimeout(() => {
      this.props.history.push(customerListPage);
    }, 500);
  }
  delete(cust) {
    this.props.show("alert_delete", {
      name: cust.name,
      action: () => this.handleDelete(cust.id)
    });
  }

  newEvent() {
    console.log("new events");
  }
  setInactive(cust) {
    this.props.setCustomerActive(cust.id, !cust.isActive);
  }

  /**
   * NEW NOTE
   */
  addNote(note) {
    this.props.addNoteCustomer(this.props.match.params.id, note);
  }

  render() {
    const { loading, customer, sectionLoading } = this.props.customerToView;
    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : customer ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Customer</title>
            </Helmet>
            <PageTitleBar title="View Customer" />
            <div className="row">
              <div className="col-md-3">
                <CustomerCard cust={customer} />
              </div>
              <div className="col-md-9">
                <ProfileTabs loading={sectionLoading}>
                  <div label="Overview">
                    <OverviewTab cust={customer} />
                  </div>
                  <div label="Deals">
                    <DealsTab deals={customer.deals} />
                  </div>
                  <div label="Events">
                    <EventsTab
                      pastEvents={customer.pastEvents}
                      upcomingEvents={customer.upcomingEvents}
                    />
                  </div>
                  <div label="Details">
                    <DetailsTab cust={customer} />
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
  const { customerState } = crmState;
  const { customerToView } = customerState;
  return { customerToView };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      show,
      getSingleCustomer,
      clearSingleCustomer,
      deleteCustomer,
      addNoteCustomer,
      setCustomerActive,
      transferCustomer
    }
  )(crm_view_customer)
);
