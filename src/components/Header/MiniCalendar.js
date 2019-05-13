/**
 * Notification Component
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import ReactCalendar from 'react-calendar'
import { withRouter } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { onChangeDayView } from 'Actions';

const styles = () => ({
  calendar: {
    width: "auto"
  },
});

class MiniCalendar extends Component {
  state = {
    selectedDate: new Date(),
  };

  handleOnClickDay(newDate) {
    this.props.onChangeDayView(newDate)
    this.props.history.push('/app/calendar/')
  }

  render() {
    const { classes } = this.props
    return (
      <UncontrolledDropdown
        nav
        className="list-inline-item notification-dropdown"
      >
        <DropdownToggle nav className="p-0">
          <Tooltip title="Calendar" placement="bottom">
            <IconButton className="text-white" aria-label="calendar">
              <i className="zmdi zmdi-calendar" />
            </IconButton>
          </Tooltip>
        </DropdownToggle>
        <DropdownMenu>
          <div className="dropdown-content" style={{width: "auto !important"}}>
            <div className="dropdown-top  rounded-top bg-primary">
              <span className="text-white font-weight-bold">
                <div>Calendar</div>
              </span>
            </div>
            <ReactCalendar 
              className={classes.calendar}
              value={this.state.selectedDate}
              onClickDay={(e) => {this.handleOnClickDay(e)}}
            />
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

MiniCalendar.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withRouter(
  connect(
    null,
    { onChangeDayView }
  )
  (withStyles(styles)(MiniCalendar))
);