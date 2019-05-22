import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const ReportStaffPicker = ({ selectedStaff, allStaff, handleChange }) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Staff"
      value={selectedStaff}
      fullWidth
      onChange={e => handleChange(e.target.value)}
      helperText="Please select staff to view report"
      margin="normal"
      variant="outlined"
    >
      {allStaff &&
        allStaff.map((option, key) => (
          <MenuItem key={key} value={option.id}>
            {option.fullName}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default ReportStaffPicker;
