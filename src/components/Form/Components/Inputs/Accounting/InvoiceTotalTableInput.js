import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const InvoiceTotalTableInput = ({ invoice }) => {

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell rowSpan={4} />
          <TableCell colSpan={2}>Subtotal</TableCell>
          <TableCell align="right">{invoice.subtotal? ccyFormat(invoice.subtotal) : 0}</TableCell>
        </TableRow>
       
        <TableRow>
          <TableCell>Tax</TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right">{invoice.tax_amount? ccyFormat(invoice.tax_amount):0}</TableCell>
        </TableRow>

  
        <TableRow>
          <TableCell>Discount</TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right">
            {invoice.discount_rate? `${invoice.discount_rate}%`: `0%`}
          </TableCell>
        </TableRow>


        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell align="right">{invoice.totalAmt? ccyFormat(invoice.totalAmt) : 0}</TableCell>
        </TableRow>

        {/* <TableRow>
          <TableCell rowSpan={4} />
          <TableCell colSpan={2}>Balance</TableCell>
          <TableCell align="right">{ccyFormat(invoice.totalAmt)}</TableCell>
        </TableRow> */}

      </TableBody>
    </Table>
  );
};

export default InvoiceTotalTableInput;
