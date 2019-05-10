import React, { Component } from "react";
import { connect } from "react-redux";
// import { viewDeal, viewDealEnd, deleteDeal } from "Actions";

//Page Components
import DealCard from "Components/CRM/Deal/DealCard";
import DealDetails from "Components/CRM/Deal/DealDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";
import ViewDealStage from "Components/CRM/View/Deal/ViewDealStage";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Req
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

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
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                Activities
              </div>
              <div icon="zmdi-local-florist text-info" label="REMINDERS">
                Reminders
              </div>
              <div icon="zmdi-assignment text-danger" label="NOTES">
                {/*  <ViewNote /> */}
              </div>
            </TabsWrapper>

            {/* <div className="row">
            </div>
            <div className="row">
              <RctCollapsibleCard
                colClasses="col-md-12"
                heading="Stage"
                fullBlock
              >
                <ViewDealStage deal={dealView} />
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
            </ContactSwipeable> */}
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
