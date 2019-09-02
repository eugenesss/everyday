import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "Components/Form/Components/FormInput";
import { Button } from "@material-ui/core";

import { updateUser } from "Actions";

class UpdateUserDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.loggedInUser;
    this.handleChange = this.props.handleChange;
    this.submitForm = this.props.submitForm;
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  submitForm() {
    console.log("update user");
    this.props.userUpdate(this.state);
  }

  render() {
    const { firstName, lastName, email, contact } = this.state;
    return (
      <form>
        <div className="row justify-content-center">
          <div className="col-5">
            <FormInput
              label="First Name"
              value={firstName}
              target="firstName"
              handleChange={this.handleChange}
            />
            <FormInput
              label="Email"
              value={email}
              target="email"
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-5 offset-md-1">
            <FormInput
              label="Last Name"
              value={lastName}
              target="lastName"
              handleChange={this.handleChange}
            />
            <FormInput
              label="Contact"
              value={contact}
              target="contact"
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div className="d-flex flex-row-reverse my-20">
          <Button
            variant="contained"
            className="btn-success text-white"
            onClick={this.submitForm}
          >
            Save
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { loggedInUser } = authUser;
  return { loggedInUser };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(UpdateUserDetailsForm);
