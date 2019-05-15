import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Badge } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";

const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <div>
      <DetailsHeader title="Upcoming Events" />
      <div className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell>Activity Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Activity Owner</TableCell>
              <TableCell>Modified Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>${"employee"}</TableCell>
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
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>${"employee"}</TableCell>
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
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>${"employee"}</TableCell>
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
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>${"employee"}</TableCell>
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
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>${"employee"}</TableCell>
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
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>${"employee"}</TableCell>
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
            <TableRow hover>
              <TableCell>{"employee.employeeName"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>{"employee"}</TableCell>
              <TableCell>${"employee"}</TableCell>
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

export default UpcomingEvents;
