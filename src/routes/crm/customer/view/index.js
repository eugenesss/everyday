import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import { viewCustomer, viewCustomerEnd, deleteCustomer } from "Actions";

//Page Components
/* import ContactCard from "Components/CRM/Contact/ContactCard";
import { ActivityTab, RelatedTab, DetailsTab } from "Components/CRM/View/Tabs";
import ContactSwipeable from "Components/CRM/View/ContactSwipeable";
import ViewNote from "Components/CRM/Note/ViewNote"; */

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Page Req
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

class crm_view_customer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillMount() {
    // var id = this.props.match.params.id;
    // this.props.viewCustomer(id);
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 600);
  }
  componentWillUnmount() {
    // this.props.viewCustomerEnd();
  }

  render() {
    const { loading } = this.state;
    const { custView, contactView } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Customer</title>
        </Helmet>
        <PageTitleBar title="View Customer" createLink="/crm/new/customer" />
        {loading ? (
          <RctPageLoader />
        ) : (
          <React.Fragment>
            {/* <div className="row">
              <div className="col-md-4">
                <RctCollapsibleCard>
                  <ContactCard customer={custView} contact={contactView} />
                </RctCollapsibleCard>
              </div>

              <div className="col-md-8">
                <RctCollapsibleCard>
                  <ViewNote contact={contactView} />
                </RctCollapsibleCard>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ContactSwipeable>
                  <RelatedTab customer={custView} contact={contactView} />
                  <ActivityTab />
                  <DetailsTab customer={custView} contact={contactView} />
                </ContactSwipeable>
              </div>
            </div> */}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default crm_view_customer;
