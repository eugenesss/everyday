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
import { getCustomerFormFields } from "Actions";

const initialState = {
  customer: {
    userId: localStorage.getItem("user_id"),
    sourceId: "",
    baseContact: {
      firstName: "",
      lastName: "",
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

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleContact = this.handleContact.bind(this);
    this.handleCust = this.handleCust.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.checkDisabled = this.checkDisabled.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSaveNew = this.onSaveNew.bind(this);
  }
  componentDidMount() {
    this.props.getCustomerFormFields();
    if (this.props.edit) this.setState({ customer: this.props.edit });
  }

  handleContact(field, value) {
    this.setState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        baseContact: {
          ...prevState.customer.baseContact,
          [field]: value
        }
      }
    }));
  }

  handleCust(field, value) {
    this.setState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        [field]: value
      }
    }));
  }

  handleAddress(field, value) {
    this.setState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        baseContact: {
          ...prevState.customer.baseContact,
          _address: {
            ...prevState.customer.baseContact._address,
            [field]: value
          }
        }
      }
    }));
  }

  onSubmit() {
    this.props.handleSubmit(this.state.customer, true);
  }

  onSaveNew() {
    this.props.handleSubmit(this.state.customer, false);
    this.setState(initialState);
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
            desc="The key fields to get you started with a new Customer record."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="First Name"
                  value={customer.baseContact.firstName}
                  handleChange={e =>
                    this.handleContact("firstName", e.target.value)
                  }
                />
                <FormInput
                  label="Last Name"
                  value={customer.baseContact.lastName}
                  required={!customer.baseContact.lastName}
                  handleChange={e =>
                    this.handleContact("lastName", e.target.value)
                  }
                />
              </div>
              <div className="col-5 d-block offset-md-1">
                {!edit && (
                  <FormInput
                    label="Owner"
                    value={customer.userId ? customer.userId : ""}
                    required={!customer.userId}
                    selectValues={users}
                    handleChange={e =>
                      this.handleCust("userId", e.target.value)
                    }
                  />
                )}
                <FormInput
                  label="Related Account"
                  selectValues={accounts}
                  value={customer.accountId ? customer.accountId : ""}
                  handleChange={e =>
                    this.handleCust("accountId", e.target.value)
                  }
                />
              </div>
            </div>
          </FormInputLayout>
          <FormInputLayout
            title="Personal Information"
            desc="Storing information of the Customer to better understand them."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="Email"
                  value={customer.baseContact.email}
                  handleChange={e =>
                    this.handleContact("email", e.target.value)
                  }
                />
                <FormInput
                  label="Mobile"
                  value={customer.baseContact.mobile}
                  handleChange={e =>
                    this.handleContact("mobile", e.target.value)
                  }
                />
                <FormInput
                  label="Job Title"
                  value={customer.baseContact.title}
                  handleChange={e =>
                    this.handleContact("title", e.target.value)
                  }
                />
              </div>
              <div className="col-5 offset-md-1">
                <FormInput
                  label="Source"
                  value={customer.sourceId ? customer.sourceId : ""}
                  selectValues={leadSource}
                  handleChange={e =>
                    this.handleCust("sourceId", e.target.value)
                  }
                />
                <FormInput
                  label="Office"
                  value={customer.baseContact.phone}
                  handleChange={e =>
                    this.handleContact("phone", e.target.value)
                  }
                />
                <FormInput
                  label="Fax"
                  value={customer.baseContact.fax}
                  handleChange={e => this.handleContact("fax", e.target.value)}
                />
              </div>
            </div>
            <AddressFormInput
              handleChange={this.handleChange}
              address_1={customer.baseContact._address.address_1}
              address_2={customer.baseContact._address.address_2}
              city={customer.baseContact._address.city}
              state={customer.baseContact._address.state}
              zip={customer.baseContact._address.zip}
            />
            <div className="row">
              <div className="col-11">
                <FormInput
                  multiline
                  rows={4}
                  label="Description"
                  value={customer.baseContact.info}
                  handleChange={e => this.handleContact("info", e.target.value)}
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
