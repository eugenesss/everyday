import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form } from "reactstrap";

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  dialogPaper: {
    overflow: "visible"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  calendar: {
    width: "auto"
  },
  select: {
    marginLeft: 8,
    marginRight: 8,
  },
});

class AddUserDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, handleClose, userToAdd, open, dispatch, ...other } = this.props;
    return (
      <Dialog fullWidth maxWidth={'md'} PaperProps={{ className: classes.dialogPaper }} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} {...other}>
        <DialogTitle id="simple-dialog-title rounded bg-primary">
          <Row>
            <Col>Add User</Col> 
          </Row>        
        </DialogTitle>
        <DialogContent>
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
            <Row form>
              <Col md={12}>
                <TextField
                  value={userToAdd.role}
                  //fullWidth
                  required
                  select
                  error={!userToAdd.role}
                  className={classes.select}
                  id="Role"
                  label="Role"
                  margin="normal"
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row className="justify-content-end" style={{marginRight: "0.5rem"}}>
              <span style={{display: "inline-block"}}>
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white mb-10 mt-20"
                  onClick={handleClose}
                >
                  Add
                </Button>
              </span>
            </Row> 
          </Form>
        </DialogContent>
      </Dialog>
    );
  }
}

AddUserDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null
)(withStyles(styles)(AddUserDialog));