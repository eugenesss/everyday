import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TextField from "@material-ui/core/TextField";

import InvoiceTotalTableInput from "./InvoiceTotalTableInput";
import FormSelectField from "Components/Form/Components/FormSelectField";
import MatButton from "@material-ui/core/Button";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const InvoiceProductInput = ({
  invoice,
  products,
  handleChange,
  handleAdd,
  handleRemove,
  taxTable
}) => {
  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            {/* <TableCell>Item</TableCell> */}
            <TableCell>Description</TableCell>
            <TableCell style={{ width: "10%" }}>Qty</TableCell>
            <TableCell style={{ width: "10%" }}>Unit Price</TableCell>
            {/* <TableCell style={{ width: "10%", padding: "4px 24px 4px 24px" }}>
              Discount (%)
            </TableCell> */}
            <TableCell style={{ width: "10%", padding: "4px 24px 4px 24px" }}>
              Tax ID
            </TableCell>
            <TableCell style={{ width: "10%" }}>Tax (%)</TableCell>
            <TableCell style={{ width: "10%" }}>Amount</TableCell>
            <TableCell style={{ width: "10%" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, key) => {
            // console.log(row)
            return (
              <TableRow key={key}>
                <TableCell>
                  <p>{key+1}</p>
                </TableCell>
                {/* <TableCell>
                  <TextField
                    value={row.name}
                    onChange={e => handleChange(key, "name", e.target.value)}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                  />
                </TableCell> */}
                <TableCell>
                  <TextField
                    value={row.description}
                    onChange={e =>
                      handleChange(key, "description", e.target.value)
                    }
                    fullWidth
                    margin="dense"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell style={{ padding: "4px 24px 4px 24px" }}>
                  <TextField
                    value={row.quantity}
                    onChange={e =>
                      handleChange(key, "quantity", e.target.value)
                    }
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    type="number"
                    step="1"
                  />
                </TableCell>
                <TableCell style={{ padding: "4px 24px 4px 24px" }}>
                  <TextField
                    value={row.price}
                    onChange={e => handleChange(key, "price", e.target.value)}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    type="number"
                    step="1"
                  />
                </TableCell>
                {/* <TableCell style={{ padding: "4px 24px 4px 24px" }}>
                  <TextField
                    value={row.discount}
                    onChange={e =>
                      handleChange(key, "discount", e.target.value)
                    }
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    type="number"
                    step="1"
                  />
                </TableCell> */}
                <TableCell style={{ padding: "4px 24px 4px 24px" }}>
                    <FormSelectField
                      value={row.tax_id}
                      selectValues={taxTable}
                      // selectValues={[{id: 1, name: "Hello World", email: 'helloworld@gmail.com'}]}
                      target={"tax_id"}
                      handleChange ={(target, e, targetType) => handleChange(key, "tax_id", e)}
                    />
                </TableCell>


                <TableCell style={{ padding: "4px 24px 4px 24px" }}>
                  {/* <TextField
                    value={row.tax_amount}
                    // onChange={e =>
                    //   handleChange(key, "tax_amount", e.target.value)
                    // }
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    type="number"
                    step="1"
                  /> */}
                  <p>{row.tax_rate}</p>
                </TableCell>



                <TableCell>{ccyFormat(row.amount)}</TableCell>
                <TableCell>
                  <MatButton
                    onClick={() => handleRemove(key)}
                    className="text-danger"
                  >
                    <i className="zmdi zmdi-delete zmdi-hc-2x" />
                  </MatButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="row">
        <div className="col-md-6">
          <div>
            <MatButton onClick={() => handleAdd()} className="text-primary">
              + New Product
            </MatButton>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <InvoiceTotalTableInput invoice={invoice} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InvoiceProductInput;
