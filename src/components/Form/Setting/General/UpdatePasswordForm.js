import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { updatePassword } from "Actions";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  matchPassword: {
    marginRight: "1rem",
    color: "red",
    textAlign: "right"
  }
});

class UpdatePasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = { oldPassword: "", newPassword: "", confirmNewPassword: "", errorMsg: "" };
  }

  handleChange(type, val) {
    var newMsg = this.state.errorMsg;
    if (type == "newPassword") {
      if (val != this.state.confirmNewPassword) {
        newMsg = "Passwords must match";
      }
      else {
        newMsg = "";
      }
    }
    if (type == "confirmNewPassword") {
      if (val != this.state.newPassword) {
        newMsg = "Passwords must match";
      }
      else {
        newMsg = "";
      }
    }

    this.setState({ [type]: val, errorMsg: newMsg });
  }

  handleUpdate() {
    if (this.state.oldPassword == "") {
      this.setState({ errorMsg: "Current Password is empty" });
    }
    else if (this.state.newPassword != this.state.confirmNewPassword) {
      this.setState({ errorMsg: "Passwords must match" });
    }
    else {
      console.log("here");
      this.props.updatePassword(this.state.oldPassword, this.state.newPassword);
    }
  }

  render() {
    const { classes } = this.props;
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
              value={this.state.oldpassword}
              onChange={(e) => this.handleChange('oldPassword', e.target.value)}
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
              value={this.state.newpassword}
              onChange={(e) => this.handleChange('newPassword', e.target.value)}
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
              value={this.state.confirmNewPassword}
              onChange={(e) => this.handleChange('confirmNewPassword', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row
          form
          className={
            "justify-content-end align-items-center " + classes.textField
          }
        >

          <span className={classes.matchPassword}>{this.state.errorMsg}</span>
          <span>
            <Button
              variant="contained"
              color="primary"
              className="text-white mb-10"
              onClick={this.handleUpdate.bind(this)}
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
  null,
  { updatePassword }
)(withStyles(styles)(UpdatePasswordForm));
