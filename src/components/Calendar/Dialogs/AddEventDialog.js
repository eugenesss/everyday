import React from "react";
import { Col, Row } from "reactstrap";

import DialogRoot from "Components/Dialog/DialogRoot"
import AddEventForm from "Components/Form/Setting/AddEventForm"

import { convertMonth, convertDay } from "Helpers/helpers";


const AddEventDialog = ({ classes, handleClose, eventAdd, open, dayView, dispatch, ...other }) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="md"
      title={<Col>Add Event</Col> }
    >
      <AddEventForm
        dayView={dayView}
      />
    </DialogRoot>
  );
}

export default AddEventDialog;