import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from "@material-ui/core/Checkbox";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { deleteRole, onChangeUpdateRole, updateRole, } from 'Actions'

const styles = theme => ({
  root: {
    display: "block !important",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  table: {
    minHeight: 0,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomTableRow({position, name, children, classes, counter = 0, ...props}) {
  let table = []
  table.push(<TableCell component="th" scope="row" key={counter++}>{name}</TableCell>)
  for (let i = 0; i < position - 1; i++) {
    table.push(<TableCell key={counter++}/>)
  }
  table.push(<TableCell align="center" key={counter++}>{children}</TableCell>)
  for (let y = 0; y < 4 - position; y++) {
    table.push(<TableCell key={counter++}/>)
  }
  return (
    <TableRow className={classes.row} {...props} >
      {table}
    </TableRow>
  )
}

class RoleManager extends Component {
  constructor(props) {
    super(props);
  }

  checked(action) {
    const selectedRole = this.props.selectedRole
    if (!selectedRole)
      return true;
    else
      if(selectedRole) {
        if (selectedRole.permissions.find( permission => permission === action ))
          return true
        else
          return false
      }    
  }
  disabled(action){
    const selectedRole = this.props.selectedRole
    if (!selectedRole)
      return true;
    else if(selectedRole.name == "Member") {
      if(action != "read")
        return true
      else
        return false
    }
    else
      return false;
  }
  handleChange(val) {
    var permissions = this.props.selectedRole.permissions
    if (permissions.find( permission => permission == val )) {
      var index = permissions.indexOf(val)
      if (index > -1) {
        permissions.splice(index, 1)
      }
    } else {
      permissions.push(val)
    }
    this.props.onChangeUpdateRole("permissions", permissions)
  }
  
  render() {
    const { 
      classes,

      selectedRole,
      crudPermissions,
      operations,

      onChangeUpdateRole,
      updateRole,
      deleteRole,
     } = this.props;
     console.log(operations)
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Row>
            <TextField
              fullWidth
              required
              error={ selectedRole ? !selectedRole.name : false}
              disabled={!selectedRole || selectedRole.name == "Member"}
              id="name"
              label="Role Name"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              value={ selectedRole ? selectedRole.name == "Member" ? "Member (default role applied to all users)" : selectedRole.name : "Super Admin" }
              onChange={(e) => onChangeUpdateRole('name', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Row>
          <Row>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="center">Read</TableCell>
                  <TableCell align="center">Create</TableCell>
                  <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {crudPermissions.map(permission => (
                  <TableRow className={classes.row} key={permission.action}>
                    <TableCell component="th" scope="row">
                      {permission.action}
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                        checked={this.checked(`${permission.action}:read`)}
                        disabled={this.disabled("read")}
                        value={`${permission.action}:read`}
                        onChange={e => this.handleChange(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                        checked={this.checked(`${permission.action}:create`)}
                        value={`${permission.action}:create`}
                        disabled={this.disabled("create")}
                        onChange={e => this.handleChange(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                        checked={this.checked(`${permission.action}:update`)}
                        value={`${permission.action}:update`}
                        disabled={this.disabled("update")}
                        onChange={e => this.handleChange(e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                        checked={this.checked(`${permission.action}:delete`)}
                        value={`${permission.action}:delete`}
                        disabled={this.disabled("delete")}
                        onChange={e => this.handleChange(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                <CustomTableRow
                  position={3}
                  name={<div style={{color: "red"}}>Give Super Admin Privileges*</div>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("SuperAdmin:update")}
                    disabled={this.disabled("update")}
                    value={`SuperAdmin:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<div style={{color: "red"}}>Reset User Passwords*</div>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("Password:reset")}
                    disabled={this.disabled("reset")}
                    value={`Password:reset`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<div style={{color: "red"}}>Manage Roles and Permissions*</div>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("Permissions:manage")}
                    disabled={this.disabled("manage")}
                    value={`Permissions:manage`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<div style={{color: "red"}}>Manage Groups*</div>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("Groups:manage")}
                    disabled={this.disabled("manage")}
                    value={`Groups:manage`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div style={{color: "red"}}>Update User Roles*</div> <i style={{fontSize: "11px"}}>(ability to assign or update roles of a user)</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("UserRole:update")}
                    disabled={this.disabled("update")}
                    value={`UserRole:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div>Update Company Details</div><i style={{fontSize: "11px"}}>Settings</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("CompanyDetails:update")}
                    disabled={this.disabled("update")}
                    value={`CompanyDetails:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div>Update Accounting General</div><i style={{fontSize: "11px"}}>Settings</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("AccGeneralSet:update")}
                    disabled={this.disabled("update")}
                    value={`AccGeneralSet:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div>Update Accounting Quotation</div><i style={{fontSize: "11px"}}>Settings</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("AccQuotationSet:update")}
                    disabled={this.disabled("update")}
                    value={`AccQuotationSet:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div>Update Accounting Invoice</div><i style={{fontSize: "11px"}}>Settings</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("AccInvoiceSet:update")}
                    disabled={this.disabled("update")}
                    value={`AccInvoiceSet:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div>Update Accounting Credit Note</div><i style={{fontSize: "11px"}}>Settings</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("AccCreditNoteSet:update")}
                    disabled={this.disabled("AccCreditNoteSet:update")}
                    value={`AccCreditNoteSet:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div>Update Lead</div><i style={{fontSize: "11px"}}>Reminder Settings</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("RemLeadSet:update")}
                    disabled={this.disabled("RemLeadSet:update")}
                    value={`RemLeadSet:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div>Update Quotation</div><i style={{fontSize: "11px"}}>Reminder Settings</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    checked={this.checked("RemQuotationSet:update")}
                    disabled={this.disabled("RemQuotationSet:update")}
                    value={`RemQuotationSet:update`}
                    onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
              </TableBody>
            </Table>
          </Row>
          <Row>
            <Col>
              <Button
                variant="contained"
                color="secondary"
                className="text-white mb-10 mt-10"
                onClick={() => deleteRole()}
                disabled={selectedRole ? selectedRole.id == 0 ? true: false : true}
              >
                Delete
              </Button>
            </Col>
            <Col>
              <Button
                variant="contained"
                color="primary"
                className="text-white mb-10 mt-10 float-right"
                onClick={() => updateRole()}
              >
                Save
              </Button>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

RoleManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ rolesState }) => {
  const { selectedRole, crudPermissions, operations } = rolesState;
  return { selectedRole, crudPermissions, operations };
};

export default connect(
  mapStateToProps,
  { deleteRole, onChangeUpdateRole, updateRole }
)(withStyles(styles)(RoleManager));
