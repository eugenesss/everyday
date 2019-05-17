import React, { Component } from "react";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

// Credit Note Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Invoice Credited Tab
import CreditedInvoices from "Components/Accounting/CreditNote/CreditedInvoices";

// Activity Log Tab
import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

class acct_view_credit_note extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <RctCollapsibleCard>
            <AccountingDetails type="credit_note" />
          </RctCollapsibleCard>
        </div>
        <div className="col-md-8">
          <TabsWrapper>
            <div
              icon="zmdi-shopping-cart-plus text-success"
              label="CREDIT NOTE"
            >
              <ViewTemplate />
            </div>
            <div
              icon="zmdi-shopping-cart text-warning"
              label="INVOICE CREDITED"
            >
              <CreditedInvoices />
            </div>
            <div icon="zmdi-pizza text-info" label="ACTIVITY LOG">
              <ActivityLog />
            </div>
            <div icon="zmdi-assignment text-danger" label="NOTES">
              <div className="row">
                <div className="col-md-5">
                  <NewNote /* onAddNote="function" */ />
                </div>
                <div className="col-md-7">
                  <DisplayAllNotes />
                </div>
              </div>
            </div>
          </TabsWrapper>
        </div>
      </div>
    );
  }
}

export default acct_view_credit_note;
