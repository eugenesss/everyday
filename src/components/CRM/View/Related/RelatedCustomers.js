import React from "react";
import { Link } from "react-router-dom";

import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const RelatedCustomers = ({ customers }) => {
  return (
    <div>
      <DetailsHeader title="Customers" />
      <div className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Fax</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? (
              customers.map((customer, key) => {
                return (
                  <TableRow key={key} hover>
                    <TableCell>
                      <Link to={`/app/crm/customers/${customer.id}`}>
                        {customer.fullName}
                      </Link>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.mobile}</TableCell>
                    <TableCell>{customer.fax}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  <i>No Related Customers</i>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RelatedCustomers;
