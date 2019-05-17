import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const RelatedDeals = ({ deals }) => {
  return (
    <div>
      <TabsHeader title="Related Deals" />
      <div className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Probability</TableCell>
              <TableCell>Closing Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Owner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deals ? (
              deals.map((deal, key) => {
                return (
                  <TableRow key={key} hover>
                    <TableCell>{deal.name}</TableCell>
                    <TableCell>{deal.amount}</TableCell>
                    <TableCell>{deal.stage.name}</TableCell>
                    <TableCell>{deal.stage.chance}</TableCell>
                    <TableCell>{deal.closingDate}</TableCell>
                    <TableCell>{deal.type && deal.type.name}</TableCell>
                    <TableCell>{deal.owner.fullName}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  <i>No Related Deals</i>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RelatedDeals;
