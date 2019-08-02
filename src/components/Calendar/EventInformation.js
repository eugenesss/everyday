import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form, Input, FormFeedback, Text } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import Checkbox from "@material-ui/core/Checkbox";

import { updateEvent } from "Actions";

class EventInformation extends Component {
  // console.log(information)
  constructor(props) {
    super(props);

    // this.information = this.props.information
    this.state = {
      edit: false,
      info: { ...this.props.information }
    };
  }

  editField = (element, value) => {
    let state = { ...this.state };
    state.info[element] = value;
    this.setState({ state: state });
  };

  SetAllDay = () => {
    let state = { ...this.state };
    if (!state.info.allDay) {
      var Start = new Date(state.info.start);
      Start.setDate(Start.getDate());
      Start.setHours(9);
      Start.setMinutes(0);
      Start.setMilliseconds(0);

      var End = new Date(state.info.end);
      End.setDate(End.getDate());
      End.setHours(18);
      End.setMinutes(0);
      End.setMilliseconds(0);

      state.info.allDay = true;
      state.info.start = Start;
      state.info.end = End;
      this.setState({ state: state });
    } else {
      state.info.allDay = false;
      (state.info.start = new Date(this.props.information.start)),
        (state.info.end = new Date(this.props.information.end)),
        this.setState({ state: state });
    }
  };

  renderNonEditField = info => {
    return (
      <div>
        <Row form>
          <Col
            md={6}
            style={{
              marginTop: 0,
              paddingLeft: 10,
              paddingRight: 15,
              position: "relative"
            }}
          >
            <KeyboardDateTimePicker
              margin="normal"
              id="mui-pickers-time"
              label="Time picker"
              value={new Date(info.start)}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}
            />
          </Col>

          <Col
            md={6}
            style={{
              marginTop: 0,
              paddingLeft: 10,
              paddingRight: 15,
              position: "relative"
            }}
          >
            <KeyboardDateTimePicker
              margin="normal"
              id="mui-pickers-time"
              label="Time picker"
              value={new Date(info.end)}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}
            />
          </Col>
        </Row>

        {info.allDay && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Checkbox
              checked={true}
              value="all_day"
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <div>This is a all day event happening from 9am to 6pm</div>
          </div>
        )}

        <Row form>
          <TextField
            style={{ marginTop: 15, width: "100%" }}
            value={info.title}
            required
            contentEditable={false}
            id="title"
            label="Title"
            margin="normal"
            variant="outlined"
          />
        </Row>
        <Row form>
          <TextField
            value={info.desc}
            style={{ marginTop: 15, width: "100%" }}
            id="description"
            label="Description"
            margin="normal"
            variant="outlined"
          />
        </Row>
      </div>
    );
  };

  renderEditableField = info => {
    return (
      <div>
        <Row form>
          <Col
            md={6}
            style={{
              marginTop: 0,
              paddingLeft: 10,
              paddingRight: 15,
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 8
            }}
          >
            <KeyboardDateTimePicker
              margin="normal"
              id="mui-pickers-time"
              label="Time picker"
              value={info.start}
              onChange={e => {
                this.editField("start", e._d);
              }}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </Col>

          <Col
            md={6}
            style={{
              marginTop: 0,
              paddingLeft: 10,
              paddingRight: 15,
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 8
            }}
          >
            <KeyboardDateTimePicker
              margin="normal"
              id="mui-pickers-time"
              label="Time picker"
              value={info.end}
              onChange={e => {
                this.editField("end", e._d);
              }}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Checkbox
            checked={info.all_day}
            onChange={() => this.SetAllDay()}
            value="all_day"
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />

          {info.all_day ? (
            <div>
              All day event will automatically set the time from 9am to 6pm
            </div>
          ) : (
            <div style={{ color: "rgba(0,0,0,0.5)" }}>
              All day event will automatically set the time from 9am to 6pm
            </div>
          )}
        </div>

        <Row form>
          <TextField
            style={{
              marginTop: 15,
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 8
            }}
            value={info.title}
            required
            // className={classes.textField}
            onChange={e => {
              this.editField("title", e.target.value);
            }}
            placeholder={"Title *"}
            id="title"
            label="Title"
            margin="normal"
            variant="outlined"
          />
        </Row>
        <Row form>
          <TextField
            value={info.desc}
            style={{
              marginTop: 15,
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 8
            }}
            placeholder={"Description *"}
            // className={classes.textField}
            onChange={e => {
              this.editField("desc", e.target.value);
            }}
            id="description"
            label="Description"
            margin="normal"
            variant="outlined"
          />
        </Row>
      </div>
    );
  };

  // state={
  //   edit: false
  // }

  ToggleEdit = () => {
    if (this.state.edit) {
      console.log("Save mode");
      window.alert("Update your event information?");
      this.setState({ edit: false });

      let state = { ...this.state.info };
      // state.start = state.start.toString()
      // state.end = state.end.toString()
      this.props.updateEvent(state);
    } else {
      console.log("Edit mode");
      this.setState({ edit: true });
    }
  };

  render() {
    const { information, edit, deleteNow } = this.props;

    let editTitle = "";
    if (this.state.edit) {
      editTitle = "Save";
    } else {
      editTitle = "Edit";
    }
    return (
      <Form>
        {!this.state.edit && this.renderNonEditField(this.state.info)}

        {this.state.edit && this.renderEditableField(this.state.info)}

        <Row className={"justify-content-end "}>
          <Button
            variant="contained"
            color="primary"
            className="text-white mb-10 mt-20"
            onClick={() => this.ToggleEdit()}
            style={{ marginBottom: 50 }}
          >
            {editTitle}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className="text-white mb-10 mt-20"
            onClick={() => deleteNow(this.state.info.id)}
            style={{ marginBottom: 50, marginLeft: 20 }}
          >
            Delete
          </Button>
        </Row>
      </Form>
    );
  }
}

// export default EventInformation

// map state to props
const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    updateEvent
  }
)(EventInformation);
