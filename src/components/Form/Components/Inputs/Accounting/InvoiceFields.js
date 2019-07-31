import React from "react";
import { TableCell, TableRow, TextField } from "@material-ui/core";
import { Form, FormGroup, Label, Col } from "reactstrap";
import FormBlock from "Components/Form/Components/FormBlock";
import FormTable from "Components/Form/Components/FormTable";
import FormTextField from "Components/Form/Components/FormTextField";
import FormSelectField from "Components/Form/Components/FormSelectField";
// import TextField from "@material-ui/core/TextField";


import Moment from 'moment'
// input
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';

const InvoiceFields = ({currencyTable, handleChange, quotation, handleAttnTo, invoice, discountTable, tableData, attn_to_array , users}) => {



  return (
    <div className="row">

      <div className="col-md-6">
        <div style={{display:'flex', flexDirection:'row'}}>
            <Label for="Select-1" className="fs-13 text-center" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              {/* <FormTextField
                value={Moment(quotation.date).format('LL')}
                disabled={true}
              /> */}
              <KeyboardDatePicker
                margin="normal"
                style={{marginTop:0}}
                // id="mui-pickers-date"
                value={Moment(quotation.date).format('LLL')}
                onChange={e => handleChange('date', e._d)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Col>
        </div>
      </div>
                
      <div className="col-md-6">
        <div style={{display:'flex', flexDirection:'row'}}>
          <Label for="Select-1" className="fs-13 text-center" sm={2}>
            Status
          </Label>
          <Col sm={10}>
            <FormTextField
              value={quotation.state}
              disabled={true}
            />
          </Col>
        </div>
      </div>

      <div className="col-md-6">
        <Form>
     
          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Account
            </Label>
            <Col sm={10}>
              <FormSelectField
                value={quotation.accountId}
                target={"accountId"}
                handleChange ={(e, value, target) => handleChange(e, value, target)}
                selectValues={tableData}
                accounting={true}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Attn To
            </Label>
            <Col sm={10}>
              <FormSelectField
                value={quotation.attn_toId}
                selectValues={attn_to_array}
                target={"attn_toId"}
                handleChange ={(e, value, target) => handleChange(e, value, target)}
                accounting={true}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Currency
            </Label>
            <Col sm={4}>
               <FormSelectField
                value={quotation.currency}
                target={"currency"}
                handleChange ={(e, value, target) => handleChange(e, value, target)}
                selectValues={currencyTable}
                accounting={true}
              />
            </Col>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Currency Rate
            </Label>
            <Col sm={4}>
              <FormTextField 
                value={quotation.currency_rate}
                handleChange ={(e, value, target) => handleChange(e, value, target)}
                target={'currency_rate'}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Discount
            </Label>
            <Col sm={4}>
               <FormSelectField
                value={quotation.discount}
                target={"discount"}
                handleChange ={(e, value, target) => handleChange(e, value, target)}
                selectValues={discountTable}
                accounting={true}
              />
            </Col>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Discount Rate
            </Label>
            <Col sm={4}>
              <FormTextField 
                value={quotation.discount_rate? `${quotation.discount_rate}%` : '0%'}
                handleChange ={(e, value, target) => handleChange(e, value, target)}
                target={'discount_rate'}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="Email-1" className="fs-13 text-right" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <FormTextField
                value={quotation.description}
                handleChange ={(e, value, target) => handleChange(e, value, target)}
                target={'description'}
                //targetType={targetType}
              />
            </Col>
          </FormGroup>
        
          {/* <FormTable>
          <TableRow>
            <FormBlock 
              label="Email"
              target={"Email"}
              value={quotation.email}
              required
              handleChange ={(e, value, target) => handleChange(e, value, target)}
            />
            <FormBlock 
              label="mobile"
              value={quotation.mobile}
              target={"mobile"}
              handleChange ={(e, value, target) => handleChange(e, value, target)}
            />
          </TableRow>
        </FormTable> */}
        </Form>
      </div>
     
      <div className="col-md-6">

        <div style={{display:'flex', flexDirection:'row'}}>
          <FormBlock
              label="Owner"
              target={"owner"}
              value={quotation.owner}
              selectValues={users}
              handleChange ={(e, value, target) => handleChange(e, value, target)}
              required
              accounting={true}
              style={{width: '100%', borderBottom : '0px solid black'}}
            />
        </div>

        <div style={{display:'flex', flexDirection:'row'}}>
          <Label for="Select-1" className="fs-13 text-center" sm={2}>
            Attention To
          </Label>
          <Col sm={10}>
              <TextField
                id="outlined-multiline-static"
                // label="details"
                multiline
                rows="6"
                // defaultValue="Fill up with account details"
                value={quotation.details}
                // className={classes.textField}
                onChange ={(e) => handleChange('details', e.target.value)}
                margin="normal"
                variant="outlined"
              />
          </Col>
        </div>


      

        {/* <FormGroup row>
            <TableRow>
              <TableCell style={{ borderBottom: "none", width: "15%" }} align="right">
                Attention To
              </TableCell>
              <TableCell style={{ borderBottom: "none", width: "15%" }} align="right">
              <TextField
                    id="outlined-textarea"
                    // label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    // className={classes.textField}
                    margin="normal"
                    // variant="outlined"
              />
              </TableCell>
            </TableRow>
         </FormGroup> */}

     

{/* 
        <AddressFormInput 
          handleChange ={(e, value, target) => handleChange(e, value, target)}
          address_1={quotation.address_1}
          address_2={quotation.address_2}
          city={quotation.city}
          state={quotation.state}
          zip={quotation.zip}
        /> */}
        {/* <FormTable>
          <TableRow>
            <FormBlock 
              label="office"
              target={"office"}
              value={quotation.office}
              handleChange ={(e, value, target) => handleChange(e, value, target)}
            />
            <FormBlock 
              label="fax"
              target={"fax"}
              value={quotation.fax}
              handleChange ={(e, value, target) => handleChange(e, value, target)}
            />
          </TableRow>
        </FormTable> */}
      </div>
    </div>
  );
};

export default InvoiceFields;
