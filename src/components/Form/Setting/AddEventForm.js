import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form  } from "reactstrap";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import ReactCalendar from 'react-calendar'

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Tooltip from "@material-ui/core/Tooltip";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { addEvent, onChangeAddEvent } from "Actions"

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

class UpdatePasswordForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      classes,
      
      eventAdd,

      addEvent,
      onChangeAddEvent,
    } = this.props;
    return (
      <Form>
        <Row form className={"align-items-center"}>
          <Col md={5}>
            <TextField
              value={eventAdd.startDate}
              required
              error={!eventAdd.startDate}
              className={classes.textField}
              id="Start Date"
              label="Start Date"
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
                  />
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col md={5}>
            <TextField
              value={eventAdd.endDate}
              required
              error={!eventAdd.endDate}
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
                  />
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <TextField
              value={eventAdd.startTime || ''}
              required
              className={classes.textField}
              onChange={ e => onChangeAddEvent('startTime ', e.target.value)}
              id="startTime"
              label="Start Time"
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              value={eventAdd.endTime || ''}
              required
              className={classes.textField}
              onChange={ e => onChangeAddEvent('endTime', e.target.value)}
              id="endTime"
              label="End Time"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form>
          <TextField
            value={eventAdd.title || ''}
            required
            fullWidth
            className={classes.textField}
            onChange={ e => onChangeAddEvent('title', e.target.value)}
            id="title"
            label="Title"
            margin="normal"
            variant="outlined"
          />
        </Row>
        <Row form>
          <TextField
            value={eventAdd.description}
            required
            fullWidth
            multiline
            rows="5"
            rowsMax="8"
            className={classes.textField}
            onChange={ e => onChangeAddEvent('description', e.target.value)}
            id="description"
            label="Description"
            margin="normal"
            variant="outlined"
          />
        </Row>
        <Row className={"justify-content-end " + classes.textField}>
          <Button
            variant="contained"
            color="primary"
            className="text-white mb-10 mt-20"
            onClick={addEvent}
          >
            Add
          </Button>
        </Row> 
      </Form>
    );
  }
}

UpdatePasswordForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ calendarState }) => {
  const { eventAdd } = calendarState;
  return { eventAdd };
};

export default connect(
  mapStateToProps,
  { addEvent, onChangeAddEvent }
)(withStyles(styles)(UpdatePasswordForm));
