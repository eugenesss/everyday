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
// Card
import CustomerCard from "Components/CRM/Customer/CustomerCard";
// Vertical Tabs
import VerticalTab from "Components/Everyday/VerticalTabs//VerticalTab";
import VerticalContainer from "Components/Everyday/VerticalTabs//VerticalContainer";
// Details Tab
import CustomerDetails from "Components/CRM/Customer/CustomerDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";
// Related Tab
import RelatedDeals from "Components/CRM/View/Related/RelatedDeals";
// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";
// Notes Tab
import NotesLayout from "Components/Everyday/Notes/NotesLayout";
// routes
import { customerPage, editCustomer, newCustomer } from "Helpers/url/crm";
// Actions
import {
  getSingleCustomer,
  clearSingleCustomer,
  startCustomerEdit,
  deleteCustomer,
  addNoteCustomer,
  setCustomerActive,
  transferCustomer
} from "Actions";
// Add events dialog

class crm_view_customer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.edit = this.edit.bind(this);
    this.addNote = this.addNote.bind(this);
    this.trasnfer = this.transfer.bind(this);
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleCustomer(id);
  }
  componentWillUnmount() {
    this.props.clearSingleCustomer();
  }
  // Change view tab state
  changeTabView = (_, activeIndex) => this.setState({ activeIndex });

  /**
   * Edit
   */
  edit(cust) {
    this.props.startCustomerEdit(cust);
    this.props.history.push(editCustomer);
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
      this.props.history.push(customerPage);
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
    const { activeIndex } = this.state;
    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : customer ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Customer</title>
            </Helmet>
            <PageTitleBar
              title="View Customer"
              createLink={newCustomer}
              extraButtons={[
                customer.isActive
                  ? {
                      color: "danger",
                      label: "Set Inactive",
                      handleOnClick: () => this.setInactive(customer)
                    }
                  : {
                      color: "success",
                      label: "Set Active",
                      handleOnClick: () => this.setInactive(customer)
                    }
              ]}
              moreButton={
                <MoreButton>
                  {{ handleOnClick: () => this.edit(customer), label: "Edit" }}
                  {{
                    handleOnClick: () => this.transfer(customer),
                    label: "Transfer"
                  }}
                  {{
                    handleOnClick: () => this.delete(customer),
                    label: "Delete"
                  }}
                </MoreButton>
              }
            />
            <div className="row">
              <div className="col-md-3">
                <div>
                  <CustomerCard
                    name={customer.name}
                    account={customer.accountInfo}
                    ownerName={customer.userInfo && customer.userInfo.name}
                    mobile={customer.baseContact.mobile}
                    office={customer.baseContact.office}
                    email={customer.baseContact.email}
                    isActive={customer.isActive}
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
                      icon: "zmdi-link",
                      label: "RELATED"
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
                    <CustomerDetails customer={customer} />
                    <AddressDetails
                      addressDetails={customer.baseContact._address}
                    />
                    <DescriptionDetails desc={customer.baseContact.info} />
                  </div>
                  <div>
                    <RelatedDeals deals={customer.deals} />
                  </div>
                  <div>
                    <UpcomingEvents
                      events={customer.upcomingEvents}
                      handleNewEvent={this.newEvent}
                    />
                    <ClosedEvents events={customer.closedEvents} />
                  </div>
                  <div>
                    <NotesLayout
                      allNotes={customer.notes}
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
      startCustomerEdit,
      deleteCustomer,
      addNoteCustomer,
      setCustomerActive,
      transferCustomer
    }
  )(crm_view_customer)
);
