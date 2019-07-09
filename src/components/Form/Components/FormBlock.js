import React from "react";
import TableCell from "@material-ui/core/TableCell";

import FormTextField from "Components/Form/Components/FormTextField";
import FormSelectField from "Components/Form/Components/FormSelectField";

const FormBlock = ({
  label,
  value,
  handleChange,
  target,
  targetType,
  selectValues,
  customTextField,
  required,
  empty
}) => {


  return (
    <React.Fragment>
      <TableCell style={{ borderBottom: "none", width: "15%" }} align="right">
        {label}
        {required && <sup style={{ color: "red" }}>*</sup>}
      </TableCell>
      <TableCell style={{ borderBottom: "none", width: "35%" }}>
        {!empty &&
          (customTextField ? (
            customTextField
          ) : selectValues ? (
            <FormSelectField
              value={value}
              handleChange={handleChange}
              target={target}
              targetType={targetType}
              selectValues={selectValues}
            />
          ) : (
            <FormTextField
              value={value}
              // handleChange={handleChange}
              handleChange ={(e, value, target) => handleChange(e, value, target)}
              target={target}
              targetType={targetType}
            />
          ))}
      </TableCell>
    </React.Fragment>
  );
};

export default FormBlock;
