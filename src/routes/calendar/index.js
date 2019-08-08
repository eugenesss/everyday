import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";

import BigCalendar from "react-big-calendar";
import moment from "moment";

import CustomToolbar from "Components/Calendar/CustomToolbar";
// import CalendarAgenda from "Components/Calendar/CalendarAgenda";
import SelectSlotDialog from "Components/Calendar/Dialogs/SelectSlotDialog";
import AddEventDialog from "Components/Calendar/Dialogs/AddEventDialog";
import EventInfoDialog from "Components/Calendar/Dialogs/EventInfoDialog";

// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import { getAllEvents, deleteEvent } from "Actions";

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
    // marginLeft: 8
  },
  displayBlock: {
    display: "block"
  },
  displayInlineTable: {
    display: "inline-table"
  }
});
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInfoOpen: false,
      eventInfo: {},
      isSlotSelected: false,
      slotSelected: null,
      showEventSelected: false,
      editNow: false,
      calendarView: "month",
      calendarSelection: ["month", "week"]
    };
  }

  componentDidMount() {
    this.props.getAllEvents();
  }

  EditEventInformation = (element, value) => {
    console.log(element, value);
  };

  render() {
    const {
      match,
      classes,

      eventView,
      eventViewOptions,
      showEvents,
      viewIndex,
      dayView,
      // isSlotSelected,
      // slotSelected,
      isAddEvent,
      eventAdd,
      myEvents,

      onChangeEventView,
      onChangeCalendarView,
      onChangeDayView,

      // showSelectedSlot,
      // hideSelectedSlot,

      // showCreateEvent,
      hideCreateEvent
    } = this.props;
    return (
      <React.Fragment>
        <div className="calendar-wrapper">
          <Helmet>
            <title>Everyday | Calendar</title>
            <meta name="description" content="Everyday Calendar" />
          </Helmet>

          <div className="row">
            {/* <div className="col-md-3"> */}
            {/* <TextField
                value={eventView}
                fullWidth
                style={{
                  width: "100%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0
                }}
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
              </TextField> */}

            {/* <div>
                <h2 className={classes.textField + " mt-20"}>Events Today</h2>
                <CalendarAgenda showEvents={showEvents} defaultDate={"today"} />
                <h2 className={classes.textField + " mt-20"}>
                  Events Tomorrow
                </h2>
                <CalendarAgenda
                  showEvents={showEvents}
                  defaultDate={"tomorrow"}
                />
                <h2 className={classes.textField + " mt-20"}>
                  Events Day After Tomorrow
                </h2>
                <CalendarAgenda
                  showEvents={showEvents}
                  defaultDate={"dayAftTom"}
                />
              </div>
            </div> */}

            <div className="col-md-12">
              {/* Month View */}
              {/* <div className="rct-block"> */}
              <BigCalendar
                selectable
                events={showEvents}
                views={["month"]}
                step={60}
                showMultiDayTimes
                onSelectEvent={e => {
                  this.setState({
                    eventInfoOpen: !this.state.eventInfoOpen,
                    eventInfo: [e]
                  });
                }}
                defaultDate={new Date()}
                onSelectSlot={e =>
                  this.setState({
                    isSlotSelected: !this.state.isSlotSelected,
                    slotSelected: e
                  })
                }
                components={{
                  toolbar: CustomToolbar
                }}
              />
              {/* </div> */}

              {/* Week View */}
              {/* <TabContainer classes={classes}>
                <BgCard>
                  <BigCalendar
                    selectable
                    events={showEvents}
                    defaultView={"week"}
                    views={["week"]}
                    step={60}
                    showMultiDayTimes
                    onNavigate={e => {
                      const filteredEvents = showEvents.filter(
                        item => item.start.toDateString() === e.toDateString()
                      );
                      this.setState({
                        eventInfoOpen: !this.state.eventInfoOpen,
                        eventInfo: filteredEvents
                      });
                    }}
                    onSelectEvent={e => {
                      this.setState({
                        eventInfoOpen: !this.state.eventInfoOpen,
                        eventInfo: [e]
                      });
                    }}
                    defaultDate={new Date()}
                    onSelectSlot={e =>
                      this.setState({
                        isSlotSelected: !this.state.isSlotSelected,
                        slotSelected: e
                      })
                    }
                    components={{
                      toolbar: CustomToolbar
                    }}
                  />
                </BgCard>
              </TabContainer> */}
            </div>
          </div>

          {this.state.eventInfoOpen && (
            <EventInfoDialog
              open={this.state.eventInfoOpen}
              handleClose={() =>
                this.setState({
                  eventInfoOpen: !this.state.eventInfoOpen,
                  eventInfo: {}
                })
              }
              information={this.state.eventInfo}
              deleteNow={itemId => {
                this.setState({
                  eventInfoOpen: !this.state.eventInfoOpen,
                  eventInfo: [{}]
                });
                this.props.deleteEvent(itemId);
              }}
            />
          )}

          {this.state.isSlotSelected && (
            <SelectSlotDialog
              open={this.state.isSlotSelected}
              handleClose={() => this.setState({ isSlotSelected: false })}
              slotSelected={this.state.slotSelected}
              showCreateEvent={() => {
                this.props.showCreateEvent();
                this.setState({ isSlotSelected: false });
              }}
            />
          )}

          {isAddEvent && (
            <AddEventDialog
              open={isAddEvent}
              handleClose={hideCreateEvent}
              eventAdd={eventAdd}
              dayView={this.state.slotSelected}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

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
    eventAdd,

    myEvents
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
    eventAdd,
    myEvents
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
    getAllEvents,
    deleteEvent
  }
)(withStyles(styles)(Calendar));
