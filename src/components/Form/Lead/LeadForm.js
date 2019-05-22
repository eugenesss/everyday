import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import FormBlock from "Components/Form/Components/FormBlock";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import AddressFormInput from "Components/Form/Components/Inputs/AddressFormInput";
import DescriptionFormInput from "Components/Form/Components/Inputs/DescriptionFormInput";
import CompanyPicker from "Components/Form/Components/Pickers/CompanyPicker";
import UserSelectionField from "Components/Form/Components/Pickers/UserSelectionField";
import FormSubmitResetButtons from "Components/Form/Components/FormSubmitResetButtons";

// Actions
import { handleChangeNewLead, submitNewLead, clearNewLead } from "Actions";

import { interestLevel } from "Components/DummyData";
import { users } from "Components/UserDummyData";

class LeadForm extends Component {
  componentWillUnmount() {
    this.props.clearNewLead();
  }

  render() {
    const { lead, loading } = this.props.leadForm;
    const disabled = lead.firstName && lead.companyName && lead.status;
    return (
      <React.Fragment>
        <div className="row mb-30">
          <div className="col-md-10" />
          <div className="col-md-2">
            <FormSubmitResetButtons
              onReset={this.props.clearNewLead}
              onSubmit={this.props.submitNewLead}
              disabled={disabled}
            />
          </div>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <FormBlock
                label="First Name"
                value={lead.firstName}
                handleChange={this.props.handleChangeNewLead}
                target="firstName"
                required
              />
              <FormBlock
                required
                label="Owner"
                customTextField={
                  <UserSelectionField
                    value={lead.owner ? lead.owner : ""}
                    handleChange={this.props.handleChangeNewLead}
                    target="owner"
                    userList={users}
                  />
                }
              />
            </TableRow>
            <TableRow>
              <FormBlock
                required
                label="Last Name"
                value={lead.lastName}
                handleChange={this.props.handleChangeNewLead}
                target="lastName"
              />
              <FormBlock
                required
                label="Status"
                value={lead.status}
                handleChange={this.props.handleChangeNewLead}
                target="status"
                selectValues={[
                  { id: 1, name: "Contacted" },
                  { id: 2, name: "Not Contacted" }
                ]}
              />
            </TableRow>
            <TableRow>
              <FormBlock
                required
                label="Company Name"
                customTextField={
                  <CompanyPicker
                    value={lead.companyName ? lead.companyName : ""}
                    handleChange={this.props.handleChangeNewLead}
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
                handleChange={this.props.handleChangeNewLead}
                target="jobTitle"
              />
              <FormBlock
                label="Source"
                value={lead.source}
                handleChange={this.props.handleChangeNewLead}
                target="source"
                selectValues={[
                  { id: 1, name: "Google" },
                  { id: 2, name: "SEO" }
                ]}
              />
            </TableRow>
            {/**
             * Industry + Interest
             */}
            <TableRow>
              <FormBlock
                label="Industry"
                value={lead.industry}
                handleChange={this.props.handleChangeNewLead}
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
                      this.props.handleChangeNewLead("interest", e.target.value)
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
                handleChange={this.props.handleChangeNewLead}
                target="email"
              />
              <FormBlock
                label="Mobile"
                value={lead.mobile}
                handleChange={this.props.handleChangeNewLead}
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
                handleChange={this.props.handleChangeNewLead}
                target="office"
              />
              <FormBlock
                label="Fax"
                value={lead.fax}
                handleChange={this.props.handleChangeNewLead}
                target="fax"
              />
            </TableRow>

            <TableRow>
              <FormBlock
                label="Fax"
                value={lead.fax}
                handleChange={this.props.handleChangeNewLead}
                target="fax"
              />
            </TableRow>
          </TableBody>
        </Table>
        <hr />
        <AddressFormInput
          handleChange={this.props.handleChangeNewLead}
          address={lead.address}
          address2={lead.address2}
          city={lead.city}
          state={lead.state}
          zip={lead.zip}
        />
        <hr />
        <DescriptionFormInput
          handleChange={this.props.handleChangeNewLead}
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
  { handleChangeNewLead, submitNewLead, clearNewLead }
)(LeadForm);
