import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CreditedInvoices = ({ invoices }) => {
  return (
    <div>
      <TabsHeader title="Credited Invoices" />
      <div className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice Number</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>{"INV-12931"}</TableCell>
              <TableCell>{"$10,000"}</TableCell>
              <TableCell>{"May 16, 2019 4:40pm"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CreditedInvoices;
