import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form  } from "reactstrap";

import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  fullWidth: {
    margin: 0
  }
});

class AddUserForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      classes,
      userToAdd,
    } = this.props;
    return (
      <Form>
        <Row form className={"align-items-center"}>
          <Col md={6}>
            <TextField
              value={userToAdd.firstName}
              required
              error={!userToAdd.firstName}
              className={classes.textField}
              id="First Name"
              label="First Name"
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              value={userToAdd.lastName}
              required
              error={!userToAdd.lastName}
              className={classes.textField}
              id="Last Name"
              label="Last Name"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <TextField
              value={userToAdd.email}
              required
              error={!userToAdd.email}
              className={classes.textField}
              id="Email"
              label="Email"
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              value={userToAdd.contact}
              required
              error={!userToAdd.contact}
              className={classes.textField}
              id="Contact"
              label="Contact"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form className={classes.fullWidth}>
          <TextField
            value={userToAdd.role}
            fullWidth
            required
            select
            error={!userToAdd.role}
            className={classes.textField}
            id="Role"
            label="Role"
            margin="normal"
            variant="outlined"
          />
        </Row>
      </Form>
    );
  }
}

AddUserForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ usersState }) => {
  const { userToAdd } = usersState;
  return { userToAdd };
};

export default connect(
  mapStateToProps, {}
)(withStyles(styles)(AddUserForm));
