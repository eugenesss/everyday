import React, { Component } from "react";
import { connect } from "react-redux";

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
  handleChangeLead,
  submitNewLead,
  clearNewLead,
  getLeadSource,
  getLeadStatus,
  getIndustry,
  getLeadInterest,
  getAllUsers
} from "Actions";

//import { users } from "Components/UserDummyData";

class LeadForm extends Component {
  componentWillMount() {
    this.props.getLeadSource();
    this.props.getLeadStatus();
    this.props.getIndustry();
    this.props.getLeadInterest();
    this.props.getAllUsers();
  }
  componentWillUnmount() {
    this.props.clearNewLead();
  }

  render() {
    const { lead } = this.props.leadForm;
    const {
      leadSource,
      leadStatus,
      industry,
      leadInterest
    } = this.props.crmField;
    const { users } = this.props;
    const disabled =
      lead.baseContact.firstName && lead.companyName && lead.statusId;
    return (
      <React.Fragment>
        <FormSubmitResetButtons
          onReset={this.props.clearNewLead}
          onSubmit={this.props.submitNewLead}
          disabled={disabled}
        />
        <FormTable>
          <TableRow>
            <FormBlock
              label="First Name"
              value={lead.baseContact.firstName}
              handleChange={this.props.handleChangeLead}
              target="firstName"
              targetType="baseContact"
              required
            />
            <FormBlock
              required
              label="Owner"
              value={lead.userId ? lead.userId : ""}
              selectValues={users}
              handleChange={this.props.handleChangeLead}
              target="userId"
            />
          </TableRow>
          <TableRow>
            <FormBlock
              required
              label="Last Name"
              value={lead.baseContact.lastName}
              handleChange={this.props.handleChangeLead}
              target="lastName"
              targetType="baseContact"
            />
            <FormBlock
              required
              label="Status"
              value={lead.statusId}
              handleChange={this.props.handleChangeLead}
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
                  handleChange={this.props.handleChangeLead}
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
              handleChange={this.props.handleChangeLead}
              target="title"
              targetType="baseContact"
            />
            <FormBlock
              label="Source"
              value={lead.sourceId}
              handleChange={this.props.handleChangeLead}
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
              handleChange={this.props.handleChangeLead}
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
                  onChange={e =>
                    this.props.handleChangeLead("interest", e.target.value)
                  }
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
              handleChange={this.props.handleChangeLead}
              target="email"
              targetType="baseContact"
            />
            <FormBlock
              label="Mobile"
              value={lead.baseContact.mobile}
              handleChange={this.props.handleChangeLead}
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
              value={lead.baseContact.office}
              handleChange={this.props.handleChangeLead}
              target="office"
              targetType="baseContact"
            />
            <FormBlock
              label="Fax"
              value={lead.baseContact.fax}
              handleChange={this.props.handleChangeLead}
              target="fax"
              targetType="baseContact"
            />
          </TableRow>

          <TableRow>
            <FormBlock
              label="Fax"
              value={lead.baseContact.fax}
              handleChange={this.props.handleChangeLead}
              target="fax"
              targetType="baseContact"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.props.handleChangeLead}
          address_1={lead.baseContact._address.address_1}
          address_2={lead.baseContact._address.address_2}
          city={lead.baseContact._address.city}
          state={lead.baseContact._address.state}
          zip={lead.baseContact._address.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeLead}
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
    handleChangeLead,
    submitNewLead,
    clearNewLead,
    getLeadSource,
    getLeadStatus,
    getIndustry,
    getLeadInterest,
    getAllUsers
  }
)(LeadForm);
