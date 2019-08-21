import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormInput from "Components/Form/Components/FormInput";

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
    <FormInput
      value={props.value}
      label={props.label}
      inputComponent={NumberFormatCustom}
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
      onChange={e => props.handleChange(props.target, e.target.value)}
      {...props}
    />
  );
};

export default AmountInput;
