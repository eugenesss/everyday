import React from "react";
import TableCell from "@material-ui/core/TableCell";

import FormTextField from "Components/Form/Components/FormTextField";
import FormSelectField from "Components/Form/Components/FormSelectField";

const FormBlock = ({
  label,
  value,
  handleChange,
  target,
  selectValues,
  customTextField,
  required
}) => {
  return (
    <React.Fragment>
      <TableCell
        style={{ borderBottom: "none", width: "15%" }}
        padding="dense"
        align="right"
      >
        {label}
        {required && <sup style={{ color: "red" }}>*</sup>}
      </TableCell>
      <TableCell padding="dense" style={{ borderBottom: "none", width: "35%" }}>
        {customTextField ? (
          customTextField
        ) : selectValues ? (
          <FormSelectField
            value={value}
            handleChange={handleChange}
            target={target}
            selectValues={selectValues}
          />
        ) : (
          <FormTextField
            value={value}
            handleChange={handleChange}
            target={target}
          />
        )}
      </TableCell>
    </React.Fragment>
  );
};

export default FormBlock;