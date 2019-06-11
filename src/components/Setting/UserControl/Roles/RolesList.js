import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars'
import { Col, Row } from "reactstrap";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import { getAllRoles, onChangeSelectedRole, addRole } from 'Actions'

const styles = theme => ({
  root: {
    width: "100%",
    padding: 10,
  },
  listItem: {
    paddingLeft: '0 !important',
    paddingRight: 0,
  },
  paper: {
    width: "100%",
    marginBottom: "calc(20vh)",
  },
  icon: {
    height: 24,
    width: 24,
   },
  block: {
    display: "block !important"
  },
});

class RolesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllRoles()
  }
  
  render() {
    const { 
      classes,

      roles,
      selectedRole,
      rolesLoading,

      accessRoles,

      onChangeSelectedRole,
      addRole,
     } = this.props;
    return (
      <React.Fragment>
        <div className={classes.block}>
          <Row className={"d-flex align-items-center"}>
            <Col>
              <h2 className={"p-10 pt-20 pb-10 m-0 text-center"}>Roles</h2>
            </Col>
            <Col>
              <IconButton
                className="text-primary mt-10 mr-2 float-right"
                aria-label="Add Role"
                onClick={() => addRole()}
              >
                <i className={"zmdi zmdi-plus " + classes.icon} />
              </IconButton>
            </Col>
          </Row>
          <Scrollbars
              className="rct-scroll"
              autoHeight
              autoHeightMin={'90vh'}
          >
            <List
              component="nav"
              className={classes.root}
            >
              <ListItem 
                button
                selected={!selectedRole}
                onClick={() => onChangeSelectedRole("Super Admin")}
              >
                <ListItemText inset primary={"Super Admin"} className={classes.listItem}/>
              </ListItem>
              {roles.map(role => (
                <ListItem 
                  key={role.id}
                  button
                  selected={selectedRole ? selectedRole.id == role.id : false}
                  onClick={() => onChangeSelectedRole(role)}
                >
                  <ListItemText primary={role.name} className={classes.listItem}/>
                </ListItem>
              ))}
              {accessRoles.map(accessRole => (
                <ListItem 
                  key={accessRole.id}
                  button
                  selected={selectedRole ? selectedRole.id == accessRole.id : false}
                  onClick={() => onChangeSelectedRole(accessRole)}
                >
                  <ListItemText primary={accessRole.name} className={classes.listItem}/>
                </ListItem>
              ))}
            </List>
          </Scrollbars>
          {rolesLoading && <RctSectionLoader/>}
        </div>
      </React.Fragment>
    )
  }
}

RolesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ rolesState }) => {
  const { roles, selectedRole, rolesLoading, accessRoles } = rolesState;
  return { roles, selectedRole, rolesLoading, accessRoles };
};

export default connect(
  mapStateToProps,
  { getAllRoles, onChangeSelectedRole, addRole }
)(withStyles(styles)(RolesList));
