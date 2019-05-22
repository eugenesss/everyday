import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const UserSelectionField = ({ userList, handleChange, value, target }) => {
  return (
    <TextField
      select
      fullWidth
      value={value ? value : ""}
      onChange={e => handleChange(target, e.target.value)}
      margin="dense"
    >
      {userList &&
        userList.map((user, key) => (
          <MenuItem key={user.id} value={user.id}>
            {user.fullName}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default UserSelectionField;
