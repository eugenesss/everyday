import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TextField from "@material-ui/core/TextField";

const DescriptionFormInput = ({ handleChange, description }) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell
            style={{ borderBottom: "none", width: "15%" }}
            padding="dense"
            align="right"
          >
            Description
          </TableCell>
          <TableCell
            colSpan={5}
            style={{ borderBottom: "none" }}
            padding="dense"
          >
            <TextField
              multiline
              fullWidth
              rows="6"
              defaultValue={description}
              onChange={e => handleChange("description", e.target.value)}
              margin="dense"
              variant="outlined"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DescriptionFormInput;
