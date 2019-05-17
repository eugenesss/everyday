import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const UpcomingEvents = ({ events }) => {
  return (
    <div>
      <TabsHeader title="Upcoming Events" />
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
            {events ? (
              events.map((event, key) => {
                return (
                  <TableRow key={key} hover>
                    <TableCell>{event.subject}</TableCell>
                    <TableCell>{event.type}</TableCell>
                    <TableCell>{event.status.name}</TableCell>
                    <TableCell>{event.dueDate}</TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>{event.owner.fullName}</TableCell>
                    <TableCell>{event.modifiedAt}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  <i>No Upcoming Events</i>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UpcomingEvents;
