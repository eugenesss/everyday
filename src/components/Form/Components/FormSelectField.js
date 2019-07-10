import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const FormSelectField = ({
  label,
  value,
  target,
  targetType,
  handleChange,
  selectValues
}) => {
  
  return (
    <TextField
      select
      fullWidth
      label={label}
      value={value ? value : ""}
      onChange={e => handleChange(target, e.target.value, targetType)}
      // onChange={e => console.log(e.target.value)}
      margin="dense"
    >
      {selectValues &&
        selectValues.map((select, key) => (
<<<<<<< HEAD
          <MenuItem key={key} value={select}>
=======
          <MenuItem key={key} value={select.value}>
>>>>>>> f5f1919908c0e80c23e889e685e218290644720f
            {select.name}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default FormSelectField;
