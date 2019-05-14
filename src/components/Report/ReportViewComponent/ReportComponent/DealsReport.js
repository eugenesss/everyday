import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Button from "@material-ui/core/Button";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

class DealsReport extends Component {
  state = { startDate: null, endDate: null, focusedInput: null };

  updateDateRange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  handleSubmit() {
    console.log("call api");
  }

  disableSubmit(startDate, endDate) {
    if ((startDate != null) & (endDate != null)) {
      return false;
    } else {
      return true;
    }
  }

  clearState() {
    this.setState({ startDate: null, endDate: null });
  }

  render() {
    return (
      <div className="p-20">
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading="Select Set Period" fullBlock>
              <div className="text-center py-20">
                <DateRangePicker
                  isOutsideRange={() => false}
                  hideKeyboardShortcutsPanel
                  startDate={this.state.startDate}
                  startDateId="your_unique_start_date_id"
                  endDate={this.state.endDate}
                  endDateId="your_unique_end_date_id"
                  onDatesChange={({ startDate, endDate }) =>
                    this.updateDateRange({ startDate, endDate })
                  }
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  }
                />
                <Button
                  variant="contained"
                  className="text-white ml-20"
                  color="primary"
                  onClick={() => this.handleSubmit()}
                  disabled={this.disableSubmit(
                    this.state.startDate,
                    this.state.endDate
                  )}
                >
                  Set
                </Button>
                <Button
                  variant="contained"
                  className="text-white ml-20"
                  color="secondary"
                  onClick={() => this.clearState()}
                >
                  Clear
                </Button>
              </div>
            </RctCollapsibleCard>
          </div>
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Overall Deal by Owners"}>
              Report
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Total Deals by Type"}>
              Report
            </RctCollapsibleCard>
          </div>
          <div className="col-md-6">
            <RctCollapsibleCard heading={"Overall Deal Stages"}>
              Report
            </RctCollapsibleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RctCollapsibleCard heading={"Deals in Stage"}>
              Report
            </RctCollapsibleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default DealsReport;
