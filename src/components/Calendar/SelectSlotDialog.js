import React, { Component } from "react";
import { connect } from "react-redux";

import { convertMonth, convertDay } from "Helpers/helpers";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

class SelectSlotDialog extends Component {

  render() {
    const { handleClose, showCreateEvent, slotSelected, dispatch, ...other } = this.props;
    return (
      <Dialog fullWidth maxWidth={'xs'} onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">
          { slotSelected ? (
              convertDay(slotSelected.start.getDay()) + " - " +
              slotSelected.start.getDate() + " / " + 
              convertMonth(slotSelected.start.getMonth()) + " / " + 
              slotSelected.start.getFullYear()
            ) : ""
          }
        </DialogTitle>
        <List>
          <ListItem button onClick={showCreateEvent}>
            <Fab color="primary" variant="extended" aria-label="Add Event">
              <i className="zmdi zmdi-calendar-note" />
            </Fab>
            <ListItemText primary={"Add Event"} />
          </ListItem>
        </List>
      </Dialog>
    );
  }
}



export default connect(
  null
)(SelectSlotDialog);