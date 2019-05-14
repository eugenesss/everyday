import React from "react";
import { DateRangePicker } from "react-dates";
import Button from "@material-ui/core/Button";

function disableSubmit(startDate, endDate) {
  if ((startDate != null) & (endDate != null)) {
    return false;
  } else {
    return true;
  }
}

const ReportDateRangePicker = ({
  startDate,
  endDate,
  onDatesChange,
  focusedInput,
  onFocusChange,
  handleSubmit,
  reset
}) => {
  return (
    <div className="text-center py-20">
      <DateRangePicker
        isOutsideRange={() => false}
        hideKeyboardShortcutsPanel
        startDate={startDate}
        startDateId="your_unique_start_date_id"
        endDate={endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) =>
          onDatesChange({ startDate, endDate })
        }
        focusedInput={focusedInput}
        onFocusChange={focusedInput => onFocusChange({ focusedInput })}
      />
      <Button
        variant="contained"
        className="text-white ml-20"
        color="primary"
        onClick={() => handleSubmit()}
        disabled={disableSubmit(startDate, endDate)}
      >
        Set
      </Button>
      <Button
        variant="contained"
        className="text-white ml-20"
        color="secondary"
        onClick={() => reset()}
      >
        Clear
      </Button>
    </div>
  );
};

export default ReportDateRangePicker;
