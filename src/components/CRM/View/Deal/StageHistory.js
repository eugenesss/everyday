import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Badge } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";

const stageHistory = ({ stageHistory }) => {
  return (
    <div>
      <DetailsHeader title="Stage History" />
      <div className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Stage</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Probability</TableCell>
              <TableCell>Closing Date</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Modified Time</TableCell>
              <TableCell>Modified By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>

              <TableCell>
                <Badge color="success">Done</Badge>
              </TableCell>
              <TableCell>
                <IconButton className="text-success" aria-label="Delete">
                  <i className="zmdi zmdi-check-all" />
                </IconButton>
                <IconButton className="text-danger" aria-label="Add an alarm">
                  <i className="zmdi zmdi-close" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default stageHistory;
