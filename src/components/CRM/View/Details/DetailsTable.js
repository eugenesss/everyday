import React from "react";
import { Table } from "reactstrap";

const DetailsTable = ({ children }) => {
  return (
    <Table
      className="b-0"
      borderless
      style={{ width: "65%", marginLeft: "auto", marginRight: "auto" }}
    >
      <tbody>{children}</tbody>
    </Table>
  );
};

export default DetailsTable;
