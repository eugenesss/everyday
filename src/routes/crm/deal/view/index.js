import React, { Component } from "react";
import { connect } from "react-redux";
import { viewDeal, viewDealEnd, deleteDeal } from "Actions";

//Page Components
import DealCard from "Components/CRM/Deal/DealCard";
import AccountCard from "Components/CRM/Account/AccountCard";
import ContactCard from "Components/CRM/Contact/ContactCard";
import { ActivityTab, RelatedTab, DetailsTab } from "Components/CRM/View/Tabs";
import ContactSwipeable from "Components/CRM/View/ContactSwipeable";
import SelectDealStage from "Components/CRM/Deal/Stage/SelectDealStage";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import IntlMessages from "Util/IntlMessages";

//Page Req
import FullPageLoader from "Components/RctPageLoader/FullPageLoader";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import ViewNote from "Components/CRM/Note/ViewNote";

class crm_view_deal extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.viewDeal(id);
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 800);
  }

  componentWillUnmount() {
    this.props.viewDealEnd();
  }
  handleDelete() {
    var id = this.props.match.params.id;
    this.props.deleteDeal(id);
    //Move to another page
    this.setState({ loading: true });
    setTimeout(() => {
      this.props.history.push(`/ocrm/crm/deals`);
    }, 400);
  }

  render() {
    const { loading } = this.state;
    const { dealView } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>CRM | View Deal</title>
        </Helmet>
        <PageTitleBar
          title="View Deal"
          match={this.props.match}
          backButton
          addButton="/ocrm/crm/create/deals"
          moreButton={{
            edit: { modal: "EDIT_DEAL_MODAL", var: { dealToEdit: dealView } },
            delete: {
              title: "Delete Deal",
              message: "Are you sure you wish to delete this Deal?",
              action: this.handleDelete.bind(this)
            }
          }}
        />
        {loading ? (
          <FullPageLoader />
        ) : (
          <React.Fragment>
            <div className="row">
              <RctCollapsibleCard fullBlock colClasses="col-md-12">
                <DealCard deal={dealView} />
              </RctCollapsibleCard>
            </div>
            <div className="row">
              <RctCollapsibleCard
                colClasses="col-md-12"
                heading="Stage"
                fullBlock
              >
                <SelectDealStage deal={dealView} />
              </RctCollapsibleCard>
            </div>
            <div className="row">
              <RctCollapsibleCard colClasses="col-md-7">
                <ViewNote deal={dealView} />
              </RctCollapsibleCard>
            </div>
            <div className="row">
              <RctCollapsibleCard
                colClasses="col-md-6"
                heading="Related Account"
                fullBlock
              >
                {dealView.account ? (
                  <AccountCard account={dealView.account} />
                ) : (
                  <RctSectionLoader />
                )}
              </RctCollapsibleCard>
              <RctCollapsibleCard
                colClasses="col-md-6"
                heading="Related Customer"
                fullBlock
              >
                {dealView.customer ? (
                  <ContactCard
                    customer={dealView.customer}
                    contact={dealView.customer.contact}
                  />
                ) : (
                  <div style={{ padding: "8% 6%", textAlign: "center" }}>
                    <p>No Customer Linked</p>
                  </div>
                )}
              </RctCollapsibleCard>
            </div>
            <ContactSwipeable>
              <RelatedTab deal={dealView} />
              <ActivityTab />
              <DetailsTab deal={dealView} />
            </ContactSwipeable>
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
  mapStateToProps,
  { viewDeal, viewDealEnd, deleteDeal }
)(crm_view_deal);
