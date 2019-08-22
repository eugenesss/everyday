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
        handleChange({
          target: {
            value: values.value
          }
        });
      }}
      // onValueChange={values => {
      //   handleChange({
      //     target: {
      //       value: values.value
      //     }
      //   });
      // }}
      // onChange={e=> handleChange(target, e.target.value, keys )}
      thousandSeparator
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
// noDollar
const AmountInput = props => {
  return (
    <FormInput
      value={props.value}
      label={props.label}
      disabled={props.disabled}
      handleChange={props.handleChange}
      // inputComponent={NumberFormatCustom}
      startAdornment={props.noDollar? "" : <InputAdornment position="start">$</InputAdornment>}
      {...props}
    />
  );
};

export default AmountInput;
