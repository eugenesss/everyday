import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from "react-big-calendar";
import ReactCalendar from "react-calendar";
import SwipeableViews from "react-swipeable-views";
import moment from "moment";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomToolbar from "Components/Calendar/CustomToolbar";
import CalendarAgenda from "Components/Calendar/CalendarAgenda";
import SelectSlotDialog from "Components/Calendar/SelectSlotDialog";
import AddEventDialog from "Components/Calendar/AddEventDialog";

import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { getAllEvents } from "Actions";

import {
  onChangeEventView,
  onChangeCalendarView,
  onChangeDayView,
  showSelectedSlot,
  hideSelectedSlot,
  showCreateEvent,
  hideCreateEvent
} from "Actions";

function TabContainer({ children, classes }) {
  return (
    <Typography component="div" className={classes.tabs}>
      {children}
    </Typography>
  );
}

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "auto"
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  tabs: {
    marginLeft: 8
  },
  displayBlock: {
    display: "block"
  },
  displayInlineTable: {
    display: "inline-table"
  },
  agendaToday: {
    backgroundColor: "primary"
  },
  agendaTomorrow: {
    backgroundColor: "warning"
  },
  agandaDayAft: {
    backgroundColor: "success"
  }
});

class CalendarLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    const {
      match,
      classes,

      eventView,
      eventViewOptions,
      showEvents,
      viewIndex,
      dayView,
      isSlotSelected,
      slotSelected,
      isAddEvent,
      eventAdd,

      onChangeEventView,
      onChangeCalendarView,
      onChangeDayView,
      showSelectedSlot,
      hideSelectedSlot,
      showCreateEvent,
      hideCreateEvent
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
                  className: classes.menu
                }
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
                <Tab label="Month" />
                <Tab label="Week" />
                <Tab label="Day" />
              </Tabs>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col md={3} className={classes.displayInlineTable}>
            <h2 className={classes.textField + " mt-20"}>Events Today</h2>
            <CalendarAgenda
              showEvents={showEvents}
              classes={classes}
              defaultDate={"today"}
            />
            <h2 className={classes.textField + " mt-20"}>Events Tomorrow</h2>
            <CalendarAgenda
              showEvents={showEvents}
              classes={classes}
              defaultDate={"tomorrow"}
            />
            <h2 className={classes.textField + " mt-20"}>
              Events Day After Tomorrow
            </h2>
            <CalendarAgenda
              showEvents={showEvents}
              classes={classes}
              defaultDate={"dayAftTom"}
            />
          </Col>
          <Col md={9}>
            <SwipeableViews
              axis={"x"}
              index={viewIndex}
              onChangeIndex={onChangeCalendarView}
            >
              <TabContainer classes={classes}>
                <RctCollapsibleCard>
                  <BigCalendar
                    selectable
                    events={showEvents}
                    views={["month"]}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date()}
                    onSelectSlot={showSelectedSlot}
                    components={{
                      toolbar: CustomToolbar
                    }}
                  />
                </RctCollapsibleCard>
              </TabContainer>
              <TabContainer classes={classes}>
                <RctCollapsibleCard>
                  <BigCalendar
                    selectable
                    events={showEvents}
                    defaultView={"week"}
                    views={["week"]}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date()}
                    onSelectSlot={showSelectedSlot}
                    components={{
                      toolbar: CustomToolbar
                    }}
                  />
                </RctCollapsibleCard>
              </TabContainer>
              <TabContainer classes={classes}>
                <Row>
                  <Col md={3}>
                    <RctCollapsibleCard customClasses={"center"}>
                      <Row className="justify-content-center">
                        <ReactCalendar
                          value={dayView}
                          onClickDay={e => {
                            onChangeDayView(e);
                          }}
                        />
                      </Row>
                    </RctCollapsibleCard>
                  </Col>
                  <Col>
                    <RctCollapsibleCard>
                      <BigCalendar
                        selectable
                        date={dayView}
                        onNavigate={date => {
                          onChangeDayView(date);
                        }}
                        events={showEvents}
                        defaultView={"day"}
                        views={["day"]}
                        step={60}
                        showMultiDayTimes
                        onSelectSlot={showSelectedSlot}
                        components={{
                          toolbar: CustomToolbar
                        }}
                      />
                    </RctCollapsibleCard>
                  </Col>
                </Row>
              </TabContainer>
            </SwipeableViews>
          </Col>
        </Row>
        <SelectSlotDialog
          open={isSlotSelected}
          handleClose={hideSelectedSlot}
          slotSelected={slotSelected}
          showCreateEvent={showCreateEvent}
        />
        <AddEventDialog
          open={isAddEvent}
          handleClose={hideCreateEvent}
          eventAdd={eventAdd}
        />
      </React.Fragment>
    );
  }
}

CalendarLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

// map state to props
const mapStateToProps = ({ calendarState }) => {
  const {
    eventView,
    eventViewOptions,
    showEvents,
    viewIndex,
    dayView,
    isSlotSelected,
    slotSelected,
    isAddEvent,
    eventAdd
  } = calendarState;
  return {
    eventView,
    eventViewOptions,
    showEvents,
    viewIndex,
    dayView,
    isSlotSelected,
    slotSelected,
    isAddEvent,
    eventAdd
  };
};

export default connect(
  mapStateToProps,
  {
    onChangeEventView,
    onChangeCalendarView,
    onChangeDayView,
    showSelectedSlot,
    hideSelectedSlot,
    showCreateEvent,
    hideCreateEvent,
    getAllEvents
  }
)(withStyles(styles)(CalendarLayout));
