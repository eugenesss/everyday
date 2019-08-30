import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { show } from "redux-modal";

import BigCalendar from "react-big-calendar";
import moment from "moment";

// Calendar Components
import CustomToolbar from "Components/Calendar/CustomToolbar";
import CustomEvent from "Components/Calendar/CustomEvent";

// Calendar Dialogs
import EventInfoDialog from "Components/Calendar/Dialogs/EventInfoDialog";

// Calendar form
import NewEventForm from "Components/Form/Calendar/NewEventForm";

import { getAllEvents, deleteEvent, addEvent } from "Actions";
import Popover from "@material-ui/core/Popover";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventInfoOpen: false,
      eventInfo: {},
      calendarView: "month",
      showPop: false,
      slotSelected: "",
      x: 0,
      y: 0
    };
    this.renderPopover = this.renderPopover.bind(this);
    this.onMouseDownCapture = this.onMouseDownCapture.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);
  }

  componentDidMount() {
    this.props.getAllEvents();
  }

  openAddEvent(e) {
    this.props.show("add_event", {
      dayView: e
    });
  }

  deleteEvent(id) {
    this.setState({
      eventInfoOpen: !this.state.eventInfoOpen,
      eventInfo: {}
    });
    window.alert("Delete this event?");
    this.props.deleteEvent(id);
  }

  newEvent(event) {
    this.setState({ showPop: !this.state.showPop });
    this.props.addEvent(event);
  }

  onMouseDownCapture(e) {
    this.setState({ x: e.pageX, y: e.pageY });
  }

  renderPopover(e) {
    this.setState({ slotSelected: e, showPop: !this.state.showPop });
  }

  render() {
    const { showEvents } = this.props;
    const {
      eventInfoOpen,
      eventInfo,
      showPop,
      slotSelected,
      x,
      y
    } = this.state;
    return (
      <React.Fragment>
        <div className="calendar-wrapper">
          <Helmet>
            <title>Everyday | Calendar</title>
            <meta name="description" content="Everyday Calendar" />
          </Helmet>

          <div className="row">
            <div
              className="col-md-12"
              onMouseDownCapture={this.onMouseDownCapture}
            >
              {/* Month View */}
              <BigCalendar
                popup
                style={{ position: "relative" }}
                selectable
                events={showEvents}
                views={["month"]}
                onSelectEvent={e => {
                  this.setState({
                    eventInfoOpen: !eventInfoOpen,
                    eventInfo: [e]
                  });
                }}
                defaultDate={new Date()}
                onSelectSlot={e => this.renderPopover(e)}
                components={{
                  toolbar: CustomToolbar,
                  event: CustomEvent
                }}
              />
            </div>
          </div>

          {eventInfoOpen && (
            <EventInfoDialog
              open={eventInfoOpen}
              handleClose={() =>
                this.setState({
                  eventInfoOpen: !eventInfoOpen,
                  eventInfo: {}
                })
              }
              information={eventInfo}
              deleteNow={itemId => this.deleteEvent(itemId)}
            />
          )}
        </div>

        <Popover
          id={"calendar-popover"}
          open={showPop}
          onClose={this.renderPopover}
          anchorReference="anchorPosition"
          anchorPosition={{ top: y, left: x }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          elevation={2}
        >
          <div className="p-20 w-100">
            <h2>New Event Detail</h2>
            <NewEventForm dayView={slotSelected} addEvent={this.newEvent} />
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}

// map state to props
const mapStateToProps = ({ calendarState }) => {
  const { showEvents } = calendarState;
  return { showEvents };
};

export default connect(
  mapStateToProps,
  {
    getAllEvents,
    deleteEvent,
    addEvent,
    show
  }
)(Calendar);
