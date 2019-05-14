import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import ReactCalendar from 'react-calendar'
import SwipeableViews from 'react-swipeable-views';
import moment from 'moment';

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CalendarToolbar from "Components/Calendar/CalendarToolbar";
import SelectSlotDialog from "Components/Calendar/SelectSlotDialog";
import AddEventDialog from "Components/Calendar/AddEventDialog";

import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { 
  onChangeEventView,
  onChangeCalendarView,
  onChangeDayView,
  showSelectedSlot,
  hideSelectedSlot,
  showCreateEvent,
  hideCreateEvent,
} from "Actions";

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ paddingLeft: 8}}>
      {children}
    </Typography>
  );
}

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  tabs: {
    marginLeft: 8
  }
});

class CalendarLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onChangeEventView("My Calendar")
  }

  render() {
    const { 
      match, classes,

      eventView,
      eventViewOptions,
      showEvents,
      viewIndex,
      dayView,
      isSlotSelected,
      slotSelected,
      isCreateEvent,
      eventToCreate,
      
      onChangeEventView,
      onChangeCalendarView,
      onChangeDayView,
      showSelectedSlot,
      hideSelectedSlot,
      showCreateEvent,
      hideCreateEvent,
    } = this.props;
    return (
      <React.Fragment>
        <Row className={"align-items-center"}>
          <Col md={3}>
            <TextField
              value={eventView}
              fullWidth
              select
              id="Calendar"
              label="Calendar"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              onChange={e => onChangeEventView(e.target.value)}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
              variant="outlined"
            >
              {eventViewOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Col>
          <Col className={classes.tabs}>
            <AppBar position="static" color="default">
              <Tabs
                value={viewIndex}
                onChange={onChangeCalendarView}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Month"/>
                <Tab label="Week"/>
                <Tab label="Day"/>
              </Tabs>
            </AppBar>
          </Col>
        </Row>
        <SwipeableViews
          axis={'x'}
          index={viewIndex}
          onChangeIndex={onChangeCalendarView}
        >
          <TabContainer>
            <RctCollapsibleCard>
              <BigCalendar
                selectable
                events={showEvents}
                views={["month"]}
                step={30}
                showMultiDayTimes
                defaultDate={new Date}
                onSelectSlot={showSelectedSlot}
                components={{
                  toolbar: CalendarToolbar
                }}
              />
            </RctCollapsibleCard>
          </TabContainer>
          <TabContainer>
            <RctCollapsibleCard>
              <BigCalendar
                selectable
                events={showEvents}
                defaultView={"week"}
                views={["week"]}
                step={30}
                showMultiDayTimes
                defaultDate={new Date}
                onSelectSlot={showSelectedSlot}
                components={{
                  toolbar: CalendarToolbar
                }}
              />
            </RctCollapsibleCard>
          </TabContainer>
          <TabContainer>
            <Row>
              <Col md={3}> 
                <RctCollapsibleCard customClasses={"center"}>
                  <Row className="justify-content-center">
                    <ReactCalendar
                      value={dayView}
                      onClickDay={(e) => { onChangeDayView(e) }}
                    />
                  </Row>
                </RctCollapsibleCard>
              </Col>
              <Col>
                <RctCollapsibleCard>
                  <BigCalendar
                    selectable
                    date={dayView}
                    onNavigate={(date) => { onChangeDayView(date) }}
                    events={showEvents}
                    defaultView={"day"}
                    views={["day"]}
                    step={30}
                    showMultiDayTimes
                    onSelectSlot={showSelectedSlot}
                    components={{
                      toolbar: CalendarToolbar
                    }}
                  />
                </RctCollapsibleCard>
              </Col>
            </Row>
          </TabContainer>
        </SwipeableViews>
        <SelectSlotDialog
          open={isSlotSelected}
          handleClose={hideSelectedSlot}
          slotSelected={slotSelected}
          showCreateEvent={showCreateEvent}
        />
        <AddEventDialog
          open={isCreateEvent}
          handleClose={hideCreateEvent}
          eventToCreate={eventToCreate}
        />
      </React.Fragment>
    );
  }
}

CalendarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

// map state to props
const mapStateToProps = ({ calendarState }) => {
  const { eventView, eventViewOptions, showEvents, viewIndex, dayView, isSlotSelected, slotSelected, isCreateEvent, eventToCreate } = calendarState;
  return { eventView, eventViewOptions,  showEvents, viewIndex, dayView, isSlotSelected, slotSelected, isCreateEvent, eventToCreate };
};

export default connect(
  mapStateToProps,
  { onChangeEventView, onChangeCalendarView, onChangeDayView, showSelectedSlot, hideSelectedSlot, showCreateEvent, hideCreateEvent,}
)(withStyles(styles)(CalendarLayout));
