/**
 * Login Page
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, withRouter, } from "react-router-dom";
import { Form, FormGroup, Input, FormFeedback} from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import QueueAnim from "rc-queue-anim";

// app config
import AppConfig from "Constants/AppConfig";

// redux action
import { userResetPassword, handleRegErrorForm } from "Actions";
import {EmailValidator} from '../register/Components/Validation/Validation'

class forgetpassword extends Component {

  constuctor() {
  }

  state = {
    emailAddress: "",
    emailValidated: ""
  };

  resetPassword = () => {
    if (this.state.emailValidated == "has-success") {
      this.props.userResetPassword(this.state.emailAddress)
    }

    if (this.state.emailAddress.length == 0) {
      this.props.handleRegErrorForm('The email field is not filled up.')
    }
  }

  render() {
    const { emailAddress } = this.state;
    const { loading } = this.props;
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper">
          {loading && <LinearProgress />}
          <div className="session-inner-wrapper" style={{ marginTop: "5%" }}>
            <div className="container">
              <div className="row row-eq-height">
                <div className="col-sm-3 col-md-3 col-lg-2" />
                <div className="col-sm-6 col-md-6 col-lg-8">
                  <div className="session-head mb-30 text-center">
                    <h1 className="mb-20">
                      <Link to="/">
                        <img
                          src={AppConfig.appLogo}
                          alt="session-logo"
                          className="img-fluid"
                          width="180"
                          // height="35"
                        />
                      </Link>
                    </h1>
                    <h2 className="font-weight-bold text-white">
                      Sign in to {AppConfig.brandName}
                    </h2>
                    <p className="mb-0 text-white">
                      Most powerful CRM in SG, some say Batam
                    </p>
                  </div>
                  <div
                    className="session-body text-center"
                    style={{ padding: "5% 10%" }}
                  >
                      <FormGroup className="has-wrapper">
                        <Input
                          type="email"
                          value={emailAddress}
                          name="emailAddress"
                          id="emailAddress"
                          className="has-input input-lg"
                          placeholder="Enter Email Address"
                          onChange={event => {
                            this.setState({ emailAddress: event.target.value })
                            this.setState({emailValidated: EmailValidator(event.target.value)})
                          }}
                          valid={ this.state.emailValidated === 'has-success' }
                          invalid={ this.state.emailValidated === 'has-danger' }
                        />
                        <span className="has-icon">
                          <i className="ti-email" />
                        </span>

                        <FormFeedback >Oh noes! You need to input a valid email addresss!</FormFeedback>
                        <FormFeedback valid>We will look for your delicious email!</FormFeedback>
                      </FormGroup>
                    
                      {/* <FormGroup className="mb-15"> */}
                        <Button
                          color="primary"
                          className="btn-block text-white w-100"
                          variant="contained"
                          size="large"
                          type="submit"
                          onClick={()=> this.resetPassword()}
                        >
                          Forget Password
                        </Button>
                      {/* </FormGroup> */}

                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2" />
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
} // map state to props
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default withRouter(connect(
  mapStateToProps,
  {
    userResetPassword, handleRegErrorForm
  }
)(forgetpassword));