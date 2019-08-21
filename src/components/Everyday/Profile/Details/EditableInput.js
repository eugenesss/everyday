import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, FormControl, InputBase } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: "100%"
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

const EditableInput = props => {
  const classes = useStyles();
  const { label, value } = props;
  return (
    <FormControl className={classes.root}>
      <InputLabel shrink className={classes.label}>
        {label}
      </InputLabel>
      <InputBase className={classes.input} value={value} readOnly />
    </FormControl>
  );
};

export default EditableInput;
