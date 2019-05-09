import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import { viewLead, viewLeadEnd, deleteLead } from "Actions";

//Lead Components
import LeadCard from "Components/CRM/Lead/LeadCard";
import LeadDetails from "Components/CRM/Lead/LeadDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
import DescriptionDetails from "Components/CRM/View/Details/DescriptionDetails";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Req
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

class crm_view_lead extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    // var id = this.props.match.params.id;
    // this.props.viewLead(id);
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 800);
  }

  render() {
    const { loading } = this.state;
    const { lead } = this.props;

    return (
      <React.Fragment>
        {loading ? (
          <RctPageLoader />
        ) : lead ? (
          <React.Fragment>
            <Helmet>
              <title>Everyday | View Lead</title>
            </Helmet>
            <PageTitleBar title="View Lead" createLink="/crm/new/lead" />
            <RctCollapsibleCard fullBlock>
              <LeadCard
                fullName="Lead One"
                companyName="Company One"
                status="Contacted"
                ownerName="Admin Admin"
              />
            </RctCollapsibleCard>
            <TabsWrapper>
              <div icon="zmdi-coffee text-success" label="DETAILS">
                <React.Fragment>
                  <LeadDetails />
                  <AddressDetails />
                  <DescriptionDetails />
                </React.Fragment>
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
const mapStateToProps = ({ lead, authUser }) => {
  const { leadView, contactView } = lead;
  const { user } = authUser;
  return { leadView, contactView, user };
};

export default withRouter(
  connect(
    null,
    {}
  )(crm_view_lead)
);
