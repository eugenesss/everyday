import React, { Component } from "react";
import { connect } from "react-redux";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Form Layout
import FormWrapper from "Components/Form/Components/Layout/FormWrapper";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

// Input Components
import FormInput from "Components/Form/Components/FormInput";
import AmountInput from "Components/Form/Components/Inputs/AmountInput";
import DatePickerInput from "Components/Form/Components/Pickers/DatePicker";

// Actions
import { getDealFormFields } from "Actions";

const initialState = {
  deal: {
    userId: localStorage.getItem("user_id"),
    name: "",
    amount: "",
    closingDate: "",
    accountId: "",
    customerId: "",
    stageId: "",
    sourceId: "",
    typeId: "",
    info: ""
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
    const { edit, title } = this.props;
    return (
      <FormWrapper
        onSave={this.onSubmit}
        onSaveNew={this.onSaveNew}
        disabled={this.checkDisabled()}
        edit={edit}
        title={title}
      >
        {loading && <RctSectionLoader />}
        <form autoComplete="off">
          <FormInputLayout
            title="Key Information"
            desc="The key fields to get you started with a new Deal record."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="Name"
                  value={deal.name}
                  target="name"
                  handleChange={this.handleChange}
                />
                <AmountInput
                  label="Amount"
                  value={deal.amount}
                  required={!deal.amount}
                  target="amount"
                  handleChange={this.handleChange}
                />
                <DatePickerInput
                  label="Closing Date"
                  value={deal.closingDate ? deal.closingDate : null}
                  required={!deal.closingDate}
                  target="closingDate"
                  handleChange={this.handleChange}
                />
              </div>
              <div className="col-5 d-block offset-md-1">
                {!edit && (
                  <FormInput
                    label="Owner"
                    value={deal.userId}
                    required={!deal.userId}
                    selectValues={users}
                    target="userId"
                    handleChange={this.handleChange}
                  />
                )}
                <FormInput
                  label="Account"
                  value={deal.accountId}
                  selectValues={accounts}
                  required={!deal.accountId}
                  target="accountId"
                  handleChange={this.handleChange}
                />
                <FormInput
                  label="Stage"
                  value={deal.stageId}
                  selectValues={dealStage}
                  required={!deal.stageId}
                  target="stageId"
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          </FormInputLayout>
          <FormInputLayout
            title="Deal Information"
            desc="The key fields to get you started with a new Deal record."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="Source"
                  value={deal.sourceId}
                  selectValues={leadSource}
                  target="sourceId"
                  handleChange={this.handleChange}
                />
                <FormInput
                  label="Customer"
                  value={deal.customerId}
                  selectValues={customers}
                  target="customerId"
                  handleChange={this.handleChange}
                />
              </div>
              <div className="col-5 d-block offset-md-1">
                <FormInput
                  label="Type"
                  value={deal.typeId}
                  selectValues={dealType}
                  target="typeId"
                  handleChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                <FormInput
                  multiline
                  rows={4}
                  label="Description"
                  value={deal.info}
                  target="info"
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          </FormInputLayout>
        </form>
      </FormWrapper>
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
