import React, { Component } from "react";
import { connect } from "react-redux";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Form Layout
import FormWrapper from "Components/Form/Components/Layout/FormWrapper";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

// Input Components
import FormInput from "Components/Form/Components/FormInput";
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";

// Actions
import { getAccountFormFields } from "Actions";

const initialState = {
  account: {
    userId: localStorage.getItem("user_id"),
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
    this.handleAccount = this.handleAccount.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.onSaveNew = this.onSaveNew.bind(this);
  }
  componentDidMount() {
    this.props.getAccountFormFields();
    if (this.props.edit) this.setState({ account: this.props.edit });
  }

  handleContact(field, value) {
    this.setState(prevState => ({
      ...prevState,
      account: {
        ...prevState.account,
        baseContact: {
          ...prevState.account.baseContact,
          [field]: value
        }
      }
    }));
  }

  handleAccount(field, value) {
    this.setState(prevState => ({
      ...prevState,
      account: {
        ...prevState.account,
        [field]: value
      }
    }));
  }

  handleAddress(field, value) {
    this.setState(prevState => ({
      ...prevState,
      account: {
        ...prevState.account,
        baseContact: {
          ...prevState.account.baseContact,
          _address: {
            ...prevState.account.baseContact._address,
            [field]: value
          }
        }
      }
    }));
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
    const { edit, title } = this.props;
    const { account } = this.state;
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
            desc="The key fields to get you started with a new Account record."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="Name"
                  value={account.baseContact.name}
                  required={!account.baseContact.name}
                  handleChange={e => this.handleContact("name", e.target.value)}
                />
                <FormInput
                  label="Industry"
                  value={account.industryId ? account.industryId : ""}
                  selectValues={industry}
                  handleChange={e =>
                    this.handleAccount("industryId", e.target.value)
                  }
                />
              </div>
              <div className="col-5 d-block offset-md-1">
                {!edit && (
                  <FormInput
                    label="Owner"
                    value={account.userId ? account.userId : ""}
                    required={!account.userId}
                    selectValues={users}
                    handleChange={e =>
                      this.handleAccount("userId", e.target.value)
                    }
                  />
                )}
              </div>
            </div>
          </FormInputLayout>
          <FormInputLayout
            title="Account Information"
            desc="The key fields to get you started with a new Account record."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="Office"
                  value={account.baseContact.phone}
                  handleChange={e =>
                    this.handleContact("phone", e.target.value)
                  }
                />
                <FormInput
                  label="Website"
                  value={account.baseContact.website}
                  handleChange={e =>
                    this.handleContact("website", e.target.value)
                  }
                />
              </div>
              <div className="col-5 d-block offset-md-1">
                <FormInput
                  label="Fax"
                  value={account.baseContact.fax}
                  handleChange={e => this.handleContact("fax", e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                <FormInput
                  multiline
                  rows={4}
                  label="Description"
                  value={account.baseContact.info}
                  handleChange={e => this.handleContact("info", e.target.value)}
                />
              </div>
            </div>
          </FormInputLayout>
          <FormInputLayout
            title="Shipping Information"
            desc="The key fields to get you started with a new Account record."
          >
            <AddressFormInput
              handleChange={this.handleAddress}
              address_1={account.baseContact._address.address_1}
              address_2={account.baseContact._address.address_2}
              city={account.baseContact._address.city}
              state={account.baseContact._address.state}
              zip={account.baseContact._address.zip}
            />
          </FormInputLayout>
        </form>
      </FormWrapper>
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
