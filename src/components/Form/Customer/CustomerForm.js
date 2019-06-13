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
  getLeadSource,
  getAllUsers,
  getAllAccount
} from "Actions";

class CustomerForm extends Component {
  componentWillMount() {
    this.props.getLeadSource();
    this.props.getAllUsers();
    this.props.getAllAccount();
  }
  componentWillUnmount() {
    this.props.clearCustomerForm();
  }

  render() {
    const { customer } = this.props.customerForm;
    const { leadSource } = this.props.crmField;
    const { users, allAccounts } = this.props;
    const disabled =
      customer.baseContact.firstName &&
      customer.baseContact.lastName &&
      customer.userId;
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
              value={customer.baseContact.firstName}
              handleChange={this.props.handleChangeCustomer}
              target="firstName"
              targetType="baseContact"
              required
            />
            <FormBlock
              required
              label="Owner"
              value={customer.userId ? customer.userId : ""}
              handleChange={this.props.handleChangeCustomer}
              target="userId"
              selectValues={users}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Last Name"
              value={customer.baseContact.lastName}
              handleChange={this.props.handleChangeCustomer}
              target="lastName"
              targetType="baseContact"
              required
            />
            <FormBlock
              label="Account"
              value={customer.accountId}
              handleChange={this.props.handleChangeCustomer}
              target="accountId"
              selectValues={allAccounts}
            />
          </TableRow>
          <TableRow />
          {/**
           * Job Title + Source
           */}
          <TableRow>
            <FormBlock
              label="Job Title"
              value={customer.baseContact.title}
              handleChange={this.props.handleChangeCustomer}
              target="title"
              targetType="baseContact"
            />
            <FormBlock
              label="Source"
              value={customer.sourceId}
              handleChange={this.props.handleChangeCustomer}
              target="sourceId"
              selectValues={leadSource}
            />
          </TableRow>
          {/**
           * Email + Mobile
           */}
          <TableRow>
            <FormBlock
              label="Email"
              value={customer.baseContact.email}
              handleChange={this.props.handleChangeCustomer}
              target="email"
              targetType="baseContact"
            />
            <FormBlock
              label="Mobile"
              value={customer.baseContact.mobile}
              handleChange={this.props.handleChangeCustomer}
              target="mobile"
              targetType="baseContact"
            />
          </TableRow>
          {/**
           * Office + Fax
           */}
          <TableRow>
            <FormBlock
              label="Office"
              value={customer.baseContact.office}
              handleChange={this.props.handleChangeCustomer}
              target="office"
              targetType="baseContact"
            />
            <FormBlock
              label="Fax"
              value={customer.baseContact.fax}
              handleChange={this.props.handleChangeCustomer}
              target="fax"
              targetType="baseContact"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.props.handleChangeCustomer}
          address_1={customer.baseContact._address.address_1}
          address_2={customer.baseContact._address.address_2}
          city={customer.baseContact._address.city}
          state={customer.baseContact._address.state}
          zip={customer.baseContact._address.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeCustomer}
          description={customer.baseContact.description}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ crmState, usersState }) => {
  const { customerState, crmField, accountState } = crmState;
  const { accountList } = accountState;
  const allAccounts = accountList.tableData;
  const { users } = usersState;
  const { customerForm } = customerState;
  return { customerForm, crmField, users, allAccounts };
};

export default connect(
  mapStateToProps,
  {
    handleChangeCustomer,
    submitCustomer,
    clearCustomerForm,
    getLeadSource,
    getAllUsers,
    getAllAccount
  }
)(CustomerForm);
