import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import { getTheDate } from "Helpers/helpers";

const DealHistory = ({ history }) => {
  return (
    <ViewSectionLayout title="Deal History" bgColorClass="bg-secondary">
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
          {history &&
            history.map((his, key) => {
              return (
                <TableRow key={key} hover>
                  <TableCell>{his.stageName}</TableCell>
                  <TableCell>{his.amount}</TableCell>
                  <TableCell>{his.chance}</TableCell>
                  <TableCell>{getTheDate(his.closingDate)}</TableCell>
                  <TableCell>{his.duration}</TableCell>
                  <TableCell>{getTheDate(his.createdAt)}</TableCell>
                  <TableCell>{his.createdBy && his.createdBy.name}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </ViewSectionLayout>
  );
};

export default DealHistory;
