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
import Switch from "@material-ui/core/Switch"

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
    var operations = this.props.operations
    var sOperation = operations.find(op => {return op.id == val})
    if (permissions.find( permission => permission == sOperation )) {
      var index = permissions.indexOf(sOperation)
      if (index > -1) {
        permissions.splice(index, 1)
      }
    } else {
      permissions.push(sOperation)
    }
    this.props.onChangeUpdateRole("permissions", permissions)
  }
  
  
  render() {
    const { 
      classes,

      selectedRole,
      crudOperations,
      miscOperations,

      onChangeUpdateRole,
      updateRole,
      deleteRole,
     } = this.props;
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
                  <TableCell>CRUD Actions</TableCell>
                  <TableCell align="center">Read</TableCell>
                  <TableCell align="center">Create</TableCell>
                  <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {crudOperations.map(model => (
                <TableRow className={classes.row} key={model[0].name}>
                  <TableCell component="th" scope="row">
                    {model[0].name}
                  </TableCell>
                  {model.map(op => (
                    <TableCell align="center" key={op.operation}>
                      <Checkbox
                        color="primary"
                        checked={this.checked(op)}
                        disabled={this.disabled(op.operation)}
                        value={`${op.id}`}
                        onChange={e => this.handleChange(e.target.value)}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              
              </TableBody>
            </Table>
          </Row>
          <Row>
            <Table className={"mt-50 " + classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Miscellaneous Actions</TableCell>
                  <TableCell align="center">Privilege</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {miscOperations.map(op => (
                  <TableRow className={classes.row} key={op.id}>
                    <TableCell component="th" scope="row">
                      {op.desc}
                    </TableCell>
                    <TableCell align="center">
                      <Switch
                        color="primary"
                        checked={this.checked(op)}
                        disabled={this.disabled(op.operation)}
                        value={`${op.id}`}
                        onChange={e => this.handleChange(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
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
  const { selectedRole, crudOperations, miscOperations, operations } = rolesState;
  return { selectedRole, crudOperations, miscOperations, operations };
};

export default connect(
  mapStateToProps,
  { deleteRole, onChangeUpdateRole, updateRole }
)(withStyles(styles)(RoleManager));
