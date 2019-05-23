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
import { handleChangeLead, submitNewLead, clearNewLead } from "Actions";

import { interestLevel, source, leadStatus } from "Components/DummyData";
import { users } from "Components/UserDummyData";

class LeadForm extends Component {
  componentWillUnmount() {
    this.props.clearNewLead();
  }

  render() {
    const { lead } = this.props.leadForm;
    const disabled = lead.firstName && lead.companyName && lead.status;
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
              value={lead.firstName}
              handleChange={this.props.handleChangeLead}
              target="firstName"
              required
            />
            <FormBlock
              required
              label="Owner"
              value={lead.owner ? lead.owner : ""}
              selectValues={users}
              handleChange={this.props.handleChangeLead}
              target="owner"
            />
          </TableRow>
          <TableRow>
            <FormBlock
              required
              label="Last Name"
              value={lead.lastName}
              handleChange={this.props.handleChangeLead}
              target="lastName"
            />
            <FormBlock
              required
              label="Status"
              value={lead.status}
              handleChange={this.props.handleChangeLead}
              target="status"
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
              value={lead.jobTitle}
              handleChange={this.props.handleChangeLead}
              target="jobTitle"
            />
            <FormBlock
              label="Source"
              value={lead.source}
              handleChange={this.props.handleChangeLead}
              target="source"
              selectValues={source}
            />
          </TableRow>
          {/**
           * Industry + Interest
           */}
          <TableRow>
            <FormBlock
              label="Industry"
              value={lead.industry}
              handleChange={this.props.handleChangeLead}
              target="industry"
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
                  {interestLevel &&
                    interestLevel.map((select, key) => (
                      <MenuItem key={select.id} value={select.level}>
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
              value={lead.email}
              handleChange={this.props.handleChangeLead}
              target="email"
            />
            <FormBlock
              label="Mobile"
              value={lead.mobile}
              handleChange={this.props.handleChangeLead}
              target="mobile"
            />
          </TableRow>
          {/**
           * Office + Fax
           */}
          <TableRow>
            <FormBlock
              label="Office"
              value={lead.office}
              handleChange={this.props.handleChangeLead}
              target="office"
            />
            <FormBlock
              label="Fax"
              value={lead.fax}
              handleChange={this.props.handleChangeLead}
              target="fax"
            />
          </TableRow>

          <TableRow>
            <FormBlock
              label="Fax"
              value={lead.fax}
              handleChange={this.props.handleChangeLead}
              target="fax"
            />
          </TableRow>
        </FormTable>
        <hr />
        <AddressFormInput
          handleChange={this.props.handleChangeLead}
          address_1={lead.address_1}
          address_2={lead.address_2}
          city={lead.city}
          state={lead.state}
          zip={lead.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeLead}
          description={lead.description}
        />
      </React.Fragment>
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
  { handleChangeLead, submitNewLead, clearNewLead }
)(LeadForm);
