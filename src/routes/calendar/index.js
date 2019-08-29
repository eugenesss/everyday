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
import Popover from '@material-ui/core/Popover';
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
      calendarView: "month",
      showPop: false,
      x: 0,
      y: 0 ,
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

  onMouseDownCapture(e) {
    this.setState({ x: e.screenX, y: e.screenY-100 });
  }

  handleClose = () => {
    this.setState({ x: 0, y: 0, showPop: !this.state.showPop });
  }

  render() {
    const { showEvents } = this.props;


    // if(this.state.showPop){
    //   console.log(this.state)
    //   console.log(this.state.x, this.state.y, this.state.slotSelected )
    // }
    

    return (
      <React.Fragment>
        <div className="calendar-wrapper">
          <Helmet>
            <title>Everyday | Calendar</title>
            <meta name="description" content="Everyday Calendar" />
          </Helmet>

          <div className="row">
            <div className="col-md-12" onMouseDownCapture={this.onMouseDownCapture.bind(this)}>
              {/* Month View */}
              <BigCalendar
                style={{ position: "relative"}}
                selectable
                events={showEvents}
                views={["month"]}
                step={60}
                showMultiDayTimes
                onSelectEvent={e => {
                  this.setState({
                    eventInfoOpen: !this.state.eventInfoOpen,
                    eventInfo: [e],
                    showPop: false
                  });
                }}
                defaultDate={new Date()}
                onSelectSlot={ async(e) => {
                  let item = await e
                  // console.log(item)
                  // console.log(this.state.x, this.state.y )
                  // console.log('set state')
                  this.setState({
                    // isSlotSelected: !this.state.isSlotSelected,
                    slotSelected: item,
                    showPop: true
                  })
                }}
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

          {this.state.showPop && (
            // <div style={{
            //   height:100, width:100, 
            //   position:'absolute',
            //   zIndex:1000,
            //   left: this.state.x, 
            //   top: this.state.y, 
            //   backgroundColor:"red"}}>
            // </div>
            <Popover 
              id={'simple-popover'}
              open={this.state.showPop}
              // anchorEl={anchorEl}
              onClose={this.handleClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: this.state.y, left: this.state.x }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <div style={{display:'flex', flexDirection:'column', width: 150}}>
                {new Date(this.state.slotSelected.start).toDateString()}
                {new Date(this.state.slotSelected.end).toDateString()}
              </div>
            </Popover>
          
          )}

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
