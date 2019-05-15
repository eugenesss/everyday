import React, { Component } from "react";
import { connectModal } from "redux-modal";
import DialogRoot from "Components/Dialog/DialogRoot";

// Components
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";

class ViewInvoiceDialog extends Component {
  state = {};
  render() {
    const { show, handleHide, viewInvoice } = this.props;

    return (
      <DialogRoot show={show} handleHide={handleHide} size="md" title="Invoice">
        <AccountingDetails type="invoice" />
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
      </DialogRoot>
    );
  }
}

export default connectModal({ name: "view_invoice", destroyOnHide: true })(
  ViewInvoiceDialog
);
