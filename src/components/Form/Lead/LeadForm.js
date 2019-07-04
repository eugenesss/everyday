import React, { Component } from "react";
import { connect } from "react-redux";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

//Form Components
import TableRow from "@material-ui/core/TableRow";
import FormBlock from "Components/Form/Components/FormBlock";
import FormTable from "Components/Form/Components/FormTable";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// Input Components
import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import DescriptionFormInput from "Components/Form/Components/Inputs/DescriptionFormInput";
import CompanyPicker from "Components/Form/Components/Pickers/CompanyPicker";
import FormSubmitResetButtons from "Components/Form/Components/FormSubmitResetButtons";

// Actions
import {
  getLeadSource,
  getLeadStatus,
  getIndustry,
  getLeadInterest,
  getAllUsers
} from "Actions";

const initialState = {
  lead: { baseContact: { _address: {} } }
};

class LeadForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getLeadSource();
    this.props.getLeadStatus();
    this.props.getIndustry();
    this.props.getLeadInterest();
    this.props.getAllUsers();
    if (this.props.edit) this.setState({ lead: this.props.edit });
  }

  handleChange(field, value, type) {
    if (type == "baseContact") {
      this.setState({
        ...this.state,
        lead: {
          ...this.state.lead,
          baseContact: {
            ...this.state.lead.baseContact,
            [field]: value
          }
        }
      });
    } else if (type == "address") {
      this.setState({
        ...this.state,
        lead: {
          ...this.state.lead,
          baseContact: {
            ...this.state.lead.baseContact,
            _address: {
              ...this.state.lead.baseContact._address,
              [field]: value
            }
          }
        }
      });
    } else {
      this.setState({
        ...this.state,
        lead: {
          ...this.state.lead,
          [field]: value
        }
      });
    }
  }

  onSubmit() {
    this.props.handleSubmit(this.state.lead);
  }

  checkDisabled() {
    const disabled =
      this.state.lead.baseContact.firstName &&
      this.state.lead.companyName &&
      this.state.lead.statusId;
    return disabled;
  }

  render() {
    const { loading } = this.props.leadForm;
    const {
      leadSource,
      leadStatus,
      industry,
      leadInterest
    } = this.props.crmField;
    const { users, edit } = this.props;
    const { lead } = this.state;
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
              value={lead.baseContact.firstName}
              handleChange={this.handleChange}
              target="firstName"
              targetType="baseContact"
              required
            />
            {!edit && (
              <FormBlock
                required
                label="Owner"
                value={lead.userId ? lead.userId : ""}
                selectValues={users}
                handleChange={this.handleChange}
                target="userId"
              />
            )}
          </TableRow>
          <TableRow>
            <FormBlock
              required
              label="Last Name"
              value={lead.baseContact.lastName}
              handleChange={this.handleChange}
              target="lastName"
              targetType="baseContact"
            />
            <FormBlock
              required
              label="Status"
              value={lead.statusId}
              handleChange={this.handleChange}
              target="statusId"
              selectValues={leadStatus}
            />
          </TableRow>
          <TableRow>
            <FormBlock
              required
              label="Company Name"
              customTextField={
                <CompanyPicker
                  value={lead.companyName ? lead.companyName : ""}
                  handleChange={this.handleChange}
                  target="companyName"
                />
              }
            />
          </TableRow>
          <TableRow />
          {/**
           * Job Title + Source
           */}
          <TableRow>
            <FormBlock
              label="Job Title"
              value={lead.baseContact.title}
              handleChange={this.handleChange}
              target="title"
              targetType="baseContact"
            />
            <FormBlock
              label="Source"
              value={lead.sourceId}
              handleChange={this.handleChange}
              target="sourceId"
              selectValues={leadSource}
            />
          </TableRow>
          {/**
           * Industry + Interest
           */}
          <TableRow>
            <FormBlock
              label="Industry"
              value={lead.industryId}
              handleChange={this.handleChange}
              target="industryId"
              selectValues={industry}
            />
            <FormBlock
              label="Interest Level"
              customTextField={
                <TextField
                  select
                  fullWidth
                  value={lead.interest ? lead.interest : ""}
                  onChange={e => this.handleChange("interest", e.target.value)}
                  margin="dense"
                >
                  {leadInterest &&
                    leadInterest.map((select, key) => (
                      <MenuItem key={key} value={select.level}>
                        {select.name}
                      </MenuItem>
                    ))}
                </TextField>
              }
            />
          </TableRow>
          {/**
           * Email + Mobile
           */}
          <TableRow>
            <FormBlock
              label="Email"
              value={lead.baseContact.email}
              handleChange={this.handleChange}
              target="email"
              targetType="baseContact"
            />
            <FormBlock
              label="Mobile"
              value={lead.baseContact.mobile}
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
              value={lead.baseContact.phone}
              handleChange={this.handleChange}
              target="phone"
              targetType="baseContact"
            />
            <FormBlock
              label="Fax"
              value={lead.baseContact.fax}
              handleChange={this.handleChange}
              target="fax"
              targetType="baseContact"
            />
          </TableRow>

          <TableRow>
            <FormBlock
              label="Website"
              value={lead.baseContact.website}
              handleChange={this.handleChange}
              target="website"
              targetType="baseContact"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.handleChange}
          address_1={lead.baseContact._address.address_1}
          address_2={lead.baseContact._address.address_2}
          city={lead.baseContact._address.city}
          state={lead.baseContact._address.state}
          zip={lead.baseContact._address.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.handleChange}
          description={lead.baseContact.info}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState, usersState }) => {
  const { leadState, crmField } = crmState;
  const { users } = usersState;
  const { leadForm } = leadState;
  return { leadForm, crmField, users };
};

export default connect(
  mapStateToProps,
  {
    getLeadSource,
    getLeadStatus,
    getIndustry,
    getLeadInterest,
    getAllUsers
  }
)(LeadForm);
