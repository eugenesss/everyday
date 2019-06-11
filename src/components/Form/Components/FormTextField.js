import React from "react";
import TextField from "@material-ui/core/TextField";

const FormTextField = ({ label, value, handleChange, target, targetType }) => {
  return (
    <TextField
      label={label}
      defaultValue={value}
      onChange={e => handleChange(target, e.target.value, targetType)}
      fullWidth
      margin="dense"
      // variant="outlined"
    />
  );
};

export default FormTextField;
