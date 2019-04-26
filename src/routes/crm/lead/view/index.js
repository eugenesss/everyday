import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { show } from "redux-modal";

import { viewLead, viewLeadEnd, deleteLead } from "Actions";

//Page Components
import LeadCard from "Components/CRM/Leads/LeadCard";
import LeadDetails from "Components/CRM/View/Tabs/Details/LeadDetails";
import AddressDetails from "Components/CRM/View/Tabs/Details/AddressDetails";
import DetailsDescription from "Components/CRM/View/Tabs/Details/DetailsDescription";
import ActivityTab from "Components/CRM/View/Tabs/Activity";
import ViewNote from "Components/CRM/Note/ViewNote";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Req
import FullPageLoader from "Components/RctPageLoader/FullPageLoader";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

class crm_view_lead extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.viewLead(id);
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 800);
  }
  componentWillUnmount() {
    this.props.viewLeadEnd();
  }

  refresh() {
    var id = this.props.match.params.id;
    this.props.viewLead(id);
  }

  toggleEditModal(leadToEdit) {
    this.props.show("EDIT_LEAD_MODAL", {
      leadToEdit: leadToEdit
    });
  }

  handleDelete() {
    var id = this.props.match.params.id;
    this.props.deleteLead(id);
    //Move to another page
    this.setState({ loading: true });
    setTimeout(() => {
      this.props.history.push(`/app/crm/leads`);
    }, 400);
  }

  render() {
    const { loading } = this.state;
    const { leadView, contactView, user } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>CRM | View Lead</title>
        </Helmet>
        <PageTitleBar title="View Lead" match={this.props.match} />
        {loading ? (
          <FullPageLoader />
        ) : (
          <React.Fragment>
            <RctCollapsibleCard colClasses="col-md-12" fullBlock>
              <LeadCard lead={leadView} contact={contactView} />
            </RctCollapsibleCard>
            <RctCollapsibleCard colClasses="col-md-7">
              <ViewNote contact={contactView} />
            </RctCollapsibleCard>
            <RctCollapsibleCard heading="Details" colClasses="col-md-12">
              <LeadDetails contact={contactView} lead={leadView} />
              <br />
              <AddressDetails contact={contactView} />
              <br />
              <DetailsDescription related={contactView} />
            </RctCollapsibleCard>
            <RctCollapsibleCard colClasses="col-md-12" heading="Activities">
              <ActivityTab lead={leadView} />
            </RctCollapsibleCard>
          </React.Fragment>
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
    mapStateToProps,
    { viewLead, viewLeadEnd, show, deleteLead }
  )(crm_view_lead)
);
