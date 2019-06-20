// Date Picker
import React from "react";
import { DatePicker } from "@material-ui/pickers";

const DatePickerInput = props => {
  return (
    <DatePicker
      fullWidth
      animateYearScrolling={false}
      leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
      rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
      showTodayButton
      autoOk
      format="DD MMM YYYY"
      {...props}
    />
  );
};

export default DatePickerInput;
