import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Container } from "reactstrap";

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
import EventInfoDialog from "./EventInfoDialog";


import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { getAllEvents,deleteEvent } from "Actions";

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

  state = {
    eventInfoOpen : false,
    eventInfo : {},
    isSlotSelected: false,
    slotSelected: null,
    showEventSelected: false,
    editNow: false
  };


  EditEventInformation = (element, value) => {
    console.log(element, value)
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


        <Row>
          <Col lg={3} style={{display:'flex', flexDirection:'column', marginBottom: 50}}>
           
            <TextField
                value={eventView}
                fullWidth
                style={{width: '100%', marginLeft: 0, marginRight: 0, marginTop: 0}}
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
            
            <div style={{display:'flex', flexDirection:'column'}}>
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
            </div>
          </Col>

          <Col lg={9}>
            <Col style={{flexBasis:0, flexGrow:0}}>
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

            <Col>
              <SwipeableViews
                axis={"x"}
                index={viewIndex}
                onChangeIndex={onChangeCalendarView}
                style={{borderRadius: 0}}
              >
                <TabContainer classes={classes}>
                  <RctCollapsibleCard>
                    <BigCalendar
                      selectable
                      events={showEvents}
                      views={["month"]}
                      step={60}
                      showMultiDayTimes
                      onNavigate={e =>{
                        const filteredEvents = showEvents.filter(item => item.start.toDateString() === e.toDateString())
                        this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: filteredEvents})
                      }}
                      onSelectEvent={e=>{
                        this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: [e]})
                      }}
                      defaultDate={new Date()}
                      // onSelectSlot={showSelectedSlot}
                      onSelectSlot={(e) => this.setState({isSlotSelected: !this.state.isSlotSelected, slotSelected: e})}
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
                      onNavigate={e =>{
                        const filteredEvents = showEvents.filter(item => item.start.toDateString() === e.toDateString())
                        this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: filteredEvents})
                      }}
                      onSelectEvent={e=>{
                        this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: [e]})
                      }}
                      defaultDate={new Date()}
                      onSelectSlot={(e) => this.setState({isSlotSelected: !this.state.isSlotSelected, slotSelected: e})}
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
                              console.log(e)
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
                          onNavigate={e =>{
                            const filteredEvents = showEvents.filter(item => item.start.toDateString() === e.toDateString())
                            this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: filteredEvents})
                            onChangeDayView(e);
                          }}
                          onSelectEvent={e=>{
                            this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: [e]})
                          }}
                          events={showEvents}
                          defaultView={"day"}
                          views={["day"]}
                          step={60}
                          showMultiDayTimes
                          // onSelectSlot={showSelectedSlot}
                          onSelectSlot={(e) => this.setState({isSlotSelected: !this.state.isSlotSelected, slotSelected: e})}
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

          </Col>     
        </Row>



        {this.state.eventInfoOpen && 
          <EventInfoDialog
            open={this.state.eventInfoOpen}
            handleClose={() => this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: {}})}  
            information = {this.state.eventInfo}   
            // edit = {(id) => console.log(id)}
            deleteNow={(itemId) => {
              // console.log(this.state.eventInfo.userId)
              this.setState({eventInfoOpen: !this.state.eventInfoOpen, eventInfo: [{}]})
              this.props.deleteEvent(itemId)}
            }
          />
        }

        {this.state.isSlotSelected &&
          <SelectSlotDialog
            open={this.state.isSlotSelected}
            handleClose={() => this.setState({isSlotSelected: false})}
            // onSelectSlot={() => this.setState({isSlotSelected: !this.state.isSlotSelected})}
            slotSelected={this.state.slotSelected}
            showCreateEvent={() => {
              this.props.showCreateEvent()
              this.setState({isSlotSelected: false})
            }}
          />
        }
      
        {isAddEvent &&
          <AddEventDialog
            open={isAddEvent}
            handleClose={hideCreateEvent}
            eventAdd={eventAdd}
            dayView={this.state.slotSelected}
          />
        }
      
    
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
)(withStyles(styles)(CalendarLayout));


// myEvents: [],
// allEvents: [],
// showEvents: [],