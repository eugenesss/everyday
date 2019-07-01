import React, { Component } from "react";
import { connect } from "react-redux";

//Form Components
import TableRow from "@material-ui/core/TableRow";
import FormBlock from "Components/Form/Components/FormBlock";
import FormTable from "Components/Form/Components/FormTable";

// Input Components
import DescriptionFormInput from "Components/Form/Components/Inputs/DescriptionFormInput";
import FormSubmitResetButtons from "Components/Form/Components/FormSubmitResetButtons";
import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import DatePickerInput from "Components/Form/Components/Pickers/DatePicker";

// Actions
import {
  handleChangeDeal,
  clearDealForm,
  getLeadSource,
  getDealType,
  getDealStage,
  getAllUsers,
  getAllAccount,
  getAllCustomer
} from "Actions";

class DealForm extends Component {
  componentWillMount() {
    this.props.getLeadSource();
    this.props.getDealStage();
    this.props.getDealType();
    this.props.getAllUsers();
    this.props.getAllAccount();
    this.props.getAllCustomer();
  }
  componentWillUnmount() {
    this.props.clearDealForm();
  }

  checkDisabled(name, owner, amount, stageId, closingDate, accountId) {
    const disabled =
      name && owner && amount && stageId && closingDate && accountId;
    return disabled;
  }

  render() {
    const { deal } = this.props.dealForm;
    const { users, allAccounts, allCustomers, edit } = this.props;
    const { leadSource, dealStage, dealType } = this.props.crmField;
    return (
      <React.Fragment>
        <FormSubmitResetButtons
          onReset={this.props.clearDealForm}
          onSubmit={this.props.handleSubmit}
          disabled={this.checkDisabled(
            deal.name,
            deal.userId,
            deal.amount,
            deal.stageId,
            deal.closingDate,
            deal.accountId
          )}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="Name"
              value={deal.name}
              handleChange={this.props.handleChangeDeal}
              target="name"
              required
            />
            {!edit && (
              <FormBlock
                required
                label="Owner"
                value={deal.userId ? deal.userId : ""}
                handleChange={this.props.handleChangeDeal}
                target="userId"
                selectValues={users}
              />
            )}
          </TableRow>
          <TableRow>
            <FormBlock
              required
              label="Amount"
              customTextField={
                <AmountInput
                  value={deal.amount}
                  onChange={e =>
                    this.props.handleChangeDeal("amount", e.target.value)
                  }
                />
              }
            />
            {!edit && (
              <FormBlock
                required
                label="Stage"
                value={deal.stageId}
                handleChange={this.props.handleChangeDeal}
                target="stageId"
                selectValues={dealStage}
              />
            )}
          </TableRow>
          <TableRow>
            <FormBlock
              required
              label="Closing Date"
              customTextField={
                <DatePickerInput
                  value={deal.closingDate ? deal.closingDate : null}
                  onChange={date =>
                    this.props.handleChangeDeal(
                      "closingDate",
                      date.format("YYYY-MM-DD")
                    )
                  }
                />
              }
            />
            <FormBlock
              required
              label="Account"
              value={deal.accountId}
              handleChange={this.props.handleChangeDeal}
              target="accountId"
              selectValues={allAccounts}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Customer"
              value={deal.customerId}
              handleChange={this.props.handleChangeDeal}
              target="customerId"
              selectValues={allCustomers}
            />
          </TableRow>
          {/**
           * Type + Source
           */}
          <TableRow>
            <FormBlock
              label="Type"
              value={deal.typeId}
              handleChange={this.props.handleChangeDeal}
              target="typeId"
              selectValues={dealType}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Source"
              value={deal.sourceId}
              handleChange={this.props.handleChangeDeal}
              target="sourceId"
              selectValues={leadSource}
            />
          </TableRow>
        </FormTable>
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeDeal}
          description={deal.description}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState, usersState }) => {
  const { dealState, crmField, customerState, accountState } = crmState;
  const { users } = usersState;
  const allCustomers = customerState.customerList.tableData;
  const allAccounts = accountState.accountList.tableData;
  const { dealForm } = dealState;
  return { dealForm, crmField, users, allAccounts, allCustomers };
};

export default connect(
  mapStateToProps,
  {
    handleChangeDeal,
    clearDealForm,
    getLeadSource,
    getDealType,
    getDealStage,
    getAllUsers,
    getAllAccount,
    getAllCustomer
  }
)(DealForm);
