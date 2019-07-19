import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import {
  deleteRole,
  onChangeUpdateRole,
  onChangeUpdateRoleRights,
  updateRole,
  onChangeSelectedAccessRightsCategory
} from "Actions";

const styles = theme => ({
  root: {
    display: "block !important",
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  table: {
    minHeight: 0
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    //fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class RoleManager extends Component {
  constructor(props) {
    super(props);
  }

  checked(rightId) {
    const selectedRoleRights = this.props.selectedRoleRights;
    if (this.props.selectedRole.name == "Super Admin") return true;
    else if (selectedRoleRights) {
      if (selectedRoleRights.find(right => right.id === rightId)) return true;
      else return false;
    }
    return false;
  }
  disabled(action) {
    const selectedRole = this.props.selectedRole;
    if (selectedRole.name == "Super Admin") return true;
    if (selectedRole.removable == false) {
      if (action != "read") return true;
      else return false;
    } else return false;
  }
  handleChange(selectedRight) {

    var selectedRoleRights = this.props.selectedRoleRights.slice();
    if (selectedRoleRights.find(right => right.id == selectedRight.id)) {
      let i = selectedRoleRights
        .map(function (e) {
          return e.id;
        })
        .indexOf(selectedRight.id);
      if (i > -1) selectedRoleRights.splice(i, 1);
    } else {
      selectedRoleRights.push(selectedRight);
    }
    this.props.onChangeUpdateRoleRights(selectedRoleRights);

  }

  render() {
    const {
      classes,

      selectedRole,
      accessRights,
      selectedAccessRightsCategory,

      onChangeUpdateRole,
      updateRole,
      deleteRole,
      onChangeSelectedAccessRightsCategory
    } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Row>
            <TextField
              fullWidth
              required
              error={
                selectedRole
                  ? selectedRole.name
                    ? !selectedRole.name
                    : !selectedRole
                  : false
              }
              disabled={!selectedRole || selectedRole.removable == false}
              id="name"
              label="Role Name"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              value={selectedRole.name ? selectedRole.name : ""}
              onChange={e => onChangeUpdateRole("name", e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Row>
          <Row>
            <Col className={classes.root}>
              {accessRights.map(category => {
                return (
                  <ExpansionPanel
                    key={category[0][0].categoryName}
                    expanded={
                      selectedAccessRightsCategory == category[0][0].name
                    }
                    onChange={() => {
                      onChangeSelectedAccessRightsCategory(category[0][0].name);
                    }}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className={classes.heading + " mt-10 mb-10"}>
                        {category[0][0].categoryName}
                      </Typography>
                      {/* <Typography className={classes.secondaryHeading}>{category[0][0].description}</Typography> */}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Actions</TableCell>
                            <TableCell align="center">Create</TableCell>
                            <TableCell align="center">Read</TableCell>
                            <TableCell align="center">Update</TableCell>
                            <TableCell align="center">Delete</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {category.map(model => {
                            var data = [];
                            if (model.length >= 4 &&
                              model[0].method == "create" &&
                              model[1].method == "read" &&
                              model[2].method == "update" &&
                              model[3].method == "delete"
                            ) {
                              data.push(
                                <TableRow
                                  className={classes.row}
                                  key={model[0].name}
                                >
                                  <TableCell component="th" scope="row">
                                    <div className={classes.heading}>
                                      {model[0].name}
                                    </div>
                                    <div className={classes.secondaryHeading}>
                                      {model[0].description}
                                    </div>
                                  </TableCell>
                                  {model.map((md, index) => {
                                    if (index < 4) {
                                      return (
                                        <TableCell
                                          align="center"
                                          key={md.method}
                                        >
                                          <Checkbox
                                            color="primary"
                                            checked={
                                              this.checked(md.id) ||
                                              md.editable == false
                                            }
                                            disabled={
                                              this.disabled(md.method) ||
                                              !md.editable
                                            }
                                            value={`${md.id}`}
                                            onChange={() =>
                                              this.handleChange(md)
                                            }
                                          />
                                        </TableCell>
                                      )
                                    }
                                  })}
                                </TableRow>
                              );
                            }
                            if (model.length >= 5 || model.length < 4) {
                              for(var i=0; i < model.length; i++){
                                if(model.length < 4 || i >= 4){
                                  data.push(<TableRow
                                    className={classes.row}
                                    key={model[i].name}
                                  >
                                    <TableCell component="th" scope="row">
                                      <div className={classes.heading}>
                                        {model[i].name}
                                      </div>
                                      <div className={classes.secondaryHeading}>
                                        {model[i].method}-{model[i].description}
                                      </div>
                                    </TableCell>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell
                                      align="center"
                                      key={model[i].method}
                                    >
                                      <Switch
                                        color="primary"
                                        checked={
                                          this.checked(model[i].id) ||
                                          model[i].editable == false
                                        }
                                        disabled={
                                          this.disabled(model[i].method) ||
                                          !model[i].editable
                                        }
                                        value={`${model[i].id}`}
                                        onChange={() =>
                                          this.handleChange(model[i])
                                        }
                                      />
                                    </TableCell>
                                    <TableCell />
                                  </TableRow>);
                                }
                              }
                            }
                            return data
                          })
                          }
                        </TableBody>
                      </Table>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="contained"
                color="secondary"
                className="text-white mb-10 mt-10"
                onClick={() => deleteRole()}
                disabled={
                  selectedRole.editable == false ||
                  selectedRole.removable == false
                }
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
    );
  }
}

RoleManager.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ rolesState }) => {
  const {
    selectedRole,
    accessRights,
    selectedAccessRightsCategory,
    selectedRoleRights
  } = rolesState;
  return {
    selectedRole,
    accessRights,
    selectedAccessRightsCategory,
    selectedRoleRights
  };
};

export default connect(
  mapStateToProps,
  {
    deleteRole,
    onChangeUpdateRole,
    onChangeUpdateRoleRights,
    updateRole,
    onChangeSelectedAccessRightsCategory
  }
)(withStyles(styles)(RoleManager));
