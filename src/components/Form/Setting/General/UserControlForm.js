import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form  } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  inputLabel: {
    fontSize: '0.8em'
  },
  select: {
    marginTop: '-0.5em',
    marginBottom: '0.5em'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

class UserControlForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      userControl,
      accessGroupRoles,
      accessRoles,
      accessGroups,
      classes
    } = this.props;
    console.log(accessGroupRoles)
    return (
      <Form>
        <Row form className="align-items-center">
          <Col>
            <InputLabel htmlFor="role" className={classes.inputLabel + " " + classes.textField}>Role</InputLabel>
            <Select
              fullWidth
              className={classes.select + " " + classes.textField}
              // error={}
              multiple
              value={ [""] }
              onChange={(e) => console.log(e.target.value)}
              // renderValue={selected => (
              //   <div className={classes.chips}>
              //     {selected.map((value) => {
              //       return (
              //         <Chip key={value} label={value.role.name + " (" + value.group.name + ")"} className={classes.chip} />
              //       )
              //     })}
              //   </div>
              // )}
            >
              {accessGroupRoles.map((groupRole) => {
                console.log(groupRole)
                const role = accessRoles.find(role => role.id == groupRole.accessRoleId)
                const group = accessGroups.find(group => group.id == groupRole.accessGroupId)
                return (
                  <MenuItem key={groupRole.id} value={groupRole}>
                    <Checkbox 
                      color="primary" 
                      //checked={ userControl.access.indexOf(groupRole.id) > -1} 
                    />
                    <ListItemText primary={(role ? role.name : "") + " (" + (group ? group.name : "") + ")"} />
                  </MenuItem>
                )
              })}
            </Select>
          </Col>
          <Col>
            <Button
              variant="contained"
              color="primary"
              className="text-white ml-10"
            >
              Save
            </Button>
          </Col>
        </Row>
        <Row form className="align-items-center">
          <Col>
            <TextField
              id="isSuperAdmin"
              fullWidth
              select
              label="Super Admin"
              className={classes.textField}
              value={userControl.isSuperAdmin}
              margin="normal"
              variant="outlined"
            >
              <MenuItem key={false} value={false}>User</MenuItem>
              <MenuItem key={true} value={true}>Super Admin</MenuItem>
            </TextField>
          </Col>
          <Col>
            <Button
              variant="contained"
              color="primary"
              className="text-white ml-10"
            >
              Save
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>
              <Button
                variant="contained"
                color="primary"
                className={"text-white mt-10 " + classes.textField}
              >
                Reset Password
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }
}

UserControlForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({usersState, groupsState, rolesState}) => {
  const { userControl } = usersState;
  const { accessRoles } = rolesState;
  const { accessGroups, accessGroupRoles} = groupsState;
  return { userControl, accessRoles, accessGroups, accessGroupRoles };
}

export default connect(
  mapStateToProps, {}
)(withStyles(styles)(UserControlForm));
