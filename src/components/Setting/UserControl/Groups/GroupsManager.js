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
import Radio from '@material-ui/core/Radio';
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { 
  getAllRoles,
  getAllGroups,
  
  getAllHierarchies,
  addHierarchy,
  onChangeUpdateHierarchy,
  updateHierarchy,
  deleteHierarchy,

  onChangeUpdateGroup,
  updateGroup,
  deleteGroup } from "Actions";

const styles = theme => ({
  root: {
    display: "block",
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
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2
  }
});

class GroupsManager extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllRoles()
    this.props.getAllGroups()
    this.props.getAllHierarchies()
  }

  handleUpdate(){
    this.props.updateGroup()
    this.props.updateHierarchy()
  }
  
  render() {
    const { 
      classes,

      roles,
      selectedGroup,
      groupsLoading,
      hierarchiesLoading,
      selectedHierarchies,

      addHierarchy,
      onChangeUpdateHierarchy,
      deleteHierarchy,
      onChangeUpdateGroup,
      deleteGroup,
     } = this.props;

     var selectedRoles =  selectedHierarchies.map((hierarchy) => {
       return hierarchy.role
     })
     var unselectedRoles = roles.filter((role) => {
       return !selectedRoles.includes(role)
     })

     return (
      <React.Fragment>
        <div className={classes.root}>
          <Row>
            <Col md={12}>
              <TextField
                fullWidth
                required
                error={ selectedGroup ? !selectedGroup.name : false}
                disabled={!selectedGroup || selectedGroup.name == "Global"}
                id="name"
                label="Group Name"
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                value={ selectedGroup ? selectedGroup.name == "Global" ? "Global (default group applied to all roles)" : selectedGroup.name : "" }
                onChange={(e) => onChangeUpdateGroup('name', e.target.value)}
                margin="normal"
                variant="outlined"
              />
            </Col>
            
          </Row>
          <Row>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Roles</TableCell>
                  <TableCell align="center">Tier 1</TableCell>
                  <TableCell align="center">Tier 2</TableCell>
                  <TableCell align="center">Tier 3</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { selectedHierarchies &&
                  selectedHierarchies.map(hierarchy => (
                  <TableRow className={classes.row} key={hierarchy.role.id + hierarchy.group.id}>
                    <TableCell component="th" scope="row">
                      {hierarchy.role.name}
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={hierarchy.tier == 1}
                        onChange={e => onChangeUpdateHierarchy(hierarchy.role.id, e.target.value)}
                        value={1}
                        color="primary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={hierarchy.tier == 2}
                        disabled={hierarchy.role.name == "Member"}
                        onChange={e => onChangeUpdateHierarchy(hierarchy.role.id, e.target.value)}
                        value={2}
                        color="primary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={hierarchy.tier == 3}
                        disabled={hierarchy.role.name == "Member"}
                        onChange={e => onChangeUpdateHierarchy(hierarchy.role.id, e.target.value)}
                        value={3}
                        color="primary"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Row>
          <Row>
            <Col md={6}>
              <TextField
                select
                fullWidth
                required
                error={ selectedGroup ? !selectedGroup.name : false}
                disabled={!selectedGroup || selectedGroup.name == "Global"}
                id="name"
                label="Remove Role from Group"
                className={classes.textField}
                value={[]}
                onChange={(e) => deleteHierarchy(e.target.value)}
                margin="normal"
              > 
                {selectedRoles.map((role) => {
                    return (
                      <MenuItem key={role.id} value={role.id}>
                        <ListItemText primary={role.name} />
                      </MenuItem>
                    )
                })}
              </TextField>
            </Col>
            <Col md={6}>
              <TextField
                  select
                  fullWidth
                  required
                  error={ selectedGroup ? !selectedGroup.name : false}
                  disabled={!selectedGroup || selectedGroup.name == "Global"}
                  id="name"
                  label="Add Role to Group"
                  className={classes.textField}
                  value={[]}
                  onChange={(e) => addHierarchy(e.target.value)}
                  margin="normal"
                > 
                  {unselectedRoles.map((role) => {
                      return (
                        <MenuItem key={role.id} value={role.id}>
                          <ListItemText primary={role.name} />
                        </MenuItem>
                      )
                  })}
                </TextField>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="contained"
                color="secondary"
                className="text-white mb-10 mt-10"
                disabled={selectedGroup ? selectedGroup.id == 0 : true}
                onClick={()=> deleteGroup()}
              >
                Delete
              </Button>
            </Col>
            <Col>
              <Button
                variant="contained"
                color="primary"
                className="text-white mb-10 mt-10 float-right"
                onClick={()=> this.handleUpdate()}
              >
                Save
              </Button>
            </Col>
          </Row>
        </div>
        {groupsLoading && hierarchiesLoading && <RctSectionLoader/>}
      </React.Fragment>
    )
  }
}

GroupsManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ rolesState, groupsState, hierarchiesState }) => {
  const { roles } = rolesState
  const { selectedHierarchies, hierarchiesLoading } = hierarchiesState;
  const { selectedGroup, groupsLoading } = groupsState
  return { selectedGroup, groupsLoading, roles, selectedHierarchies, hierarchiesLoading };
};

export default connect(
  mapStateToProps,
  { getAllRoles, getAllGroups, getAllHierarchies, addHierarchy, onChangeUpdateHierarchy, updateHierarchy, deleteHierarchy, onChangeUpdateGroup, updateGroup, deleteGroup }
)(withStyles(styles)(GroupsManager));
