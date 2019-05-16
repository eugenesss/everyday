import React from "react";
import { Col, Row } from "reactstrap";

import DialogRoot from "Components/Dialog/DialogRoot"
import AddEventForm from "Components/Form/Setting/AddEventForm"

import { convertMonth, convertDay } from "Helpers/helpers";


const AddEventDialog = ({ classes, handleClose, eventToCreate, open, dispatch, ...other }) => {
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
                convertDay(eventToCreate.constants.sDate.getDay()) + " - " +
                eventToCreate.constants.sDate.getDate() + " / " + 
                convertMonth(eventToCreate.constants.sDate.getMonth()) + " / " +
                eventToCreate.constants.sDate.getFullYear()
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