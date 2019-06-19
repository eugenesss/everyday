import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

const FormTable = ({ children }) => {
  return (
    <Table size="small">
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export default FormTable;
