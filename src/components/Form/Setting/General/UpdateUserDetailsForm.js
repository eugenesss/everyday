import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form,  } from "reactstrap";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { onChangeUpdateUser, updateUser } from 'Actions'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  fullWidth: {
    margin: 0
  }
});


class UpdateUserDetailsForm extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const {
      classes,

      userUpdate,

      onChangeUpdateUser,
      updateUser,
    } = this.props;
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <TextField
              required
              id="firstName"
              label="First Name"
              value={ userUpdate ? userUpdate.firstName : "" }
              onChange={e => onChangeUpdateUser("firstName", e.target.value)}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              required
              id="lastName"
              label="Last Name"
              value={ userUpdate ? userUpdate.lastName : "" }
              onChange={e => onChangeUpdateUser("lastName", e.target.value)}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <TextField
              required
              id="email"
              label="Email Address"
              value={ userUpdate ? userUpdate.email : "" }
              onChange={e => onChangeUpdateUser("email", e.target.value)}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              required
              id="contact"
              label="Contact"
              value={ userUpdate ? userUpdate.contact : "" }
              onChange={e => onChangeUpdateUser("contact", e.target.value)}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form className={classes.fullWidth}>
            <TextField
              fullWidth
              id="description"
              label="Description"
              className={classes.textField}
              value={ userUpdate ? userUpdate.description : "" }
              onChange={e => onChangeUpdateUser("description", e.target.value)}
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
            />
        </Row>
        <Row className="justify-content-end mr-10">
            <Button
              variant="contained"
              color="primary"
              className="text-white mb-10"
              onClick={updateUser}
            >
              Save
            </Button>
        </Row> 
        
      </Form>
    );
  }
}

UpdateUserDetailsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ usersState, rolesState }) => {
  const { userUpdate } = usersState;
  const { roles } = rolesState;
  return { userUpdate, roles };
};

export default connect(
  mapStateToProps,
  { onChangeUpdateUser, updateUser }
)(withStyles(styles)(UpdateUserDetailsForm));
