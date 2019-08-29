import React from "react";

import { convertMonth, convertDay } from "Helpers/helpers";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";

import { Event } from "@material-ui/icons";

import DialogRoot from "Components/Dialog/DialogRoot";

const SelectSlotDialog = ({
  handleClose,
  showCreateEvent,
  slotSelected,
  open,
  ...other
}) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="xs"
      title={
        slotSelected
          ? convertDay(slotSelected.start.getDay()) +
            " - " +
            slotSelected.start.getDate() +
            " / " +
            convertMonth(slotSelected.start.getMonth()) +
            " / " +
            slotSelected.start.getFullYear()
          : ""
      }
    >
      <List>
        <ListItem button onClick={showCreateEvent}>
          <Fab color="primary" aria-label="Add Event">
            <Event className="text-white" />
          </Fab>
          <ListItemText className="ml-20" primary={"Add Event"} />
        </ListItem>
      </List>
    </DialogRoot>
  );
};

export default SelectSlotDialog;
