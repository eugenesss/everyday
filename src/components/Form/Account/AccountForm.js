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
  clearAccountForm,
  getIndustry,
  getAllUsers
} from "Actions";

class AccountForm extends Component {
  componentWillMount() {
    this.props.getIndustry();
    this.props.getAllUsers();
  }
  componentWillUnmount() {
    this.props.clearAccountForm();
  }

  checkDisabled(name, userId) {
    const disabled = name && userId;
    return disabled;
  }

  render() {
    const { account } = this.props.accountForm;
    const { industry } = this.props.crmField;
    const { users, edit } = this.props;
    return (
      <React.Fragment>
        <FormSubmitResetButtons
          onReset={this.props.clearAccountForm}
          onSubmit={this.props.handleSubmit}
          disabled={this.checkDisabled(
            account.baseContact.name,
            account.userId
          )}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="Name"
              value={account.baseContact.name}
              handleChange={this.props.handleChangeAccount}
              target="name"
              targetType="baseContact"
              required
            />
            {!edit && (
              <FormBlock
                required
                label="Owner"
                value={account.userId ? account.userId : ""}
                handleChange={this.props.handleChangeAccount}
                target="userId"
                selectValues={users}
              />
            )}
          </TableRow>
          <TableRow>
            <FormBlock
              label="Industry"
              value={account.industryId}
              handleChange={this.props.handleChangeAccount}
              target="industryId"
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
              value={account.baseContact.office}
              handleChange={this.props.handleChangeAccount}
              target="office"
              targetType="baseContact"
            />
            <FormBlock
              label="Mobile"
              value={account.baseContact.mobile}
              handleChange={this.props.handleChangeAccount}
              target="mobile"
              targetType="baseContact"
            />
          </TableRow>
          {/**
           * Fax
           */}
          <TableRow>
            <FormBlock
              label="Fax"
              value={account.baseContact.fax}
              handleChange={this.props.handleChangeAccount}
              target="fax"
              targetType="baseContact"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.props.handleChangeAccount}
          address_1={account.baseContact._address.address_1}
          address_2={account.baseContact._address.address_2}
          city={account.baseContact._address.city}
          state={account.baseContact._address.state}
          zip={account.baseContact._address.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeAccount}
          description={account.baseContact.info}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ crmState, usersState }) => {
  const { accountState, crmField } = crmState;
  const { users } = usersState;
  const { accountForm } = accountState;
  return { accountForm, crmField, users };
};

export default connect(
  mapStateToProps,
  {
    handleChangeAccount,
    clearAccountForm,
    getIndustry,
    getAllUsers
  }
)(AccountForm);
