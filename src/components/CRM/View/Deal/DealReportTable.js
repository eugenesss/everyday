import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";

const DealReportTable = ({ deals }) => (
  <div className="table-responsive">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Closing Date</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Source</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Owner</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {deals.map((deal, key) => {
          return (
            <TableRow hover key={key}>
              <TableCell>{deal.name}</TableCell>
              <TableCell>{/* deal.closingDate */}</TableCell>
              <TableCell>
                <NumberFormat
                  value={deal.amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </TableCell>
              <TableCell>{deal.source && deal.source.name}</TableCell>
              <TableCell>{deal.type && deal.type.name}</TableCell>
              <TableCell>{deal.owner && deal.owner.name}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </div>
);

export default DealReportTable;
