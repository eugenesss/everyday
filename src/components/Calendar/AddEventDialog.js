import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form } from "reactstrap";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import ReactCalendar from 'react-calendar'

import DateConvert from "Components/Date";

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Tooltip from "@material-ui/core/Tooltip";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  dialogPaper: {
    overflow: "visible"
  },
  
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  calendar: {
    width: "auto"
  }
});

class AddEventDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, handleClose, eventToAdd, ...other } = this.props;
    var start, sDate, sMonth, sYear, sDay, dateStart
    var end, eDate, eMonth, eYear, dateEnd
    if(eventToAdd != null){
      start = eventToAdd.start
      sDate = start.getDate()
      sMonth = start.getMonth() + 1
      sYear = start.getFullYear()
      sDay = start.getDay()
      end = eventToAdd.end
      eDate = end.getDate()
      eMonth = end.getMonth() + 1
      eYear = end.getFullYear()
      dateStart = sDate + " / " + sMonth + " / " + sYear
      dateEnd =  eDate + " / " + eMonth + " / " + eYear
    }
    
    return (
      <Dialog fullWidth maxWidth={'md'} PaperProps={{ className: classes.dialogPaper }} onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title rounded bg-primary">
          <Row>
            <Col>Add Event</Col> 
            <Col><div className="float-right"><Chip label={eventToAdd ? (<DateConvert dd={sDate} mm={sMonth} yyyy={sYear} d={sDay}/>) : ""} variant="outlined"/></div></Col> 
          </Row>
          
        </DialogTitle>
        <DialogContent>
          <Form>
            <Row form className={"align-items-center"}>
              <Col md={6}>
                <TextField
                  value={dateStart}
                  required
                  error={!dateStart}
                  className={classes.textField}
                  id="Start Date"
                  label="Start Date"
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col md={5}>
                <TextField
                  value={dateEnd}
                  required
                  error={!dateEnd}
                  className={classes.textField}
                  id="End Date"
                  label="End Date"
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col md={1}>
                <UncontrolledDropdown nav className="list-inline-item notification-dropdown">
                  <DropdownToggle nav className="p-0">
                    <Tooltip title="Calendar" placement="bottom">
                      <Button variant="contained" color="primary">Date</Button>
                    </Tooltip>
                  </DropdownToggle>
                  <DropdownMenu>
                    <div className="dropdown-content" style={{width: "auto !important"}}>
                      <ReactCalendar 
                        className={classes.calendar}
                        // value={this.state.selectedDate}
                        // onClickDay={(e) => {this.handleOnClickDay(e)}}
                      />
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <TextField
                  value={"09 : 00 : 00 AM"}
                  required
                  //error={!dateEnd}
                  className={classes.textField}
                  id="Start Time"
                  label="Start Time"
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col md={6}>
                <TextField
                  value={"11 : 00 : 00 AM"}
                  required
                  //error={!dateEnd}
                  className={classes.textField}
                  id="End Time"
                  label="End Time"
                  margin="normal"
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row form>
              <TextField
                value={""}
                required
                fullWidth
                //error={!dateEnd}
                className={classes.textField}
                id="Title"
                label="Title"
                margin="normal"
                variant="outlined"
              />
            </Row>
            <Row form>
              <TextField
                value={""}
                required
                fullWidth
                multiline
                rows="5"
                rowsMax="8"
                //error={!dateEnd}
                className={classes.textField}
                id="Description"
                label="Description"
                margin="normal"
                variant="outlined"
              />
            </Row>
            <Row className="justify-content-end" style={{marginRight: "0.5rem"}}>
              <span style={{display: "inline-block"}}>
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white mb-10 mt-20"
                  onClick={handleClose}
                  //disabled={}
                >
                  Add
                </Button>
              </span>
        </Row> 
          </Form>
        </DialogContent>
      </Dialog>
    );
  }
}

AddEventDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null
)(withStyles(styles)(AddEventDialog));