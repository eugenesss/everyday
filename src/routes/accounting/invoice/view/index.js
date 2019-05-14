import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";

class acct_view_invoice extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Invoice</title>
          <meta name="description" content="Everyday Invoice Management" />
        </Helmet>
        <PageTitleBar title={"View Invoice"} createLink="/acct/new/invoice" />
        <div className="row">
          <div className="col-md-4">
            <RctCollapsibleCard>
              <AccountingDetails invoice />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-8">
            <TabsWrapper>
              <div icon="zmdi-shopping-cart text-success" label="INVOICE">
                <ViewTemplate />
              </div>
              <div icon="zmdi-pizza text-warning" label="EVENTS">
                Activities
              </div>
              <div icon="zmdi-local-florist text-info" label="REMINDERS">
                Reminders
              </div>
              <div icon="zmdi-assignment text-danger" label="NOTES">
                Notes
              </div>
            </TabsWrapper>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default acct_view_invoice;
