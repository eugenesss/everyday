import React, { Component } from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { DatePicker } from "@material-ui/pickers";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

class ReportContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: [
        "Custom",
        "Current FY",
        "Previous FY",
        "Yesterday",
        "Today",
        "Tommorow",
        "Current Week",
        "Last Week",
        "Current Month",
        "Last Month"
      ],
      nowShowing: "Current Month",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month")
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCustomDate = this.handleCustomDate.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.handleSubmit(
      this.state.startDate.format("YYYY-MM-DD HH:mm:ss"),
      this.state.endDate.format("YYYY-MM-DD HH:mm:ss")
    );
  }

  handleCustomDate(date, type) {
    this.setState({ ...this.state, nowShowing: "Custom" });
    if (type == "start") this.setState({ startDate: date });
    else if (type == "end") this.setState({ endDate: date });
  }

  handleChange(event) {
    var startDate;
    var endDate;
    switch (event.target.value) {
      case "Current FY":
        startDate = moment().startOf("year");
        endDate = moment().endOf("year");
        break;
      case "Previous FY":
        startDate = moment()
          .subtract(1, "years")
          .startOf("year");
        endDate = moment()
          .subtract(1, "years")
          .endOf("year");
        break;
      case "Yesterday":
        startDate = moment().subtract(1, "days");
        endDate = moment().subtract(1, "days");
        break;
      case "Today":
        startDate = moment();
        endDate = moment();
        break;
      case "Tommorow":
        startDate = moment().add(1, "days");
        endDate = moment().add(1, "days");
        break;
      case "Current Week":
        startDate = moment().startOf("week");
        endDate = moment().endOf("week");
        break;
      case "Last Week":
        startDate = moment()
          .subtract(7, "days")
          .startOf("week");
        endDate = moment()
          .subtract(7, "days")
          .endOf("week");
        break;

      case "Current Month":
        startDate = moment().startOf("month");
        endDate = moment().endOf("month");
        break;
      case "Last Month":
        startDate = moment()
          .subtract(1, "months")
          .startOf("month");
        endDate = moment()
          .subtract(1, "months")
          .endOf("month");
        break;
    }
    this.setState(oldValues => ({
      ...oldValues,
      nowShowing: event.target.value,
      startDate,
      endDate
    }));
  }

  render() {
    const { startDate, endDate, nowShowing, dateRange } = this.state;
    return (
      <React.Fragment>
        <div className="align-items-start">
          <TextField
            select
            label="Presets"
            value={nowShowing}
            onChange={this.handleChange}
            className="mr-20"
            style={{ minWidth: 160 }}
          >
            {dateRange.map((range, key) => (
              <MenuItem key={key} value={range}>
                {range}
              </MenuItem>
            ))}
          </TextField>
          <DatePicker
            className="mr-20"
            format="DD/MM/YYYY"
            variant="inline"
            label="Start Date"
            value={startDate}
            onChange={date => this.handleCustomDate(date, "start")}
          />
          <DatePicker
            className="mr-20"
            format="DD/MM/YYYY"
            variant="inline"
            label="End Date"
            value={endDate}
            onChange={date => this.handleCustomDate(date, "end")}
          />
          {this.props.additionalSelection}
          <Button
            variant="contained"
            className="text-white mr-20 mt-5"
            color="primary"
            onClick={() => this.submit()}
          >
            Apply
          </Button>
          <div className={!this.props.noPads ? "mt-30 p-30" : ""}>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReportContainer;
