import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const FormSelectField = ({
  label,
  value,
  target,
  targetType,
  handleChange,
  selectValues,
  accounting
}) => {
  
  let container = null
  if(!accounting) {
    container = (
      <TextField
      select
      fullWidth
      label={label}
      value={value ? value : ""}
      onChange={e => handleChange(target, e.target.value, targetType)}
      margin="dense"
    >
      {selectValues &&
        selectValues.map((select, key) => (
          <MenuItem key={key} value={select.value}>
            {select.name}
          </MenuItem>
        ))}
    </TextField>
    )
  } else {
    container = (
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
            <MenuItem key={key} value={select}>
              {select.name}
            </MenuItem>
          ))}
      </TextField>
    )
  }
  return container
};

export default FormSelectField;
