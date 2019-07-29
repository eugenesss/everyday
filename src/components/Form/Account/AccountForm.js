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
import { getAccountFormFields } from "Actions";

const initialState = {
  account: {
    baseContact: {
      name: "",
      email: "",
      mobile: "",
      fax: "",
      phone: "",
      website: "",
      title: "",
      _address: { address_1: "", address_2: "", city: "", zip: "" }
    }
  }
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSaveNew = this.onSaveNew.bind(this);
  }
  componentDidMount() {
    this.props.getAccountFormFields();
    if (this.props.edit) this.setState({ account: this.props.edit });
  }

  handleChange(field, value, type) {
    if (type == "baseContact") {
      this.setState({
        ...this.state,
        account: {
          ...this.state.account,
          baseContact: {
            ...this.state.account.baseContact,
            [field]: value
          }
        }
      });
    } else if (type == "address") {
      this.setState({
        ...this.state,
        account: {
          ...this.state.account,
          baseContact: {
            ...this.state.account.baseContact,
            _address: {
              ...this.state.account.baseContact._address,
              [field]: value
            }
          }
        }
      });
    } else {
      this.setState({
        ...this.state,
        account: {
          ...this.state.account,
          [field]: value
        }
      });
    }
  }

  onSubmit() {
    this.props.handleSubmit(this.state.account, true);
  }
  onSaveNew() {
    this.props.handleSubmit(this.state.account, false);
    this.setState(initialState);
  }

  checkDisabled() {
    const disabled =
      this.state.account.baseContact.name && this.state.account.userId;
    return disabled;
  }

  render() {
    const { loading, fields } = this.props.accountForm;
    const { industry, users } = fields;
    const { edit } = this.props;
    const { account } = this.state;
    return (
      <React.Fragment>
        {loading && <RctSectionLoader />}
        <FormSubmitResetButtons
          onSubmit={this.onSubmit}
          onSaveNew={this.onSaveNew}
          disabled={this.checkDisabled()}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="Name"
              value={account.baseContact.name}
              handleChange={this.handleChange}
              target="name"
              targetType="baseContact"
              required
            />
            {!edit && (
              <FormBlock
                required
                label="Owner"
                value={account.userId ? account.userId : ""}
                handleChange={this.handleChange}
                target="userId"
                selectValues={users}
              />
            )}
          </TableRow>
          <TableRow>
            <FormBlock
              label="Industry"
              value={account.industryId}
              handleChange={this.handleChange}
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
              value={account.baseContact.phone}
              handleChange={this.handleChange}
              target="phone"
              targetType="baseContact"
            />
            <FormBlock
              label="Mobile"
              value={account.baseContact.mobile}
              handleChange={this.handleChange}
              target="mobile"
              targetType="baseContact"
            />
          </TableRow>
          {/**
           * Fax + website
           */}
          <TableRow>
            <FormBlock
              label="Fax"
              value={account.baseContact.fax}
              handleChange={this.handleChange}
              target="fax"
              targetType="baseContact"
            />
            <FormBlock
              label="Website"
              value={account.baseContact.website}
              handleChange={this.handleChange}
              target="website"
              targetType="baseContact"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.handleChange}
          address_1={account.baseContact._address.address_1}
          address_2={account.baseContact._address.address_2}
          city={account.baseContact._address.city}
          state={account.baseContact._address.state}
          zip={account.baseContact._address.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.handleChange}
          description={account.baseContact.info}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { accountState } = crmState;
  const { accountForm } = accountState;
  return { accountForm };
};

export default connect(
  mapStateToProps,
  {
    getAccountFormFields
  }
)(AccountForm);
