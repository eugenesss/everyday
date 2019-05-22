import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import FormTextField from "Components/Form/Components/FormTextField";

const AddressFormInput = ({
  handleChange,
  address,
  address2,
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
            Address
          </TableCell>
          <TableCell
            colSpan={5}
            style={{ borderBottom: "none" }}
            padding="dense"
          >
            <FormTextField
              value={address}
              handleChange={handleChange}
              target="address"
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
              value={address2}
              handleChange={handleChange}
              target="address2"
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
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AddressFormInput;