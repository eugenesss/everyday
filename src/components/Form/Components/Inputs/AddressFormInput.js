import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import FormTextField from "Components/Form/Components/FormTextField";

const AddressFormInput = ({
  handleChange,
  address_1,
  address_2,
  city,
  state,
  zip
}) => {

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell
            style={{ borderBottom: "none", width: "15%" }}
            align="right"
          >
            Address 1
          </TableCell>
          <TableCell colSpan={5} style={{ borderBottom: "none" }}>
            <FormTextField
              value={address_1}
              target="address_1"
              targetType="address"
              handleChange={(e, value, target) => handleChange(e, value, target)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            style={{ borderBottom: "none", width: "15%" }}
            align="right"
          >
            Address 2
          </TableCell>
          <TableCell colSpan={5} style={{ borderBottom: "none" }}>
            <FormTextField
              value={address_2}
              handleChange={(e, value, target) => handleChange(e, value, target)}
              target="address_2"
              targetType="address"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ borderBottom: "none" }} align="right">
            City
          </TableCell>
          <TableCell style={{ borderBottom: "none" }}>
            <FormTextField
              value={city}
              target="city"
              targetType="address"
              handleChange={(e, value, target) => handleChange(e, value, target)}
            />
          </TableCell>
          {/* <TableCell style={{ borderBottom: "none" }} align="right">
            State
          </TableCell> */}
          {/* <TableCell style={{ borderBottom: "none" }}>
            <FormTextField
              value={state}
              target="state"
              targetType="address"
              handleChange={(e, value, target) => handleChange(e, value, target)}
            />
          </TableCell> */}
          <TableCell style={{ borderBottom: "none" }} align="right">
            Zip
          </TableCell>
          <TableCell style={{ borderBottom: "none" }}>
            <FormTextField
              value={zip}
              handleChange={(e, value, target) => handleChange(e, value, target)}
              target="zip"
              targetType="address"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AddressFormInput;
