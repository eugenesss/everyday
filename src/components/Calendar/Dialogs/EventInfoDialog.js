import React from "react";
import { Col, Row } from "reactstrap";

import DialogRoot from "Components/Dialog/DialogRoot";
import EventInformation from "../EventInformation";

import { convertMonth, convertDay } from "Helpers/helpers";

const EventInfoDialog = ({
  classes,
  edit,
  deleteNow,
  handleClose,
  eventAdd,
  open,
  information,
  dayView,
  dispatch,
  ...other
}) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="md"
      title={<Col>Event Information</Col>}
    >
      {information.length == 1 && (
        <EventInformation
          information={information[0]}
          // edit={(element, value) => edit(element, value)}
          // edit ={(id) => edit(id)}
          deleteNow={itemId => deleteNow(itemId)}
        />
      )}

      {information.length > 1 &&
        information.map((item, index) => {
          return (
            <EventInformation
              key={index}
              information={item}
              // edit ={(id) => edit(id)}
              deleteNow={itemId => deleteNow(itemId)}
            />
          );
        })}
    </DialogRoot>
  );
};

export default EventInfoDialog;
