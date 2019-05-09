import React, { Component } from "react";
import { connect } from "react-redux";

import DateConvert from "Components/Date";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';

class OnSelectSlotDialog extends Component {

  render() {
    const { handleClose, handleAddEventDialog, eventToAdd, ...other } = this.props;
    return (
      <Dialog maxWidth={'lg'} onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">
          { eventToAdd ? (
              <Chip label={eventToAdd ? (<DateConvert dd={eventToAdd.start.getDay()} mm={eventToAdd.start.getMonth()} yyyy={eventToAdd.start.getFullYear()} d={eventToAdd.start.getDay()}/>) : ""} variant="outlined"/>
            ) : null
          }
        </DialogTitle>
        <div>
          <List>
            <ListItem button onClick={() => handleAddEventDialog()}>
              <Fab color="primary" variant="extended" aria-label="Add Event">
                <i class="zmdi zmdi-calendar-note" />
              </Fab>
              <ListItemText primary={"Add Event"} />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}



export default connect(
  null
)(OnSelectSlotDialog);