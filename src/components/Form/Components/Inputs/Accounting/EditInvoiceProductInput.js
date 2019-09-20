// import React, { PureComponent } from "react";
// import Table from "@material-ui/core/Table";
// import TableRow from "@material-ui/core/TableRow";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TextField from "@material-ui/core/TextField";

// import InvoiceTotalTableInput from "./InvoiceTotalTableInput";
// // import FormSelectField from "Components/Form/Components/FormSelectField";
// import MatButton from "@material-ui/core/Button";
// import Button from "@material-ui/core/Button";

// import DeleteIcon from '@material-ui/icons/Delete';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import AutorenewIcon from '@material-ui/icons/Autorenew';





// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// export default class InvoiceProductInput extends PureComponent {
//   render() {
//     const {
//       // invoice,
//       products,
//       handleChange,
//       handleAdd,
//       handleRemove,
//       restart,
//       taxTable,
//       disabled,
//       edit
//     } = this.props;

//     return (
//       <React.Fragment>

    

//         {products.map((row, key) => {
//           return (
//             <div
//               style={{
//                 flex: "row",
//                 flexDirection: "row",
//                 display: "flex",
//                 marginBottom: 20,
//                 justifyContent: "center"
//               }}
//               key={key}
//             >
//               {edit && 
//                 <FormInput
//                   label="Description"
//                   value={row.description}
//                   required={!row.description}
//                   target="description"
//                   keys={key}
//                   handleChange={handleChange}
//                 />
//               }

//               {!edit && 
//                 <EditableInput
//                   label="Description"
//                   value={row.description}
//                 />
//               }

//               {edit && 
//                 <AmountInput
//                   label="Quantity"
//                   value={row.quantity}
//                   required={!row.quantity}
//                   nodollar
//                   target="quantity"
//                   keys={key}
//                   handleChange={handleChange}
//                 />
//               }

//               {!edit && 
//                 <EditableInput
//                   label="Quantity"
//                   value={row.quantity}
//                 />
//               }


//               {edit && 
//                 <AmountInput
//                   label="Price Per Item"
//                   value={row.price}
//                   required={!row.price}
//                   target="price"
//                   // nodollar
//                   keys={key}
//                   handleChange={handleChange}
//                 />
//               }

//               {!edit && 
//                 <EditableInput
//                   label="Price"
//                   value={row.price}
//                 />
//               }

              
//               {edit && 
//                 <FormMultiInput
//                   label="Tax Options"
//                   value={row.tax_id}
//                   required={!row.tax_id}
//                   selectValues={taxTable}
//                   target="tax_id"
//                   keys={key}
//                   handleChange={handleChange}
//                 />
//               }

//               {edit &&
//                 <FormInput
//                   label="Tax"
//                   disabled={true}
//                   value={`${row.tax_rate}%`}
//                 />
//               }

//               {!edit &&
//                 <EditableInput
//                   label="Tax"
//                   value={`${row.tax_rate}%`}
//                 />
//               }

//               {/* <div style={{width:'80%'}}>
//                 <EditableInput style={{fontSize: 35, color:'#464d69'}} label="Tax" value={`${row.tax_rate}%`} />
//               </div> */}

//               {edit &&
//                 <AmountInput
//                     label="Discount"
//                     value={row.discount}
//                     target="discount"
//                     keys={key}
//                     handleChange={handleChange}
//                     // onChange={e => {
//                     //   console.log(e.target.value)
//                     //   handleChange("price", e.target.value, key)
//                     // }}
//                 />
//               }

//               {!edit &&
//                 <EditableInput
//                   label="Discount"
//                   value={`${row.discount}`}
//                 />
//               }

//               {edit &&
//                 <FormInput 
//                   label="Amount"
//                   disabled={true} 
//                   value={row.amount? `$${row.amount}`: `$0`}
//                   // handleChange={handleChange}
//                 />
//               }

//               {!edit &&
//                 <EditableInput
//                   label="Amount"
//                   value={row.amount? `$${row.amount}`: `$0`}
//                 />
//               }



