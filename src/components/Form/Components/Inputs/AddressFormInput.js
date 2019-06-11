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
            padding="dense"
            align="right"
          >
            Address 1
          </TableCell>
          <TableCell
            colSpan={5}
            style={{ borderBottom: "none" }}
            padding="dense"
          >
            <FormTextField
              value={address_1}
              handleChange={handleChange}
              target="address_1"
              targetType="address"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            style={{ borderBottom: "none", width: "15%" }}
            padding="dense"
            align="right"
          >
            Address 2
          </TableCell>
          <TableCell
            colSpan={5}
            style={{ borderBottom: "none" }}
            padding="dense"
          >
            <FormTextField
              value={address_2}
              handleChange={handleChange}
              target="address_2"
              targetType="address"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            style={{ borderBottom: "none" }}
            padding="dense"
            align="right"
          >
            City
          </TableCell>
          <TableCell style={{ borderBottom: "none" }} padding="dense">
            <FormTextField
              value={city}
              handleChange={handleChange}
              target="city"
              targetType="address"
            />
          </TableCell>
          <TableCell
            style={{ borderBottom: "none" }}
            padding="dense"
            align="right"
          >
            State
          </TableCell>
          <TableCell style={{ borderBottom: "none" }} padding="dense">
            <FormTextField
              value={state}
              handleChange={handleChange}
              target="state"
              targetType="address"
            />
          </TableCell>
          <TableCell
            style={{ borderBottom: "none" }}
            padding="dense"
            align="right"
          >
            Zip
          </TableCell>
          <TableCell style={{ borderBottom: "none" }} padding="dense">
            <FormTextField
              value={zip}
              handleChange={handleChange}
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
