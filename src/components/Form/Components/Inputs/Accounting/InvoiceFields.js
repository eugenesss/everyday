import React from "react";
import { TableCell, TableRow, TextField } from "@material-ui/core";
import { Form, FormGroup, Label, Col } from "reactstrap";
import FormBlock from "Components/Form/Components/FormBlock";
import FormTable from "Components/Form/Components/FormTable";
import FormTextField from "Components/Form/Components/FormTextField";
import FormSelectField from "Components/Form/Components/FormSelectField";

// input
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";

const InvoiceFields = ({ handleChange, handleAttnTo, invoice }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Form>
          <FormGroup row>
            <Label for="Email-1" className="fs-13 text-right" sm={2}>
              Subject
            </Label>
            <Col sm={10}>
              <FormTextField
                value={"subject"}
                //handleChange={handleChange}
                //target={target}
                //targetType={targetType}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Related Account
            </Label>
            <Col sm={10}>
              <FormSelectField
                //value={}
                selectValues={[{ id: 1, name: "Account 1" }]}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Attn To
            </Label>
            <Col sm={10}>
              <FormSelectField
                //value={}
                selectValues={[{ id: 1, name: "Account 1" }]}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Currency
            </Label>
            <Col sm={4}>
              <FormSelectField
                //value={}
                selectValues={[{ id: 1, name: "Account 1" }]}
              />
            </Col>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Date
            </Label>
            <Col sm={4}>
              <FormSelectField
                //value={}
                selectValues={[{ id: 1, name: "Account 1" }]}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Select-1" className="fs-13 text-right" sm={2}>
              Currency Rate
            </Label>
            <Col sm={4}>
              <FormTextField value={""} />
            </Col>
          </FormGroup>
        </Form>
      </div>
      <div className="col-md-6">
        <FormTable>
          <TableRow>
            <FormBlock
              label="Owner"
              selectValues={[{ id: 1, name: "Admin admin" }]}
              required
            />
            <TableCell colSpan={2} style={{ borderBottom: "none" }}>
              <TextField
                fullWidth
                inputProps={{
                  readOnly: true
                }}
                id="standard-disabled"
                label="Status"
                defaultValue="Draft"
                margin="dense"
                variant="outlined"
              />
            </TableCell>
          </TableRow>
        </FormTable>
        <AddressFormInput />
        <FormTable>
          <TableRow>
            <FormBlock label="Email" required />
            <FormBlock label="Phone" />
          </TableRow>
        </FormTable>
      </div>
    </div>
  );
};

export default InvoiceFields;
