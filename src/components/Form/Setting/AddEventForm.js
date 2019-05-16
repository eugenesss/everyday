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
      
      eventToCreate
    } = this.props;
    return (
      <Form>
            <Row form className={"align-items-center"}>
              <Col md={5}>
                <TextField
                  value={eventToCreate.startDate}
                  required
                  error={!eventToCreate.startDate}
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
                        // value={this.state.selectedDate}
                        // onClickDay={(e) => {this.handleOnClickDay(e)}}
                      />
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col md={5}>
                <TextField
                  value={eventToCreate.endDate}
                  required
                  error={!eventToCreate.endDate}
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
                  value={eventToCreate.startTime}
                  required
                  className={classes.textField}
                  id="Start Time"
                  label="Start Time"
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col md={6}>
                <TextField
                  value={eventToCreate.startTime}
                  required
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
                className={classes.textField}
                id="Description"
                label="Description"
                margin="normal"
                variant="outlined"
              />
            </Row>
          </Form>
    );
  }
}

UpdatePasswordForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ calendarState }) => {
  const { eventToCreate } = calendarState;
  return { eventToCreate };
};

export default connect(
  mapStateToProps, {}
)(withStyles(styles)(UpdatePasswordForm));
