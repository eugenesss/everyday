import React, { PureComponent } from "react";
import { connect } from "react-redux";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Form Layout
import FormWrapper from "Components/Form/Components/Layout/FormWrapper";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

// Input Components
import FormInput from "Components/Form/Components/FormInput";
import CompanyPicker from "Components/Form/Components/Pickers/CompanyPicker";
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";

// Actions
import { getLeadFormFields } from "Actions";

const initialState = {
  lead: {
    userId: localStorage.getItem("user_id"),
    companyName: "",
    baseContact: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      phone: "",
      website: "",
      title: "",
      _address: { address_1: "", address_2: "", city: "", zip: "" }
    }
  }
};

class LeadForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleLead = this.handleLead.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSaveNew = this.onSaveNew.bind(this);
  }

  componentDidMount() {
    this.props.getLeadFormFields();
    if (this.props.edit) this.setState({ lead: this.props.edit });
  }

  handleContact(field, value) {
    this.setState(prevState => ({
      ...prevState,
      lead: {
        ...prevState.lead,
        baseContact: {
          ...prevState.lead.baseContact,
          [field]: value
        }
      }
    }));
  }

  handleLead(field, value) {
    this.setState(prevState => ({
      ...prevState,
      lead: {
        ...prevState.lead,
        [field]: value
      }
    }));
  }

  handleAddress(field, value) {
    this.setState(prevState => ({
      ...prevState,
      lead: {
        ...prevState.lead,
        baseContact: {
          ...prevState.lead.baseContact,
          _address: {
            ...prevState.lead.baseContact._address,
            [field]: value
          }
        }
      }
    }));
  }

  onSubmit() {
    this.props.handleSubmit(this.state.lead, true);
  }

  onSaveNew() {
    this.props.handleSubmit(this.state.lead, false);
    this.setState(initialState);
  }

  checkDisabled() {
    const disabled =
      this.state.lead.baseContact.lastName &&
      this.state.lead.companyName &&
      this.state.lead.userId &&
      this.state.lead.statusId;
    return disabled;
  }

  render() {
    const { loading, fields } = this.props.leadForm;
    const { leadSource, leadStatus, industry, leadInterest, users } = fields;
    const { edit, title } = this.props;
    const { lead } = this.state;
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
            desc="The key fields to get you started with a new Lead record."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="First Name"
                  value={lead.baseContact.firstName}
                  handleChange={e =>
                    this.handleContact("firstName", e.target.value)
                  }
                />
                <FormInput
                  label="Last Name"
                  value={lead.baseContact.lastName}
                  required={!lead.baseContact.lastName}
                  handleChange={e =>
                    this.handleContact("lastName", e.target.value)
                  }
                />
              </div>
              <div className="col-5 d-block offset-md-1">
                {!edit && (
                  <FormInput
                    label="Owner"
                    value={lead.userId ? lead.userId : ""}
                    required={!lead.userId}
                    selectValues={users}
                    handleChange={e =>
                      this.handleLead("userId", e.target.value)
                    }
                  />
                )}
                <CompanyPicker
                  value={lead.companyName}
                  handleChange={this.handleLead}
                  target="companyName"
                />
                <FormInput
                  label="Status"
                  value={lead.statusId ? lead.statusId : ""}
                  selectValues={leadStatus}
                  required={!lead.statusId}
                  handleChange={e =>
                    this.handleLead("statusId", e.target.value)
                  }
                />
              </div>
            </div>
          </FormInputLayout>
          <FormInputLayout
            title="Lead Information"
            desc="This information is used to contact leads and will be transferred to Customer on successful conversion."
          >
            <div className="row">
              <div className="col-5 d-block">
                <FormInput
                  label="Email"
                  value={lead.baseContact.email}
                  handleChange={e =>
                    this.handleContact("email", e.target.value)
                  }
                />
                <FormInput
                  label="Job Title"
                  value={lead.baseContact.title}
                  handleChange={e =>
                    this.handleContact("title", e.target.value)
                  }
                />
                <FormInput
                  label="Lead Interest"
                  value={lead.interest ? lead.interest : ""}
                  selectValues={leadInterest}
                  handleChange={e =>
                    this.handleLead("interest", e.target.value)
                  }
                />
              </div>
              <div className="col-5 d-block offset-md-1">
                <FormInput
                  label="Mobile"
                  value={lead.baseContact.mobile}
                  handleChange={e =>
                    this.handleContact("mobile", e.target.value)
                  }
                />
                <FormInput
                  label="Source"
                  value={lead.sourceId ? lead.sourceId : ""}
                  selectValues={leadSource}
                  handleChange={e =>
                    this.handleLead("sourceId", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                <FormInput
                  multiline
                  rows={4}
                  label="Description"
                  value={lead.baseContact.info}
                  handleChange={e => this.handleContact("info", e.target.value)}
                />
              </div>
            </div>
          </FormInputLayout>
          <FormInputLayout
            title="Company Information"
            desc="Keeping details of Lead's company can go a long way. This information will be used for Accounts on successful conversion."
          >
            <div className="row">
              <div className="col-5">
                <FormInput
                  label="Industry"
                  value={lead.industryId ? lead.industryId : ""}
                  selectValues={industry}
                  handleChange={e =>
                    this.handleLead("industryId", e.target.value)
                  }
                />
                <FormInput
                  label="Website"
                  value={lead.baseContact.website}
                  handleChange={e =>
                    this.handleContact("website", e.target.value)
                  }
                />
              </div>
              <div className="col-5 offset-md-1">
                <FormInput
                  label="Office"
                  value={lead.baseContact.phone}
                  handleChange={e =>
                    this.handleContact("phone", e.target.value)
                  }
                />
                <FormInput
                  label="Fax"
                  value={lead.baseContact.fax}
                  handleChange={e => this.handleContact("fax", e.target.value)}
                />
              </div>
            </div>
            <AddressFormInput
              address_1={lead.baseContact._address.address_1}
              address_2={lead.baseContact._address.address_2}
              city={lead.baseContact._address.city}
              zip={lead.baseContact._address.zip}
              handleChange={this.handleAddress}
            />
          </FormInputLayout>
          <hr />
        </form>
      </FormWrapper>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { leadState } = crmState;
  const { leadForm } = leadState;
  return { leadForm };
};

export default connect(
  mapStateToProps,
  {
    getLeadFormFields
  }
)(LeadForm);
