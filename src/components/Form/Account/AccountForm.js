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
  handleChangeAccount,
  submitAccount,
  clearAccountForm,
  getIndustry
} from "Actions";

import { users } from "Components/UserDummyData";

class AccountForm extends Component {
  componentWillMount() {
    this.props.getIndustry();
  }
  componentWillUnmount() {
    this.props.clearAccountForm();
  }

  render() {
    const { account } = this.props.accountForm;
    const { industry } = this.props.crmField;
    const disabled = account.name && account.owner;
    return (
      <React.Fragment>
        <FormSubmitResetButtons
          onReset={this.props.clearAccountForm}
          onSubmit={this.props.submitAccount}
          disabled={disabled}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="Name"
              value={account.name}
              handleChange={this.props.handleChangeAccount}
              target="name"
              required
            />
            <FormBlock
              required
              label="Owner"
              value={account.owner ? account.owner : ""}
              handleChange={this.props.handleChangeAccount}
              target="owner"
              selectValues={users}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Industry"
              value={account.industry}
              handleChange={this.props.handleChangeAccount}
              target="industry"
              selectValues={industry}
            />
          </TableRow>
          <TableRow />
          {/**
           * Office + Mobile
           */}
          <TableRow>
            <FormBlock
              label="Office"
              value={account.office}
              handleChange={this.props.handleChangeAccount}
              target="office"
            />
            <FormBlock
              label="Mobile"
              value={account.mobile}
              handleChange={this.props.handleChangeAccount}
              target="mobile"
            />
          </TableRow>
          {/**
           * Fax
           */}
          <TableRow>
            <FormBlock
              label="Fax"
              value={account.fax}
              handleChange={this.props.handleChangeAccount}
              target="fax"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.props.handleChangeAccount}
          address_1={account.address_1}
          address_2={account.address_2}
          city={account.city}
          state={account.state}
          zip={account.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeAccount}
          description={account.description}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { accountState, crmField } = crmState;
  const { accountForm } = accountState;
  return { accountForm, crmField };
};

export default connect(
  mapStateToProps,
  { handleChangeAccount, submitAccount, clearAccountForm, getIndustry }
)(AccountForm);
