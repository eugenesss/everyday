import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Form,  } from "reactstrap";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  description: {
    margin: 0
  }
});


class UpdateCompanyDetailsForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      classes,
      match,
    } = this.props;
    return (
      <Form>
        <Row form>
          <Col md={12}>
            <TextField
              required
              id="Name"
              label="Name"
              value={ "" }
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
              id="emailAddress"
              label="Email Address"
              value={ "" }
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
              value={ "" }
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
              id="website"
              label="Website"
              value={ "" }
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Col>
          <Col md={6}>
            <TextField
              required
              id="location"
              label="Location"
              value={ "" }
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row form className={classes.description}>
            <TextField
              fullWidth
              id="description"
              label="Description"
              className={classes.textField}
              value={ "" }
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
            //onClick={handleUpdate.bind(this)}
          >
            Save
          </Button>
        </Row> 
        
      </Form>
    );
  }
}

UpdateCompanyDetailsForm.propTypes = {
  classes: PropTypes.object.isRequired
};


export default connect(
  null, {}
)(withStyles(styles)(UpdateCompanyDetailsForm));
