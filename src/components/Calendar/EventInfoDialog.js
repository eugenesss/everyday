import React from "react";
import { Col, Row } from "reactstrap";

import DialogRoot from "Components/Dialog/DialogRoot"
import EventInformation from "./EventInformation"

import { convertMonth, convertDay } from "Helpers/helpers";


const EventInfoDialog = ({ classes, handleClose, eventAdd, open, information, dayView, dispatch, ...other }) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="md"
      title={<Col>Event Information</Col> }
    >
      <EventInformation
        information={information}
      />
    </DialogRoot>
  );
}

export default EventInfoDialog;