import React, { Component } from "react";
import { connectModal } from "redux-modal";
import DialogRoot from "Components/Dialog/DialogRoot";

// Components
import TabsWrapper from "Components/CRM/View/Tabs/TabsWrapper";
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

class ViewCreditNoteDialog extends Component {
  state = {};
  render() {
    const { show, handleHide, viewCreditNote } = this.props;

    return (
      <DialogRoot
        show={show}
        handleHide={handleHide}
        size="md"
        title="View Credit Note"
      >
        <TabsWrapper>
          <div icon="zmdi-shopping-cart-plus text-success" label="CREDIT NOTE">
            {viewCreditNote}
            <ViewTemplate />
          </div>
          <div icon="zmdi-shopping-cart text-warning" label="INVOICE CREDITED">
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

export default connectModal({ name: "view_credit_note", destroyOnHide: true })(
  ViewCreditNoteDialog
);
