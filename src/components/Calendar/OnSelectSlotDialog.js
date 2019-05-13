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
    const { handleClose, showCreateEvent, slotSelected, dispatch, ...other } = this.props;
    return (
      <Dialog maxWidth={'lg'} onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">
          { slotSelected ? (
              <Chip label={slotSelected ? (<DateConvert dd={slotSelected.start.getDate()} mm={slotSelected.start.getMonth()} yyyy={slotSelected.start.getFullYear()} d={slotSelected.start.getDay()}/>) : ""} variant="outlined"/>
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
)(OnSelectSlotDialog);