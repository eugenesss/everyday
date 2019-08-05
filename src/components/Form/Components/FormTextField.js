import React, {PureComponent} from "react";
import TextField from "@material-ui/core/TextField";

export default class FormTextField extends PureComponent {

  render() {
    const { 
      value,
      handleChange,
      target,
      targetType,
      disabled
    } = this.props

    return (
      <TextField
        value={value}
        onChange={e => handleChange(target, e.target.value, targetType)}
        fullWidth
        margin="dense"
        // variant="outlined"
        disabled={disabled}
        // inputProps={{ autoComplete: "nope" }}
      />
    );

  };

}

