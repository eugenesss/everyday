import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form  } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class UserControlForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      classes
    } = this.props;
    return (
      <Form>
        <Row form className="align-items-center">
          <Col md={8}>
            <TextField
              id="isSuperAdmin"
              fullWidth
              select
              label="Super Admin"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            >
              <MenuItem key={false} value={false}>User</MenuItem>
              <MenuItem key={true} value={true}>Super Admin</MenuItem>
            </TextField>
          </Col>
          <Col md={4}>
            <span>
              <Button
                variant="contained"
                color="primary"
                className="text-white ml-10"
              >
                Save
              </Button>
            </span>
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

export default connect(
  null, {}
)(withStyles(styles)(UserControlForm));
