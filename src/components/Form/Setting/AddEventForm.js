import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form, Input, FormFeedback } from "reactstrap";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import ReactCalendar from "react-calendar";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import Checkbox from '@material-ui/core/Checkbox';



import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { addEvent, onChangeAddEvent, handleRegErrorForm } from "Actions";
import Moment from 'moment'

import {
  KeyboardTimePicker,
} from '@material-ui/pickers';

const styles = theme => ({
  dialogPaper: {
    overflow: "visible"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  calendar: {
    width: "auto"
  }
});

class UpdatePasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      start_date: new Date(this.props.dayView.start).setHours(12,0,0),
      end_date: new Date(this.props.dayView.end).setHours(16,0,0),
      title: "",
      all_day: false,
    }
  }

  editField = (element, value) => {
    this.setState({[element]: value})
  }


  OnBlurValidation = () => {
    let state = {...this.state}
    
    if (state.start_date == "" || state.end_date == "") {
      this.props.handleRegErrorForm('Either you have set the start or end time set wrongly or you have not set a start and end time')
      return false 
    }

    if (new Date(state.start_date) > new Date(state.end_date)) {
      this.props.handleRegErrorForm('Your start date and time is later than your end date and time, please adjust the correct date and time')
      return false
    }
   
    if (state.title == "") {
      this.props.handleRegErrorForm('Invalid title for your event, set a longer title to define your event')
      return false
    }
  
    if (state.description == "") {
      this.props.handleRegErrorForm('Invalid description for your event, set a longer description to define your event')
      return false
    }
    return true
  }


  ConfirmEvent = () => {
    if (this.OnBlurValidation()){
      const item = {...this.state}
    
      const data = {
        desc: item.description,
        end: item.end_date,
        start: item.start_date,
        title: item.title,
        allDay: item.all_day,
      }
      this.props.addEvent(data)
    }
  }


  SetAllDay = () => {
    if (!this.state.all_day) {
      var Start  = new Date(this.state.start_date);
      Start.setDate(Start.getDate())
      Start.setHours(9);
      Start.setMinutes(0);
      Start.setMilliseconds(0);
      
      var End  = new Date(this.state.end_date);
      End.setDate(End.getDate())
      End.setHours(18);
      End.setMinutes(0);
      End.setMilliseconds(0);
      
      this.setState({
        all_day:true,
        end_date: End,
        start_date: Start
      })
    } else {
      this.setState({
        all_day:false,
        start_date: new Date(this.props.dayView.start).setHours(12,0,0),
        end_date: new Date(this.props.dayView.end).setHours(16,0,0),
      })
    }
  }



  AutoFill = () => {
    const title  = `Testing title debug with ${Math.floor(Math.random() * 10000) + 1} with ${Math.floor(Math.random() * 10000) + 1}`
    const description = `Testing description debug with ${Math.floor(Math.random() * 10000) + 1} with ${Math.floor(Math.random() * 10000) + 1}`
    this.setState({title:title, description: description })
  }

  render() {
    const {
      classes,
      eventAdd,
      addEvent,
      onChangeAddEvent,
      
    } = this.props;

    // console.log('add event form!!')
    // console.log(dayView)

    return (
      <Form>
      
        <Row form>
          <Col md={6} style={{marginTop: 0, paddingLeft: 10, paddingRight: 15}}>
            <KeyboardDateTimePicker
              margin="normal"
              id="mui-pickers-time"
              label="Time picker"
              value={this.state.start_date}
              onChange={e => {this.editField("start_date", e._d)}}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Col>

          <Col md={6} style={{marginTop: 0, paddingLeft: 10, paddingRight: 15}}>
            <KeyboardDateTimePicker
              margin="normal"
              id="mui-pickers-time"
              label="Time picker"
              value={this.state.end_date}
              onChange={e => { this.editField("end_date", e._d)}}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Col>
        </Row>
          <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>
            <Checkbox
              checked={this.state.all_day}
              onChange={() => this.SetAllDay()}
              value="all_day"
              color="primary"
              inputProps={{'aria-label': 'secondary checkbox'}}
            />

            {this.state.all_day ? 
              <div >All day event will automatically set the time from 9am to 6pm</div>
              :
              <div style={{color:'rgba(0,0,0,0.5)'}}>All day event will automatically set the time from 9am to 6pm</div> 
            }
          </div>
        <Row form>
          <TextField
            style={{ marginTop:15, width: '100%'}}
            value={this.state.title}
            required
            className={classes.textField}
            onChange={e => this.editField("title", e.target.value)}
            placeholder={'Title *'}
            id="title"
            label="Title"
            margin="normal"
            variant="outlined"
          />
        </Row>
        <Row form>
          <TextField
            value={this.state.description}
            style={{marginTop:15, width: '100%'}}
            required
            placeholder={'Description *'}          
            className={classes.textField}
            onChange={e => this.editField("description", e.target.value)}
            id="description"
            label="Description"
            margin="normal"
            variant="outlined"
          />
        </Row>
        
        <Row className={"justify-content-end " + classes.textField}>

          <Button
            variant="contained"
            color="primary"
            className="text-white mb-10 mt-20"
            onClick={() => this.ConfirmEvent()}
            style={{marginBottom: 50}}
          >Add</Button>

          {/* <Button
            variant="contained"
            color="primary"
            className="text-white mb-10 mt-20"
            onClick={() => this.AutoFill()}
            style={{marginBottom: 50}}
          >Auto Fill For Debug</Button> */}


        </Row>
      </Form>
    );
  }
}

UpdatePasswordForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ calendarState }) => {
  const { eventAdd } = calendarState;
  return { eventAdd };
};

export default connect(
  mapStateToProps,
  { addEvent, onChangeAddEvent, handleRegErrorForm }
)(withStyles(styles)(UpdatePasswordForm));
