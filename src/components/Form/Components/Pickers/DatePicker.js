import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import BaseInput from "Components/Form/Components/BaseInput";
import { InputLabel, FormControl, FormHelperText } from "@material-ui/core";

const OverrideInput = props => {
  const { helperText, InputProps, ...others } = props;
  return <BaseInput {...others} />;
};

const styles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

const DatePickerInput = props => {
  const classes = styles();
  const { label, required } = props;
  return (
    <FormControl className={classes.root}>
      <InputLabel className="fw-bold" shrink>
        {label}
      </InputLabel>
      <DatePicker
        TextFieldComponent={OverrideInput}
        animateYearScrolling={false}
        leftArrowIcon={<ArrowLeft />}
        rightArrowIcon={<ArrowRight />}
        showTodayButton
        autoOk
        format="DD MMM YYYY"
        {...props}
      />
      {required && <FormHelperText error>* Required Field</FormHelperText>}
    </FormControl>
  );
};

export default DatePickerInput;
