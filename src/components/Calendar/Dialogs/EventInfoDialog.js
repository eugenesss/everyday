import React from "react";

import DialogRoot from "Components/Dialog/DialogRoot";
import EventInformation from "../EventInformation";

const EventInfoDialog = ({ deleteNow, handleClose, open, information }) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="xs"
      title="Event Details"
    >
      <EventInformation
        information={information[0]}
        deleteNow={itemId => deleteNow(itemId)}
      />
    </DialogRoot>
  );
};

export default EventInfoDialog;
