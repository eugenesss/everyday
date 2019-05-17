import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form  } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  matchPassword:{
    marginRight: "1rem",
    color: "red",
    textAlign: "right"
  },
});

class UpdatePasswordForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      classes
    } = this.props;
    return (
      <Form>
        <Row form>
          <Col md={4}>
            <TextField
              required
              type="password"
              id="oldPassword"
              label="Current Password"
              className={classes.textField}
              value={ "" }
              //onChange={(e) => handleChange('oldPassword', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={4}>
            <TextField
              required
              type="password"
              id="newPassword"
              label="New Password"
              className={classes.textField}
              value={ "" }
              //onChange={(e) => handleChange('newPassword', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={4}>
            <TextField
              required
              type="password"
              id="confirmNewPassword"
              label="Confirm New Password"
              className={classes.textField}
              value={ "" }
              //onChange={(e) => handleChange('confirmNewPassword', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form className={"justify-content-end align-items-center " + classes.textField}>
          <span className={classes.matchPassword}>
              Passwords must match.
          </span>
          <span>
            <Button
              variant="contained"
              color="primary"
              className="text-white mb-10"
              //onClick={handleUpdate.bind(this)}
            >
              Save New Password
            </Button>
          </span>
        </Row>
      </Form>
    );
  }
}

UpdatePasswordForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null, {}
)(withStyles(styles)(UpdatePasswordForm));
