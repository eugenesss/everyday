import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  FormControl,
  FormHelperText,
  Select,
  MenuItem
} from "@material-ui/core";
import BaseInput from "Components/Form/Components/BaseInput";

const styles = theme => ({
  root: {
    margin: theme.spacing(1),
    width: "100%"
  }
});

class FormTextField extends PureComponent {
  render() {
    const {
      classes,
      value,
      handleChange,
      target,
      targetType,
      disabled,
      required,
      label,
      selectValues
    } = this.props;

    return (
      <FormControl className={classes.root}>
        <InputLabel className="fw-bold" shrink htmlFor="bootstrap-input">
          {"label"}
        </InputLabel>
        {selectValues ? (
          <Select value={10} onChange={handleChange} input={<BaseInput />}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        ) : (
          <BaseInput
            value={value}
            onChange={e => handleChange(target, e.target.value, targetType)}
            placeholder={"placeholder"}
            disabled={disabled}
          />
        )}
        {required && <FormHelperText error>* Required Field</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(FormTextField);
