import React from "react";
import { Col, Row } from "reactstrap";

import DialogRoot from "Components/Dialog/DialogRoot"
import AddEventForm from "Components/Form/Setting/AddEventForm"

import { convertMonth, convertDay } from "Helpers/helpers";


const AddEventDialog = ({ classes, handleClose, eventAdd, open, dispatch, ...other }) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="md"
      title={
        <Row>
          <Col>Add Event</Col> 
          <Col>
            <div className="float-right">
              {open ? (
                convertDay(eventAdd.constants.sDate.getDay()) + " - " +
                eventAdd.constants.sDate.getDate() + " / " + 
                convertMonth(eventAdd.constants.sDate.getMonth()) + " / " +
                eventAdd.constants.sDate.getFullYear()
              ) : "" }
            </div>
          </Col> 
        </Row>
      }
    >
      <AddEventForm/>
    </DialogRoot>
  );
}

export default AddEventDialog;