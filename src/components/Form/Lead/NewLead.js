import React, { Component, Fragment } from "./node_modules/react";
import { connect } from "./node_modules/react-redux";

//Form req
import PropTypes from "./node_modules/prop-types";
import { withStyles } from "./node_modules/@material-ui/core/styles";
import MenuItem from "./node_modules/@material-ui/core/MenuItem";
import TextField from "./node_modules/@material-ui/core/TextField";
import AccountPicker from "../AccountPicker";

//Actions
import { onUpdateLeadDetail, addLeadEnd } from "Actions";

const styles = theme => ({
  container: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  leadForm: {
    padding: "18px"
  }
});

class LeadForm extends Component {
  componentWillUnmount() {
    this.props.addLeadEnd();
  }
  handleChange(field, type, val) {
    this.props.onUpdateLeadDetail(field, type, val);
  }
  render() {
    const {
      classes,
      crmConstant,
      users,
      leadToEdit,
      leadContactEdit,
      nativeSelect
    } = this.props;
    const { leadStatus, leadInterest, leadSource, industry } = crmConstant;
    return (
      <form autoComplete="off" className={classes.leadForm}>
        <h2 className="mb-30">Lead Information</h2>
        {/* Company Name */}
        <div className="row">
          <div className="col-md-5">
            <AccountPicker
              stateValue={leadToEdit.companyName || ""}
              handleChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
        {/* Lead Status + Owner */}
        <div className="row">
          <div className="col-md-5">
            <TextField
              error={!leadToEdit.status}
              id="leadStatus"
              required
              select
              label="Lead Status"
              className={classes.textField}
              value={
                typeof leadToEdit.status == "object"
                  ? leadToEdit.status.id
                  : leadToEdit.status
                  ? leadToEdit.status
                  : ""
              }
              SelectProps={
                nativeSelect && {
                  native: true
                }
              }
              onChange={e =>
                this.handleChange("status", "lead", e.target.value)
              }
              margin="normal"
            >
              {nativeSelect
                ? leadStatus.map(status => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))
                : leadStatus.map(status => (
                    <MenuItem key={status.id} value={status.id}>
                      {status.name}
                    </MenuItem>
                  ))}
            </TextField>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <TextField
              error={!leadToEdit.owner}
              id="owner"
              select
              label="Owner"
              className={classes.textField}
              value={
                typeof leadToEdit.owner == "object"
                  ? leadToEdit.owner.id
                  : leadToEdit.owner
                  ? leadToEdit.owner
                  : ""
              }
              SelectProps={
                nativeSelect && {
                  native: true
                }
              }
              onChange={e => this.handleChange("owner", "lead", e.target.value)}
              margin="normal"
            >
              {nativeSelect
                ? users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.fullName}
                    </option>
                  ))
                : users.map(user => (
                    <MenuItem key={user.id} value={user.id}>
                      {user.fullName}
                    </MenuItem>
                  ))}
            </TextField>
          </div>
        </div>

        {/* First name + Last name */}
        <div className="row">
          <div className="col-md-5">
            <TextField
              required
              error={!leadContactEdit.firstName}
              id="firstName"
              label="First Name"
              className={classes.textField}
              defaultValue={leadContactEdit.firstName}
              onChange={e =>
                this.handleChange("firstName", "contact", e.target.value)
              }
              margin="normal"
            />
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <TextField
              required
              id="lastName"
              label="Last Name"
              defaultValue={leadContactEdit.lastName}
              className={classes.textField}
              margin="normal"
              onChange={e =>
                this.handleChange("lastName", "contact", e.target.value)
              }
              error={!leadContactEdit.lastName}
            />
          </div>
        </div>

        {/* Email + interest */}
        <div className="row">
          <div className="col-md-5">
            <TextField
              id="emailAddress"
              label="Email"
              className={classes.textField}
              onChange={e =>
                this.handleChange("emailAddress", "contact", e.target.value)
              }
              defaultValue={
                leadContactEdit.emailAddress ? leadContactEdit.emailAddress : ""
              }
              type="email"
              autoComplete="email"
              margin="normal"
            />
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <TextField
              id="interest"
              select
              label="Lead Interest"
              className={classes.textField}
              value={leadToEdit.interest ? leadToEdit.interest : ""}
              onChange={e =>
                this.handleChange("interest", "lead", e.target.value)
              }
              margin="normal"
              SelectProps={
                nativeSelect && {
                  native: true
                }
              }
            >
              {nativeSelect ? (
                <Fragment>
                  <option value="" />
                  {leadInterest.map(interest => (
                    <option key={interest.id} value={interest.level}>
                      {`${interest.name} - ${interest.level}%`}
                    </option>
                  ))}
                </Fragment>
              ) : (
                leadInterest.map(interest => (
                  <MenuItem key={interest.id} value={interest.level}>
                    {`${interest.name} - ${interest.level}%`}
                  </MenuItem>
                ))
              )}
            </TextField>
          </div>
        </div>

        {/* Industry + Lead Source */}
        <div className="row">
          <div className="col-md-5">
            <TextField
              id="industry"
              select
              label="Industry"
              className={classes.textField}
              value={
                leadToEdit.industry
                  ? typeof leadToEdit.industry == "object"
                    ? leadToEdit.industry.id
                    : leadToEdit.industry
                  : ""
              }
              onChange={e =>
                this.handleChange("industry", "lead", e.target.value)
              }
              SelectProps={
                nativeSelect && {
                  native: true
                }
              }
              margin="normal"
            >
              {nativeSelect ? (
                <Fragment>
                  <option value="" />
                  {industry.map(inds => (
                    <option key={inds.id} value={inds.id}>
                      {inds.name}
                    </option>
                  ))}
                </Fragment>
              ) : (
                industry.map(inds => (
                  <MenuItem key={inds.id} value={inds.id}>
                    {inds.name}
                  </MenuItem>
                ))
              )}
            </TextField>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <TextField
              id="leadSource"
              select
              label="Source"
              className={classes.textField}
              value={
                leadToEdit.source
                  ? typeof leadToEdit.source == "object"
                    ? leadToEdit.source.id
                    : leadToEdit.source
                  : ""
              }
              onChange={e =>
                this.handleChange("source", "lead", e.target.value)
              }
              margin="normal"
              SelectProps={
                nativeSelect && {
                  native: true
                }
              }
            >
              {nativeSelect ? (
                <Fragment>
                  <option value="" />
                  {leadSource.map(source => (
                    <option key={source.id} value={source.id}>
                      {source.name}
                    </option>
                  ))}
                </Fragment>
              ) : (
                leadSource.map(source => (
                  <MenuItem key={source.id} value={source.id}>
                    {source.name}
                  </MenuItem>
                ))
              )}
            </TextField>
          </div>
        </div>

        {/* Title + Office */}
        <div className="row">
          <div className="col-md-5">
            <TextField
              id="jobTitle"
              label="Job Title"
              className={classes.textField}
              value={leadContactEdit.jobTitle ? leadContactEdit.jobTitle : ""}
              onChange={e =>
                this.handleChange("jobTitle", "contact", e.target.value)
              }
              margin="normal"
            />
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <TextField
              id="office"
              label="Office"
              value={leadContactEdit.office ? leadContactEdit.office : ""}
              className={classes.textField}
              margin="normal"
              onChange={e =>
                this.handleChange("office", "contact", e.target.value)
              }
            />
          </div>
        </div>

        {/* Mobile + Fax */}
        <div className="row">
          <div className="col-md-5">
            <TextField
              id="mobile"
              label="Mobile"
              className={classes.textField}
              value={leadContactEdit.mobile ? leadContactEdit.mobile : ""}
              onChange={e =>
                this.handleChange("mobile", "contact", e.target.value)
              }
              margin="normal"
            />
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <TextField
              id="fax"
              label="Fax"
              className={classes.textField}
              value={leadContactEdit.fax ? leadContactEdit.fax : ""}
              margin="normal"
              onChange={e =>
                this.handleChange("fax", "contact", e.target.value)
              }
            />
          </div>
        </div>

        {/* Website */}
        <div className="row">
          <div className="col-md-5">
            <TextField
              id="website"
              label="Website"
              value={leadToEdit.website ? leadToEdit.website : ""}
              className={classes.textField}
              margin="normal"
              onChange={e =>
                this.handleChange("website", "lead", e.target.value)
              }
            />
          </div>
        </div>

        <hr />

        {/* Description / Note */}
        <h2 className="my-30">Lead Description</h2>
        <TextField
          id="description"
          label="Description"
          multiline
          fullWidth
          rows="6"
          value={leadContactEdit.description ? leadContactEdit.description : ""}
          className={classes.textField}
          onChange={e =>
            this.handleChange("description", "contact", e.target.value)
          }
          margin="normal"
        />

        <hr />

        {/* Lead Form Address Information Section */}
        <h2 className="my-30">Address Information</h2>

        <TextField
          fullWidth
          id="address"
          label="Address"
          value={leadContactEdit.address ? leadContactEdit.address : ""}
          className={classes.textField}
          onChange={e =>
            this.handleChange("address", "contact", e.target.value)
          }
          margin="normal"
        />
        <TextField
          fullWidth
          id="address2"
          label="Address 2"
          value={leadContactEdit.address2 ? leadContactEdit.address2 : ""}
          className={classes.textField}
          onChange={e =>
            this.handleChange("address2", "contact", e.target.value)
          }
          margin="normal"
        />

        <div className="row">
          <div className="col-md-6">
            <TextField
              id="city"
              label="City"
              value={leadContactEdit.city ? leadContactEdit.city : ""}
              className={classes.textField}
              onChange={e =>
                this.handleChange("city", "contact", e.target.value)
              }
              margin="normal"
            />
          </div>
          <div className="col-md-4">
            <TextField
              id="state"
              label="State"
              value={leadContactEdit.state ? leadContactEdit.state : ""}
              className={classes.textField}
              onChange={e =>
                this.handleChange("state", "contact", e.target.value)
              }
              margin="normal"
            />
          </div>
          <div className="col-md-2">
            <TextField
              id="zipcode"
              label="Zipcode"
              value={leadContactEdit.zip ? leadContactEdit.zip : ""}
              className={classes.textField}
              onChange={e =>
                this.handleChange("zip", "contact", e.target.value)
              }
              margin="normal"
            />
          </div>
        </div>
      </form>
    );
  }
}

LeadForm.propTypes = {
  classes: PropTypes.object.isRequired
};

// map state to props
const mapStateToProps = ({ crmConstant, userManage, lead }) => {
  const { leadToEdit, leadContactEdit } = lead;
  const { users } = userManage;
  return {
    crmConstant,
    users,
    leadToEdit,
    leadContactEdit
  };
};

export default connect(
  mapStateToProps,
  { onUpdateLeadDetail, addLeadEnd }
)(withStyles(styles)(LeadForm));
