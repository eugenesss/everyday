import React, { Component } from "react";
import { connect } from "react-redux";

//Form Components
import TableRow from "@material-ui/core/TableRow";
import FormBlock from "Components/Form/Components/FormBlock";
import FormTable from "Components/Form/Components/FormTable";

// Input Components
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import DescriptionFormInput from "Components/Form/Components/Inputs/DescriptionFormInput";
import FormSubmitResetButtons from "Components/Form/Components/FormSubmitResetButtons";

// Actions
import {
  handleChangeCustomer,
  submitCustomer,
  clearCustomerForm,
  getLeadSource
} from "Actions";

import { users } from "Components/UserDummyData";
import { accountList } from "Components/DummyData";

class CustomerForm extends Component {
  componentWillMount() {
    this.props.getLeadSource();
  }
  componentWillUnmount() {
    this.props.clearCustomerForm();
  }

  render() {
    const { customer } = this.props.customerForm;
    const { leadSource } = this.props.crmField;
    const disabled = customer.firstName && customer.lastName && customer.owner;
    return (
      <React.Fragment>
        <FormSubmitResetButtons
          onReset={this.props.clearCustomerForm}
          onSubmit={this.props.submitCustomer}
          disabled={disabled}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="First Name"
              value={customer.firstName}
              handleChange={this.props.handleChangeCustomer}
              target="firstName"
              required
            />
            <FormBlock
              required
              label="Owner"
              value={customer.owner ? customer.owner : ""}
              handleChange={this.props.handleChangeCustomer}
              target="owner"
              selectValues={users}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Last Name"
              value={customer.lastName}
              handleChange={this.props.handleChangeCustomer}
              target="lastName"
              required
            />
            <FormBlock
              label="Account"
              value={customer.account}
              handleChange={this.props.handleChangeCustomer}
              target="account"
              selectValues={accountList}
            />
          </TableRow>
          <TableRow />
          {/**
           * Job Title + Source
           */}
          <TableRow>
            <FormBlock
              label="Job Title"
              value={customer.jobTitle}
              handleChange={this.props.handleChangeCustomer}
              target="jobTitle"
            />
            <FormBlock
              label="Source"
              value={customer.source}
              handleChange={this.props.handleChangeCustomer}
              target="source"
              selectValues={leadSource}
            />
          </TableRow>
          {/**
           * Email + Mobile
           */}
          <TableRow>
            <FormBlock
              label="Email"
              value={customer.email}
              handleChange={this.props.handleChangeCustomer}
              target="email"
            />
            <FormBlock
              label="Mobile"
              value={customer.mobile}
              handleChange={this.props.handleChangeCustomer}
              target="mobile"
            />
          </TableRow>
          {/**
           * Office + Fax
           */}
          <TableRow>
            <FormBlock
              label="Office"
              value={customer.office}
              handleChange={this.props.handleChangeCustomer}
              target="office"
            />
            <FormBlock
              label="Fax"
              value={customer.fax}
              handleChange={this.props.handleChangeCustomer}
              target="fax"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.props.handleChangeCustomer}
          address_1={customer.address_1}
          address_2={customer.address_2}
          city={customer.city}
          state={customer.state}
          zip={customer.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeCustomer}
          description={customer.description}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { customerState, crmField } = crmState;
  const { customerForm } = customerState;
  return { customerForm, crmField };
};

export default connect(
  mapStateToProps,
  { handleChangeCustomer, submitCustomer, clearCustomerForm, getLeadSource }
)(CustomerForm);
