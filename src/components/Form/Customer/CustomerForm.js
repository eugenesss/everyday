import React, { Component } from "react";
import { connect } from "react-redux";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

//Form Components
import TableRow from "@material-ui/core/TableRow";
import FormBlock from "Components/Form/Components/FormBlock";
import FormTable from "Components/Form/Components/FormTable";

// Input Components
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import DescriptionFormInput from "Components/Form/Components/Inputs/DescriptionFormInput";
import FormSubmitResetButtons from "Components/Form/Components/FormSubmitResetButtons";

// Actions
import { getCustomerFormFields } from "Actions";

const initialState = { customer: { baseContact: { _address: {} } } };

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.checkDisabled = this.checkDisabled.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.props.getCustomerFormFields();
    if (this.props.edit) this.setState({ customer: this.props.edit });
  }

  handleChange(field, value, type) {
    if (type == "baseContact") {
      this.setState({
        ...this.state,
        customer: {
          ...this.state.customer,
          baseContact: {
            ...this.state.customer.baseContact,
            [field]: value
          }
        }
      });
    } else if (type == "address") {
      this.setState({
        ...this.state,
        customer: {
          ...this.state.customer,
          baseContact: {
            ...this.state.customer.baseContact,
            _address: {
              ...this.state.customer.baseContact._address,
              [field]: value
            }
          }
        }
      });
    } else {
      this.setState({
        ...this.state,
        customer: {
          ...this.state.customer,
          [field]: value
        }
      });
    }
  }

  onSubmit() {
    this.props.handleSubmit(this.state.customer);
  }

  checkDisabled() {
    const disabled =
      this.state.customer.baseContact.lastName && this.state.customer.userId;
    return disabled;
  }

  render() {
    const { customer } = this.state;
    const { loading, fields } = this.props.customerForm;
    const { leadSource, accounts, users } = fields;
    const { edit } = this.props;
    return (
      <React.Fragment>
        {loading && <RctSectionLoader />}
        <FormSubmitResetButtons
          onSubmit={this.onSubmit}
          disabled={this.checkDisabled()}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="First Name"
              value={customer.baseContact.firstName}
              handleChange={this.handleChange}
              target="firstName"
              targetType="baseContact"
            />
            {!edit && (
              <FormBlock
                required
                label="Owner"
                value={customer.userId ? customer.userId : ""}
                handleChange={this.handleChange}
                target="userId"
                selectValues={users}
              />
            )}
          </TableRow>
          <TableRow>
            <FormBlock
              label="Last Name"
              value={customer.baseContact.lastName}
              handleChange={this.handleChange}
              target="lastName"
              targetType="baseContact"
              required
            />
            <FormBlock
              label="Account"
              value={customer.accountId}
              handleChange={this.handleChange}
              target="accountId"
              selectValues={accounts}
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
              handleChange={this.handleChange}
              target="title"
              targetType="baseContact"
            />
            <FormBlock
              label="Source"
              value={customer.sourceId}
              handleChange={this.handleChange}
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
              handleChange={this.handleChange}
              target="email"
              targetType="baseContact"
            />
            <FormBlock
              label="Mobile"
              value={customer.baseContact.mobile}
              handleChange={this.handleChange}
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
              handleChange={this.handleChange}
              target="office"
              targetType="baseContact"
            />
            <FormBlock
              label="Fax"
              value={customer.baseContact.fax}
              handleChange={this.handleChange}
              target="fax"
              targetType="baseContact"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.handleChange}
          address_1={customer.baseContact._address.address_1}
          address_2={customer.baseContact._address.address_2}
          city={customer.baseContact._address.city}
          state={customer.baseContact._address.state}
          zip={customer.baseContact._address.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.handleChange}
          description={customer.baseContact.description}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { customerState } = crmState;
  const { customerForm } = customerState;
  return { customerForm };
};

export default connect(
  mapStateToProps,
  {
    getCustomerFormFields
  }
)(CustomerForm);
