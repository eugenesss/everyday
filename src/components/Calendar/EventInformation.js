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


const EventInformation = ({information}) => { 

    console.log(information)


    return (
      <Form>
      
        <Row form>
          <Col md={6} style={{marginTop: 0, paddingLeft: 10, paddingRight: 15}}>
            <KeyboardDateTimePicker
              margin="normal"
              id="mui-pickers-time"
              label="Time picker"
              value={new Date(information.start)}
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
              value={new Date(information.end)}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
              contentEditable={false}
            />
          </Col>
        </Row>

          {information.allDay && 
            <div style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>
                <Checkbox
                    checked={true}
                    value="all_day"
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
                <div >This is a all day event happening from 9am to 6pm</div>
            </div>
          }
         
        <Row form>
          <TextField
            style={{ marginTop:15, width: '100%'}}
            value={information.title}
            required
            // className={classes.textField}
            placeholder={'Title *'}
            id="title"
            label="Title"
            margin="normal"
            variant="outlined"
          />
        </Row>
        <Row form>
          <TextField
            value={information.desc}
            style={{marginTop:15, width: '100%'}}
            placeholder={'Description *'}          
            // className={classes.textField}
            id="description"
            label="Description"
            margin="normal"
            variant="outlined"
          />
        </Row>

      </Form>
    )
}



export default EventInformation
