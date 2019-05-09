import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

// sub components
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import ReactCalendar from 'react-calendar'
import moment from 'moment';

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CalendarToolbar from "Components/Calendar/CalendarToolbar";
import OnSelectSlotDialog from "Components/Calendar/OnSelectSlotDialog";
import AddEventDialog from "Components/Calendar/AddEventDialog";

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ paddingLeft: 8}}>
      {children}
    </Typography>
  );
}

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
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
});

class CalendarLayout extends Component {
  constructor(props) {
    super(props);
    this.handleViewIndexChange = this.handleViewIndexChange.bind(this)
    this.state = {
      onClickDialog: false,
      addEventDialog: false,
      selectedDate: new Date(),
      eventToAdd: null,
      viewIndex: 0,
      index: "My Calendar",
      indexOptions: [
        "My Calendar",
        "Company Calendar",
      ],
      myEvents: [
        {
          'title': 'My Event All Day 1',
          'allDay': true,
          'start': new Date(2019, 4, 10),
          'end': new Date(2019, 4, 10)
        },
        {
          'title': 'My Event 2',
          'start': new Date(2019, 4, 13, 5, 30, 0),
          'end': new Date(2019, 4, 20, 9, 45, 0)
        },
        {
          'title': 'My Event 3',
          'start': new Date(2019, 4, 26, 7, 0, 0),
          'end': new Date(2019, 4, 26, 9, 0, 0),
          desc: 'Big conference for important people'
        }
        
      ],
      companyEvents: [
        {
          'title': 'My Event All Day 1',
          'allDay': true,
          'start': new Date(2019, 4, 10),
          'end': new Date(2019, 4, 10)
        },
        {
          'title': 'Company Event All Day 1',
          'allDay': true,
          'start': new Date(2019, 4, 6),
          'end': new Date(2019, 4, 6)
        },
        {
          'title': 'My Event 2',
          'start': new Date(2019, 4, 13, 5, 30, 0),
          'end': new Date(2019, 4, 20, 9, 45, 0)
        },
        {
          'title': 'Company Event 2',
          'start': new Date(2019, 4, 7),
          'end': new Date(2019, 4, 7)
        },
        {
          'title': 'Company Event 3',
          'start': new Date(2019, 4, 14),
          'end': new Date(2019, 4, 15)
        },
      ],
    };
  }

  //My Calendar || Company Calendar
  handleIndexChange(newValue) {
    this.setState({ index: newValue });
  }

  //Tab Index
  handleViewIndexChange(event, value) {
    this.setState({ viewIndex: value })
  }
  handleSwipeViewIndexChange(value) {
    this.setState({ viewIndex: value })
  }

  //On Change Date To View (Day View)
  onChangeDate(newDate) {
    this.setState({ selectedDate: newDate })
  }
  handleNavigate(date, view, action) {
    this.setState({ selectedDate: moment(date).toDate() })
  }

  //Calendar Slot
  handleSlotDialog = (event) => {
    this.setState({ onClickDialog: true, eventToAdd: event});
  };
  handleCloseSlotDialog = () => {
    this.setState({ onClickDialog: false, });
  };

  //Add Event
  handleAddEventDialog = () => {
    this.setState({ onClickDialog: false, addEventDialog: true });
  }
  handleCloseAddEventDialog = () => {
    this.setState({ onClickDialog: false, addEventDialog: false });
  }



  render() {
    const { match, classes } = this.props;
    return (
      <React.Fragment>
        <Row className={"align-items-center"}>
          <Col md={3}>
            <TextField
              value={this.state.index}
              error={!this.state.index}
              required
              fullWidth
              id="Calendar"
              select
              label="Calendar"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              onChange={e => this.handleIndexChange(e.target.value)}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
              variant="outlined"
            >
              {this.state.indexOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Col>
          <Col style={{marginLeft: 8}}>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.viewIndex}
                onChange={this.handleViewIndexChange}
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
          index={this.state.viewIndex}
          onChangeIndex={this.handleSwipeViewIndexChange}
        >
          <TabContainer>
            <RctCollapsibleCard>
              <BigCalendar
                selectable
                events={this.state.index == "My Calendar" ? this.state.myEvents : this.state.companyEvents}
                views={["month"]}
                step={30}
                showMultiDayTimes
                defaultDate={new Date}
                onSelectSlot={this.handleSlotDialog}
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
                events={this.state.index == "My Calendar" ? this.state.myEvents : this.state.companyEvents}
                defaultView={"week"}
                views={["week"]}
                step={30}
                showMultiDayTimes
                defaultDate={new Date}
                onSelectSlot={this.handleSlotDialog}
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
                      value={this.state.selectedDate}
                      onClickDay={(e) => {this.onChangeDate(e)}}
                    />
                  </Row>
                </RctCollapsibleCard>
              </Col>
              <Col>
                <RctCollapsibleCard>
                  <BigCalendar
                    selectable
                    date={this.state.selectedDate}
                    onNavigate={(date) => { this.setState({ selectedDate: date })}}
                    events={this.state.index == "My Calendar" ? this.state.myEvents : this.state.companyEvents}
                    defaultView={"day"}
                    views={["day"]}
                    step={30}
                    showMultiDayTimes
                    onSelectSlot={this.handleSlotDialog}
                    components={{
                      toolbar: CalendarToolbar
                    }}
                  />
                </RctCollapsibleCard>
              </Col>
            </Row>
          </TabContainer>
        </SwipeableViews>
        <OnSelectSlotDialog
          open={this.state.onClickDialog}
          handleClose={this.handleCloseSlotDialog.bind(this)}
          eventToAdd={this.state.eventToAdd}
          handleAddEventDialog={this.handleAddEventDialog.bind(this)}
        />
        <AddEventDialog
          open={this.state.addEventDialog}
          handleClose={this.handleCloseAddEventDialog.bind(this)}
          eventToAdd={this.state.eventToAdd}
        />
      </React.Fragment>
    );
  }
}

CalendarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  null
)(withStyles(styles)(CalendarLayout));
