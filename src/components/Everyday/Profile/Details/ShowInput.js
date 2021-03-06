import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  FormControl,
  InputBase,
  InputAdornment
} from "@material-ui/core";

import NumberFormat from "react-number-format";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    // width: "100%"
  },
  input: {
    "label + &": {
      marginTop: theme.spacing(2)
    }
  },
  label: {
    fontWeight: "600",
    color: "#00000057"
  }
}));

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

const ShowInput = props => {
  const classes = useStyles();
  const { label, value, amount, ...others } = props;

  return (
    <FormControl className={classes.root}>
      <InputLabel shrink className={classes.label}>
        {label}
      </InputLabel>

      <div style={{marginTop: 16, fontSize: 18}} {...others}>
        {value}
      </div>


    </FormControl>
  );
};

export default ShowInput;
