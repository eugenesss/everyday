import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      //prefix="$"
      thousandSeparator
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const AmountInput = props => {
  return (
    <TextField
      fullWidth
      value={props.value}
      label={props.label}
      id="amount"
      InputProps={{
        inputComponent: NumberFormatCustom,
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
        endAdornment: props.endAdornmentProps
      }}
      {...props}
    />
  );
};

export default AmountInput;
