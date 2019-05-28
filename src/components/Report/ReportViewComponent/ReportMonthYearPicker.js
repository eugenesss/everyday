import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const ReportMonthYearPicker = ({ monthState, yearState, handleChange }) => {
  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label="Staff"
        //value={selectedStaff}
        fullWidth
        //onChange={e => handleChange(e.target.value)}
        margin="normal"
        variant="outlined"
      >
        {allStaff &&
          allStaff.map((option, key) => (
            <MenuItem key={key} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Staff"
        //value={selectedStaff}
        fullWidth
        //onChange={e => handleChange(e.target.value)}
        margin="normal"
        variant="outlined"
      >
        {allStaff &&
          allStaff.map((option, key) => (
            <MenuItem key={key} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
      </TextField>
    </div>
  );
};

export default ReportMonthYearPicker;
