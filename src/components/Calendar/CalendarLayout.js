import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

// sub components
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import ReactCalendar from 'react-calendar'
import moment from 'moment';

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CalendarToolbar from "Components/Calendar/CalendarToolbar"

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

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
      onClickMenu: false,
      selectedDate: new Date(),
      events: [],
      viewIndex: 0,
      index: "My Calendar",
      indexOptions: [
        "My Calendar",
        "Company Calendar",
      ]
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
  onClickSlot = (event, target) => {
    this.setState({ onClickMenu: true, });
  };
  handleClose = () => {
    this.setState({ onClickMenu: false, });
  };

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
                <Tab label="Agenda"/>
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
                events={this.state.events}
                views={["month"]}
                step={30}
                showMultiDayTimes
                defaultDate={new Date}
                onSelectSlot={this.onClickSlot}
                components={{
                  toolbar: CalendarToolbar
                }}
              />
            </RctCollapsibleCard>
          </TabContainer>
          <TabContainer>
            <RctCollapsibleCard>
              <BigCalendar
                events={this.state.events}
                defaultView={"week"}
                views={["week"]}
                step={30}
                showMultiDayTimes
                defaultDate={new Date}
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
                    date={this.state.selectedDate}
                    onNavigate={(date) => { this.setState({ selectedDate: date })}}
                    events={this.state.events}
                    defaultView={"day"}
                    views={["day"]}
                    step={30}
                    showMultiDayTimes
                    components={{
                      toolbar: CalendarToolbar
                    }}
                  />
                </RctCollapsibleCard>
              </Col>
            </Row>
          </TabContainer>
          <TabContainer>
            <RctCollapsibleCard>
              <BigCalendar
                events={this.state.events}
                defaultView={"agenda"}
                views={["agenda"]}
                step={30}
                showMultiDayTimes
                defaultDate={new Date()}
                components={{
                  toolbar: CalendarToolbar
                }}
              />
            </RctCollapsibleCard>
          </TabContainer>
        </SwipeableViews>
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
