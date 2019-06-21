import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";
//Page Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
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

// Actions
import {
  getSingleAccount,
  clearSingleAccount,
  startAccountEdit
} from "Actions";
// addNoteToAccount(acctID), onNoteChange, clearNote
// Add events dialog
// Delete Account, Transfer Account

class crm_view_account extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.edit = this.edit.bind(this);
    this.handleNewDeal = this.handleNewDeal.bind(this);
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

  reload() {
    console.log("reload");
  }
  edit(acct) {
    this.props.startAccountEdit(acct);
    this.props.history.push("/app/crm/accounts/edit");
  }
  delete() {
    console.log("delete");
  }
  newEvent() {
    console.log("new events");
  }
  handleNewDeal() {
    this.props.history.push("/app/crm/new/deal");
  }

  render() {
    const { loading, account } = this.props.accountToView;
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
          createLink="/crm/new/account"
          moreButton={
            <MoreButton>
              {{ handleOnClick: this.reload.bind(this), label: "Reload" }}
              {{ handleOnClick: () => this.edit(account), label: "Edit" }}
              {{ handleOnClick: this.delete.bind(this), label: "Delete" }}
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
            >
              <div>
                <AccountDetails account={account} />
                <AddressDetails addressDetails={account.baseContact._address} />
                <DescriptionDetails desc={account.description} />
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
                <NotesLayout allNotes={account.notes} handleAddNote />
              </div>
            </VerticalContainer>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <PageErrorMessage
        heading="Not Found"
        message="This could be because of a network problem or the record might have been deleted"
      />
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
    { getSingleAccount, clearSingleAccount, startAccountEdit }
  )(crm_view_account)
);
