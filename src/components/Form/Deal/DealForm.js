import React, { Component } from "react";
import { connect } from "react-redux";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

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
import { getDealFormFields } from "Actions";

const initialState = {
  deal: {
    name: "",
    amount: "",
    closingDate: "",
    accountId: "",
    customerId: "",
    stageId: "",
    sourceId: "",
    typeId: ""
  }
};

class DealForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSaveNew = this.onSaveNew.bind(this);
  }
  componentDidMount() {
    this.props.getDealFormFields();
    if (this.props.edit) this.setState({ deal: this.props.edit });
  }

  handleChange(field, value) {
    this.setState({ deal: { ...this.state.deal, [field]: value } });
  }

  onSubmit() {
    this.props.handleSubmit(this.state.deal, true);
  }

  onSaveNew() {
    this.props.handleSubmit(this.state.deal, false);
    this.setState(initialState);
  }

  checkDisabled() {
    const {
      name,
      userId,
      amount,
      stageId,
      closingDate,
      accountId
    } = this.state.deal;
    const disabled =
      name && userId && amount && stageId && closingDate && accountId;
    return disabled;
  }

  render() {
    const { deal } = this.state;
    const { loading, fields } = this.props.dealForm;
    const {
      users,
      accounts,
      customers,
      leadSource,
      dealStage,
      dealType
    } = fields;
    const { edit } = this.props;
    return (
      <React.Fragment>
        {loading && <RctSectionLoader />}
        <FormSubmitResetButtons
          onReset={this.props.clearDealForm}
          onSubmit={this.onSubmit}
          onSaveNew={this.onSaveNew}
          disabled={this.checkDisabled()}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="Name"
              value={deal.name}
              handleChange={this.handleChange}
              target="name"
              required
            />
            {!edit && (
              <FormBlock
                required
                label="Owner"
                value={deal.userId ? deal.userId : ""}
                handleChange={this.handleChange}
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
                  onChange={e => this.handleChange("amount", e.target.value)}
                />
              }
            />
            {!edit && (
              <FormBlock
                required
                label="Stage"
                value={deal.stageId}
                handleChange={this.handleChange}
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
                    this.handleChange("closingDate", date.format("YYYY-MM-DD"))
                  }
                />
              }
            />
            <FormBlock
              required
              label="Account"
              value={deal.accountId}
              handleChange={this.handleChange}
              target="accountId"
              selectValues={accounts}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Customer"
              value={deal.customerId}
              handleChange={this.handleChange}
              target="customerId"
              selectValues={customers}
            />
          </TableRow>
          {/**
           * Type + Source
           */}
          <TableRow>
            <FormBlock
              label="Type"
              value={deal.typeId}
              handleChange={this.handleChange}
              target="typeId"
              selectValues={dealType}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              label="Source"
              value={deal.sourceId}
              handleChange={this.handleChange}
              target="sourceId"
              selectValues={leadSource}
            />
          </TableRow>
        </FormTable>
        <hr />
        <DescriptionFormInput
          handleChange={this.handleChange}
          description={deal.description}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { dealState } = crmState;
  const { dealForm } = dealState;
  return { dealForm };
};

export default connect(
  mapStateToProps,
  {
    getDealFormFields
  }
)(DealForm);
