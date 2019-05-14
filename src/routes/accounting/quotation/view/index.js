import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

class acct_view_quotation extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Quotation</title>
          <meta name="description" content="Everyday Quotation Management" />
        </Helmet>
        <PageTitleBar
          title={"View Quotation"}
          createLink="/acct/new/quotation"
        />
        <div className="row">
          <div className="col-md-4">
            <RctCollapsibleCard>
              <AccountingDetails />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-8">
            <TabsWrapper>
              <div icon="zmdi-shopping-basket text-success" label="QUOTATION">
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

export default acct_view_quotation;
