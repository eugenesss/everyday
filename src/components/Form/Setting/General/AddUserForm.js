import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form } from "reactstrap";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { addUser, onChangeAddUser } from "Actions";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  fullWidth: {
    margin: 0
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class AddUserForm extends Component {
  constructor(props) {
    super(props);
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    const {
      classes,

      userAdd,
      accessGroups,

      addUser,
      onChangeAddUser
    } = this.props;
    return (
      <Form>
        <Row form className={"align-items-center"}>
          <Col md={6}>
            <TextField
              value={userAdd.firstName || ""}
              required
              error={!userAdd.firstName}
              className={classes.textField}
              onChange={e => onChangeAddUser("firstName", e.target.value)}
              id="firstName"
              label="First Name"
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              value={userAdd.lastName || ""}
              required
              error={!userAdd.lastName}
              className={classes.textField}
              onChange={e => onChangeAddUser("lastName", e.target.value)}
              id="lastName"
              label="Last Name"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <TextField
              value={userAdd.email || ""}
              required
              error={!userAdd.email || !this.validateEmail(userAdd.email)}
              className={classes.textField}
              onChange={e => onChangeAddUser("email", e.target.value)}
              id="email"
              label="Email"
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              value={userAdd.contact || ""}
              required
              error={!userAdd.contact}
              className={classes.textField}
              onChange={e => onChangeAddUser("contact", e.target.value)}
              id="contact"
              label="Contact"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <TextField
              value={userAdd.password || ""}
              required
              type="password"
              error={!userAdd.password}
              className={classes.textField}
              onChange={e => onChangeAddUser("password", e.target.value)}
              id="email"
              label="Password"
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              value={userAdd.repeatpass || ""}
              required
              type="password"
              error={userAdd.password != userAdd.repeatpass}
              className={classes.textField}
              onChange={e => onChangeAddUser("repeatpass", e.target.value)}
              id="contact"
              label="password"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form className={classes.fullWidth}>
          <Col md={12}>
            <InputLabel htmlFor="role" style={{ fontSize: "0.8rem" }}>
              Role
            </InputLabel>
            <Select
              error={userAdd.role.length == 0}
              style={{ height: "40px", marginTop: "-0.5rem" }}
              multiple
              input={<Input id="role" />}
              value={ userAdd && userAdd.role ? userAdd.role : []}              
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(function(value) {                    
                    for(const grp of accessGroups){
                      var role = grp.roles.find(role => role.id == value);
                      if(role !== undefined){
                        break;
                      }
                    }
                   
                    return (
                      <Chip
                        key={value}
                        label={role.name}
                        className={classes.chip}
                      />
                    );
                  })}
                </div>
              )}
            >
              {accessGroups.map(function(group) {
                var items = [];
                  for(const role of group.roles){
                    var selectedItem = false || role.name == "Member";
                    for(var i in userAdd.role){
                      if(userAdd.role[i] == role.id){
                        selectedItem = true;
                      }
                    }                                       
                    items.push(
                      <MenuItem
                      key={role.id}
                      value={role.id}
                      disabled={role.name == "Member"}
                    >
                      <Checkbox
                        color="primary"
                        checked={ selectedItem }
                        value={role.id}
                        onChange={e => onChangeAddUser("role", e.target.value)}
                      />
                      <ListItemText primary={role.name+"-"+group.name+" ("+role.tier+")"} />
                    </MenuItem>
                    );
                  }   
                return items;
              })}
            </Select>
          </Col>
        </Row>
        <Row className={"justify-content-end " + classes.textField}>
          <Button
            variant="contained"
            color="primary"
            className="text-white mb-10 mt-20"
            onClick={addUser}
            disabled={
              !userAdd.firstName ||
              !userAdd.lastName ||
              !userAdd.email ||
              !this.validateEmail(userAdd.email) ||
              !userAdd.contact ||
              !userAdd.password ||
              userAdd.password != userAdd.repeatpass ||
              userAdd.role.length == 0
            }
          >
            Create
          </Button>
        </Row>
      </Form>
    );
  }
}

AddUserForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ usersState }) => {
  const { userAdd, accessGroups } = usersState; 
  return { userAdd, accessGroups };
};

export default connect(
  mapStateToProps,
  { addUser, onChangeAddUser }
)(withStyles(styles)(AddUserForm));
