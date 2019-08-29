import React from "react";
import { connectModal } from "redux-modal";
import DialogRoot from "Components/Dialog/DialogRoot";
import NewEventForm from "Components/Form/Calendar/NewEventForm";

const AddEventDialog = ({ handleHide, show, dayView, addEvent }) => {
  return (
    <DialogRoot show={show} handleHide={handleHide} size="sm" title="Add Event">
      <NewEventForm dayView={dayView} addEvent={addEvent} />
    </DialogRoot>
  );
};

export default connectModal({ name: "add_event" })(AddEventDialog);
