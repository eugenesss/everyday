import React, { Component } from "react";
import { connect } from "react-redux";

// form components
import FormInput from "Components/Form/Components/FormInput";
import DateTimePicker from "Components/Form/Components/Pickers/DateTimePicker";
import DatePicker from "Components/Form/Components/Pickers/DatePicker";
import { Button, Switch, FormControlLabel } from "@material-ui/core";

import { getDateTime, isSameDay } from "Helpers/helpers";
import { updateEvent } from "Actions";

class EventInformation extends Component {
  constructor(props) {
    super(props);
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

  renderNonEditField = info => {
    const { title, desc, allDay, userInfo, start, end } = info;
    const eventStart = allDay
      ? getDateTime(start, "ddd, d MMM YY")
      : getDateTime(start);
    const eventEnd = allDay
      ? getDateTime(end, "ddd, d MMM YY")
      : getDateTime(end);
    var sameDay = isSameDay(start, end);
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="mb-0">{title}</h2>
            <p className="fs-12 text-muted">
              {userInfo && `by ${userInfo.name}`}
            </p>
          </div>
          <p className="fs-14 text-muted text-right">
            {allDay ? (
              <React.Fragment>
                {sameDay ? (
                  <span>{eventStart}</span>
                ) : (
                  <span>All Day from {eventStart}</span>
                )}
                <br />
                {sameDay ? <span>All Day</span> : <span>To {eventEnd}</span>}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {sameDay ? (
                  <React.Fragment>
                    <span>{getDateTime(start, "ddd, d MMM YY")}</span>
                    <br />
                    <span>
                      {`From ${getDateTime(start, "h:mma")} to ${getDateTime(
                        end,
                        "hh:mma"
                      )}`}
                    </span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span>
                      {`From ${getDateTime(start, "ddd, d MMM YY h:mma")}`}
                      <br />
                      {`to ${getDateTime(end, "ddd, d MMM YY h:mma")}`}
                    </span>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </p>
        </div>
        <hr className="my-10" />
        <p>{desc}</p>
      </React.Fragment>
    );
  };

  renderEditableField = info => {
    const { start, end, title, desc, allDay } = info;
    return (
      <React.Fragment>
        <form autoComplete="off">
          <div className="row">
            <div className="col">
              {allDay ? (
                <DatePicker
                  label="Start"
                  value={start}
                  target="start"
                  handleChange={this.editField}
                  required={!start}
                />
              ) : (
                <DateTimePicker
                  label="Start"
                  value={start}
                  target="start"
                  handleChange={this.editField}
                  required={!start}
                />
              )}
            </div>
            <div className="col">
              {allDay ? (
                <DatePicker
                  label="End"
                  value={end}
                  target="end"
                  handleChange={this.editField}
                  required={!end}
                />
              ) : (
                <DateTimePicker
                  label="End"
                  value={end}
                  target="end"
                  handleChange={this.editField}
                  required={!end}
                />
              )}
            </div>
          </div>
          <div className="text-right text-muted">
            <FormControlLabel
              control={
                <Switch
                  checked={allDay}
                  onChange={() => this.editField("allDay", !allDay)}
                  value="allDay"
                  disableRipple
                />
              }
              label="All day event"
              labelPlacement="start"
              className="mb-0"
            />
          </div>
          <FormInput
            label="Title"
            value={title}
            target="title"
            handleChange={this.editField}
            required={!title}
          />
          <FormInput
            label="Description"
            value={desc}
            target="desc"
            handleChange={this.editField}
            multiline
            rows={3}
          />
        </form>
      </React.Fragment>
    );
  };

  onEdit = () => {
    window.alert("Update your event information?");
    this.setState({ edit: false });

    let state = { ...this.state.info };
    this.props.updateEvent(state);
  };

  toggleEdit = () => this.setState({ edit: !this.state.edit });

  render() {
    const { information, deleteNow } = this.props;
    return (
      <React.Fragment>
        {this.state.edit
          ? this.renderEditableField(this.state.info)
          : this.renderNonEditField(information)}
        <div className="row justify-content-between">
          <div>
            {this.state.edit && (
              <Button
                className="text-danger"
                disableRipple
                onClick={() => deleteNow(this.state.info.id)}
              >
                Delete
              </Button>
            )}
          </div>
          <div>
            {this.state.edit ? (
              <React.Fragment>
                <Button disableRipple onClick={() => this.toggleEdit()}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  disableRipple
                  className="ml-20 text-white btn-success"
                  onClick={() => this.onEdit()}
                >
                  Save
                </Button>
              </React.Fragment>
            ) : (
              <Button
                disableRipple
                color="primary"
                onClick={() => this.toggleEdit()}
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {
    updateEvent
  }
)(EventInformation);
