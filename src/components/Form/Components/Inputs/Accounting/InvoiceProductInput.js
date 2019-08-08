import React, {PureComponent} from "react";
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

export default class InvoiceProductInput extends PureComponent {

  render() {
    const {
      invoice,
      products,
      handleChange,
      handleAdd,
      handleRemove,
      taxTable,
      disabled
    } = this.props

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
              <TableCell style={{ width: "10%" }}>Discount Unit in Dollar</TableCell>
              <TableCell style={{ width: "10%" }}>Amount</TableCell>
              <TableCell style={{ width: "10%" }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, key) => {


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

                    {!disabled && 
                      <TextField
                          value={row.description}
                          onChange={e =>
                            handleChange(key, "description", e.target.value)
                          }
                          fullWidth
                          margin="dense"
                          variant="outlined"
                          disabled={disabled}
                      />
                    }

                    {disabled && 
                      <p>{row.description}</p>
                    }

                  </TableCell>
                  <TableCell style={{ padding: "4px 24px 4px 24px" }}>
                    
                      {!disabled && 
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
                          disabled={disabled}
                        />
                      }

                      {disabled && 
                        <p>{row.quantity}</p>
                      }

                  </TableCell>
                  <TableCell style={{ padding: "4px 24px 4px 24px" }}>

                      {!disabled && 
                        <TextField
                          value={row.price}
                          onChange={e => handleChange(key, "price", e.target.value)}
                          fullWidth
                          margin="dense"
                          variant="outlined"
                          type="number"
                          step="1"
                          disabled={disabled}
                        />
                      }
                  
                      {disabled && 
                        <p>{row.price}</p>
                      }
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
                    
                      {!disabled && 
                        <FormSelectField
                          value={row.tax_id}
                          selectValues={taxTable}
                          target={"tax_id"}
                          handleChange ={(target, e, targetType) => handleChange(key, "tax_id", e)}
                          accounting={true}
                        />
                      }

                      {disabled && 
                        <p>{row.tax_id.name}</p>
                      }
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
                    {row.tax_rate == 0? <p>0%</p>: <p>{row.tax_rate}</p>}
                    {/* <p>{row.tax_rate?}</p> */}
                  </TableCell>


                  <TableCell>
                    {!disabled && 
                      <TextField
                          value={row.discount? row.discount:0}
                          onChange={e =>
                            handleChange(key, "discount", e.target.value)
                          }
                          fullWidth
                          type={"number"}
                          margin="dense"
                          variant="outlined"
                          disabled={disabled}
                      />
                    }

                    {disabled && 
                      <p>{row.discount? row.discount:0}</p>
                    }
                  </TableCell>

              


                  <TableCell>{row.amount? ccyFormat(row.amount) : 0 }</TableCell>


                  {!disabled && 
                      <TableCell>
                        <MatButton
                          onClick={() => handleRemove(key)}
                          className="text-danger"
                        >
                          <i className="zmdi zmdi-delete zmdi-hc-2x" />
                        </MatButton>
                      </TableCell>
                  }


                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
  
      
        <div className="row">
          <div className="col-md-6">
            <div>
              {!disabled && 
              <MatButton onClick={() => handleAdd()} className="text-primary">
                + New Product
              </MatButton>
              }
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
};
