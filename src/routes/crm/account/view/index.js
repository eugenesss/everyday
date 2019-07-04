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
// Account Card
import AccountCard from "Components/CRM/Account/AccountCard";
// Vertical Tabs
import VerticalTab from "Components/Everyday/VerticalTabs//VerticalTab";
import VerticalContainer from "Components/Everyday/VerticalTabs//VerticalContainer";
// // Details Tab
import AccountDetails from "Components/CRM/Account/AccountDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";
// Related Tab
import RelatedDeals from "Components/CRM/View/Related/RelatedDeals";
import RelatedCustomers from "Components/CRM/View/Related/RelatedCustomers";
// Events Tab
import UpcomingEvents from "Components/CRM/View/Events/UpcomingEvents";
import ClosedEvents from "Components/CRM/View/Events/ClosedEvents";
// Notes Tab
import NotesLayout from "Components/Everyday/Notes/NotesLayout";
// Routes
import {
  accountEditPage,
  accountListPage,
  dealNewPage,
  accountNewPage
} from "Helpers/url/crm";
// Actions
import {
  getSingleAccount,
  clearSingleAccount,
  startAccountEdit,
  addNoteAccount,
  setAccountActive,
  deleteAccount,
  transferAccount
} from "Actions";
// Add events dialog

class crm_view_account extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.edit = this.edit.bind(this);
    this.handleNewDeal = this.handleNewDeal.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSingleAccount(id);
  }
  componentWillUnmount() {
    this.props.clearSingleAccount();
  }
  // Change view tab state
  changeTabView = (_, activeIndex) => this.setState({ activeIndex });

  /**
   * Edit
   */
  edit(acct) {
    this.props.startAccountEdit(acct);
    this.props.history.push(accountEditPage);
  }

  /**
   * Transfer Record
   */
  transfer(account) {
    this.props.show("transfer_record", {
      name: account.name,
      action: val => this.handleTransfer(account.id, val)
    });
  }
  handleTransfer(id, newOwner) {
    this.props.transferAccount(id, newOwner);
  }

  /**
   * DELETE RECORD
   */
  handleDelete(acctId) {
    this.props.deleteAccount(acctId);
    setTimeout(() => {
      this.props.history.push(accountListPage);
    }, 500);
  }
  delete(acct) {
    this.props.show("alert_delete", {
      name: acct.name,
      action: () => this.handleDelete(acct.id)
    });
  }

  newEvent() {
    console.log("new events");
  }
  handleNewDeal() {
    this.props.history.push(dealNewPage);
  }
  setInactive(acct) {
    this.props.setAccountActive(acct.id, !acct.isActive);
  }

  /**
   * NEW NOTE
   */
  addNote(note) {
    this.props.addNoteAccount(this.props.match.params.id, note);
  }

  render() {
    const { loading, account, sectionLoading } = this.props.accountToView;
    const { activeIndex } = this.state;
    return loading ? (
      <RctPageLoader />
    ) : account ? (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Account</title>
        </Helmet>
        <PageTitleBar
          title="View Account"
          createLink={accountNewPage}
          extraButtons={[
            account.isActive
              ? {
                  color: "danger",
                  label: "Set Inactive",
                  handleOnClick: () => this.setInactive(account)
                }
              : {
                  color: "success",
                  label: "Set Active",
                  handleOnClick: () => this.setInactive(account)
                }
          ]}
          moreButton={
            <MoreButton>
              {{ handleOnClick: () => this.edit(account), label: "Edit" }}
              {{
                handleOnClick: () => this.transfer(account),
                label: "Transfer"
              }}
              {{ handleOnClick: () => this.delete(account), label: "Delete" }}
            </MoreButton>
          }
        />
        <div className="row">
          <div className="col-md-3">
            <div>
              <AccountCard
                name={account.name}
                ownerName={account.userInfo && account.userInfo.name}
                office={account.baseContact.office}
                isActive={account.isActive}
                industry={account.industry}
                fullAddress={account.fullAddress}
                website={account.baseContact.website}
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
                <AccountDetails account={account} />
                <AddressDetails addressDetails={account.baseContact._address} />
                <DescriptionDetails desc={account.baseContact.info} />
              </div>
              <div>
                <RelatedDeals
                  deals={account.deals}
                  handleNewDeal={this.handleNewDeal}
                />
                <RelatedCustomers customers={account.customers} />
              </div>
              <div>
                <UpcomingEvents events={account.upcomingEvents} />
                <ClosedEvents events={account.closedEvents} />
              </div>
              <div>
                <NotesLayout
                  allNotes={account.notes}
                  handleAddNote={this.addNote}
                />
              </div>
            </VerticalContainer>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <RecordNotFound />
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { accountState } = crmState;
  const { accountToView } = accountState;
  return { accountToView };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      show,
      getSingleAccount,
      clearSingleAccount,
      startAccountEdit,
      addNoteAccount,
      setAccountActive,
      deleteAccount,
      transferAccount
    }
  )(crm_view_account)
);
