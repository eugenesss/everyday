import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { show } from "redux-modal";

import BigCalendar from "react-big-calendar";
import moment from "moment";

import CustomToolbar from "Components/Calendar/CustomToolbar";
import SelectSlotDialog from "Components/Calendar/Dialogs/SelectSlotDialog";
import AddEventDialog from "Components/Calendar/Dialogs/AddEventDialog";
import EventInfoDialog from "Components/Calendar/Dialogs/EventInfoDialog";

import { getAllEvents, deleteEvent, addEvent } from "Actions";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

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
      calendarView: "month"
    };
  }

  componentDidMount() {
    this.props.getAllEvents();
  }

  openAddEvent() {
    this.props.show("add_event", {
      addEvent: this.props.addEvent,
      dayView: this.state.slotSelected
    });
  }

  render() {
    const { showEvents } = this.props;
    return (
      <React.Fragment>
        <div className="calendar-wrapper">
          <Helmet>
            <title>Everyday | Calendar</title>
            <meta name="description" content="Everyday Calendar" />
          </Helmet>

          <div className="row">
            <div className="col-md-12">
              {/* Month View */}
              <BigCalendar
                style={{ position: "relative" }}
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
                this.setState({ isSlotSelected: false });
                this.openAddEvent();
              }}
            />
          )}

          <AddEventDialog />
        </div>
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
