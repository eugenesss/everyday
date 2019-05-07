import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import { viewLead, viewLeadEnd, deleteLead } from "Actions";

//Page Components
import LeadCard from "Components/CRM/Lead/LeadCard";
import LeadDetails from "Components/CRM/View/Details/LeadDetails";
import AddressDetails from "Components/CRM/View/Details/AddressDetails";
//import DetailsDescription from "Components/CRM/View/Tabs/Details/DetailsDescription";
// import ActivityTab from "Components/CRM/View/Tabs/Activity";
// import ViewNote from "Components/CRM/Note/ViewNote";

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
              <LeadCard lead={lead} loading={loading} />
            </RctCollapsibleCard>
            <TabsWrapper>
              <div
                icon={
                  <i className="zmdi-hc-lg zmdi zmdi-coffee text-success" />
                }
                label="DETAILS"
              >
                <React.Fragment>
                  {/* 
                <LeadDetails lead={leadView} />
                <br />
                <AddressDetails contact={contactView} />
                <br />
                <DetailsDescription related={contactView} />
                 */}
                </React.Fragment>
              </div>

              <div
                icon={
                  <i className="zmdi-hc-lg zmdi zmdi-assignment text-primary" />
                }
                label="ACTIVITIES" /* contact={contactView} */
              >
                Activities
              </div>
              <div
                icon={
                  <i className="zmdi-hc-lg zmdi zmdi-assignment text-primary" />
                }
                label="REMINDERS" /* contact={contactView} */
              >
                Reminders
              </div>
              <div
                icon={
                  <i className="zmdi-hc-lg zmdi zmdi-assignment text-primary" />
                }
                label="NOTES" /* contact={contactView} */
              >
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
