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
  submitDeal,
  clearDealForm,
  getLeadSource
} from "Actions";

import { users } from "Components/UserDummyData";
import {
  accountList,
  customerList,
  dealStage,
  dealType
} from "Components/DummyData";

class DealForm extends Component {
  componentWillMount() {
    this.props.getLeadSource();
  }
  componentWillUnmount() {
    this.props.clearDealForm();
  }

  render() {
    const { loading, deal } = this.props.dealForm;
    const { leadSource } = this.props.crmField;
    const disabled =
      deal.name &&
      deal.owner &&
      deal.amount &&
      deal.stage &&
      deal.closingDate &&
      deal.account;
    return (
      <React.Fragment>
        <FormSubmitResetButtons
          onReset={this.props.clearDealForm}
          onSubmit={this.props.submitDeal}
          disabled={disabled}
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
            <FormBlock
              required
              label="Owner"
              value={deal.owner ? deal.owner : ""}
              handleChange={this.props.handleChangeDeal}
              target="owner"
              selectValues={users}
            />
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
            <FormBlock
              required
              label="Stage"
              value={deal.stage}
              handleChange={this.props.handleChangeDeal}
              target="stage"
              selectValues={dealStage}
            />
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
              value={deal.account}
              handleChange={this.props.handleChangeDeal}
              target="account"
              selectValues={accountList}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Customer"
              value={deal.customer}
              handleChange={this.props.handleChangeDeal}
              target="customer"
              selectValues={customerList}
            />
          </TableRow>
          {/**
           * Type + Source
           */}
          <TableRow>
            <FormBlock
              label="Type"
              value={deal.type}
              handleChange={this.props.handleChangeDeal}
              target="type"
              selectValues={dealType}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Source"
              value={deal.source}
              handleChange={this.props.handleChangeDeal}
              target="source"
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
const mapStateToProps = ({ crmState }) => {
  const { dealState, crmField } = crmState;
  const { dealForm } = dealState;
  return { dealForm, crmField };
};

export default connect(
  mapStateToProps,
  { handleChangeDeal, submitDeal, clearDealForm, getLeadSource }
)(DealForm);
