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
import Button from "@material-ui/core/Button";


import FormInput from "Components/Form/Components/FormInput";
import FormMultiInput from "Components/Form/Components/FormMultiInput";
import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import DatePickerInput from "Components/Form/Components/Pickers/DatePicker";


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
            {products.map((row, key) => {

              return (
                <div
                style={{flex:'row', flexDirection:'row', display:'flex', marginBottom: 20, justifyContent:"center"}}key={key}>

                    {/* <TableCell>
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
                    </TableCell> */}

                    
                    <FormInput
                      label="Description"
                      value={row.description}
                      required={!row.description}
                      target="description"
                      keys={key}
                      handleChange={handleChange}
                    />

                    <AmountInput
                      label="Quantity"
                      value={row.quantity}
                      required={!row.quantity}
                      nodollar={"true"}
                      target="quantity"
                      keys={key}
                      handleChange={handleChange}
                    />

                    <AmountInput
                      label="Price Per Item"
                      value={row.price}
                      required={!row.price}
                      target="price"
                      keys={key}
                      handleChange={handleChange}
                    />

                    <FormMultiInput
                      label="Tax Options"
                      value={row.tax_id}
                      required={!row.price}
                      selectValues={taxTable}
                      target="tax_id"
                      keys={key}
                      handleChange={handleChange}
                    />

                    <FormInput
                      label="Tax"
                      disabled={true}
                      value={`${row.tax_rate}%`}                      
                    />

                    <AmountInput
                      label="Discount"
                      value={row.discount? row.discount:0}
                      target="discount"
                      keys={key}
                      handleChange={handleChange}
                    />

                    <AmountInput
                      label="Amount"
                      disabled={true}
                      value={row.amount}
                    />
                    {/* <TableCell>{row.amount? ccyFormat(row.amount) : 0 }</TableCell> */}

                    {/* <TableCell style={{ padding: "4px 24px 4px 24px" }}>
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
                    </TableCell> */}

                    {/* <TableCell style={{ padding: "4px 24px 4px 24px" }}>

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
                    </TableCell> */}
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
                    {/* <TableCell style={{ padding: "4px 24px 4px 24px" }}>
                      
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
                    </TableCell> */}

                    {/* <TableCell style={{ padding: "4px 24px 4px 24px" }}> */}
                      {/* <TextField
                        value={row.tax_amount}
                        // onChange={e =>
                        //   handleChange(key, "tax_amount", e.target.value)
                        // }
                        fullWidths
                        margin="dense"
                        variant="outlined"
                        type="number"
                        step="1"
                      /> */}
                      {/* {row.tax_rate == 0? <p>0%</p>: <p>{row.tax_rate}</p>} */}
                      {/* <p>{row.tax_rate?}</p> */}
                    {/* </TableCell> */}

                    {/* <TableCell>
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
                    </TableCell> */}

                    {/* <TableCell>{row.amount? ccyFormat(row.amount) : 0 }</TableCell> */}

                    {/* "justify-content-end" */}

                    {key > 0 && 
                      <Button
                        variant="contained"
                        color="primary"
                        className="text-white ml-10"
                        onClick={() => handleRemove(key)}
                      >
                        Delete Item
                      </Button>
                    }
                  
                    {key == 0 && 
                      <Button
                        variant="contained"
                        color="primary"
                        className="text-white ml-10"
                        // onClick={() => handleRemove(key)}
                      >
                        Restart Item
                      </Button>
                    }
                  
                
                </div>
              );
        })}
   
      
        <div className="row">

          <div className="col-md-12 d-flex justify-content-end">
            <div>
              {!disabled && 
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white ml-10"
                  onClick={() => handleAdd()}
                >
                  Add Product
                </Button>
              }
            </div>
          </div>

        </div>

      </React.Fragment>
    );
  }
};