//               {/* <div style={{width:'80%'}}>
//                 <EditableInput style={{fontSize: 35, color:'#464d69'}} label="Amount" value={`$${row.amount}`} />
//               </div> */}

//               {edit &&
//                 <div>
//                   {key > 0 && (
//                     <div className="flex-column d-flex align-items-center justify-content-center">
//                       <DeleteIcon
//                         variant="contained"
//                         color="primary"
//                         fontSize="large"
//                         onClick={() => handleRemove(key)}
//                       />
//                       Delete                    
//                     </div>
//                   )}
//                 </div>
//               }

//               {edit &&
//                 <div>
//                   {key == 0 && (
//                     <div className="flex-column d-flex align-items-center justify-content-center">
//                       <AutorenewIcon
//                         variant="contained"
//                         color="primary"
//                         fontSize="large"
//                         // className="ml-10"
//                         onClick={() => restart()}
//                       />
//                         Restart
//                     </div>
//                   )}
//                 </div>
//               }

//             </div>
//           );
//         })}

//         {edit &&
//           <div className="row" style={{marginTop: 10}}>
//             <div className="col-md-12 d-flex justify-content-end">
//               <div className="d-flex align-items-center">
//                 {!disabled && (
//                   <div className="flex-column d-flex align-items-center">
//                   <AddCircleIcon
//                     variant="contained"
//                     color="primary"
//                     fontSize="large"
//                     // className="text-white ml-10"
//                     onClick={() => handleAdd()}
//                   />
//                     Add Product
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         }
        
//       </React.Fragment>
//     );
//   }
// }



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import FormInput from "Components/Form/Components/FormInput";
import FormMultiInput from "Components/Form/Components/FormMultiInput";
import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import DatePickerInput from "Components/Form/Components/Pickers/DatePicker";

import EditableInput from "Components/Everyday/Profile/Details/EditableInput";


const TAX_RATE = 0.07;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable(props) {

    const classes = useStyles();

    const {
      products,
      quotation,
      handleChange,
      handleAdd,
      handleRemove,
      restart,
      taxTable,
      disabled,
      edit
    } = props;



    // description, quantity, price, tax option, tax %, discount, total amount, 
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Tax Options</TableCell>
              <TableCell align="right">Tax</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Total Amount</TableCell>

            </TableRow>
          </TableHead>

          <TableBody>

            {products.map((row, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <FormInput
                        // label="Description"
                        value={row.description}
                        required={!row.description}
                        target="description"
                        keys={key}
                        handleChange={handleChange}
                        style={{margin:0, padding:0}}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <AmountInput
                        value={row.quantity}
                        required={!row.quantity}
                        nodollar
                        target="quantity"
                        keys={key}
                        handleChange={handleChange}
                        style={{margin:0, padding:0}}

                    />

                  </TableCell>
                  <TableCell align="right">
                    <AmountInput
                        value={row.price}
                        required={!row.price}
                        target="price"
                        // nodollar
                        keys={key}
                        handleChange={handleChange}
                        style={{margin:0, padding:0}}

                    />
                  </TableCell>
                  <TableCell align="right">
                    <FormMultiInput
                        value={row.tax_id}
                        required={!row.tax_id}
                        selectValues={taxTable}
                        target="tax_id"
                        keys={key}
                        handleChange={handleChange}
                        style={{margin:0, padding:0}}
                    />
                  </TableCell>

                  <TableCell align="right">
                    <FormInput
                        disabled={true}
                        value={`${row.tax_rate}%`}
                        style={{margin:0, padding:0}}
                    />
                  </TableCell>   

                  <TableCell align="right">

                    <AmountInput
                        value={row.discount}
                        target="discount"
                        keys={key}
                        handleChange={handleChange}
                        style={{margin:0, padding:0}}
                        // onChange={e => {
                        //   console.log(e.target.value)
                        //   handleChange("price", e.target.value, key)
                        // }}
                    />
                  </TableCell>
                  <TableCell align="right">{`$${row.amount}`}</TableCell>
                </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={4} rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(quotation.subtotal)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Tax</TableCell>
              <TableCell align="right">{ccyFormat(quotation.tax_amount)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(quotation.totalAmt)}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </Paper>
    );
  
}