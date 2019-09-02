/**
 * Login Page
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FormGroup, Input, FormFeedback } from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fab from "@material-ui/core/Fab";

// app config
import AppConfig from "Constants/AppConfig";

// redux action
import { userResetPassword, handleRegErrorForm } from "Actions";
import { EmailValidator } from "../register/Components/Validation/Validation";

class forgetpassword extends Component {
  constuctor() {}

  state = {
    emailAddress: "",
    emailValidated: ""
  };

  resetPassword = () => {
    if (this.state.emailValidated == "has-success") {
      this.props.userResetPassword(this.state.emailAddress);
    }

    if (this.state.emailAddress.length == 0) {
      this.props.handleRegErrorForm("The email field is not filled up.");
    }
  };

  render() {
    const { emailAddress } = this.state;
    const { loading } = this.props;

    return (
      <div className="login_index">
        {loading && <LinearProgress />}

        <div className="login_module">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="session-body text-center">
                <h2 className="text-left">
                  Lost your account?
                  <br />
                  We've got you covered
                </h2>
                <p className="session-head fw-light text-left mb-30 fs-14 text-muted">
                  Enter your email address
                  <br />
                  and you will receive a reset password link
                </p>

                <FormGroup className="has-wrapper">
                  <Input
                    type="email"
                    value={emailAddress}
                    name="emailAddress"
                    id="emailAddress"
                    style={emailAddress ? EmailStyle : emptyField}
                    className="has-input input-lg"
                    placeholder="Enter Email Address"
                    onChange={event => {
                      this.setState({ emailAddress: event.target.value });
                      this.setState({
                        emailValidated: EmailValidator(event.target.value)
                      });
                    }}
                    valid={this.state.emailValidated === "has-success"}
                    invalid={this.state.emailValidated === "has-danger"}
                  />
                  <span className="has-icon">
                    <i className="ti-email" />
                  </span>
                  <FormFeedback>
                    You need to input a valid email addresss!
                  </FormFeedback>
                  <FormFeedback valid>
                    The email address is valid!
                  </FormFeedback>
                </FormGroup>

                <div>
                  <Fab
                    variant="extended"
                    className="text-white"
                    size="medium"
                    style={{
                      backgroundColor: AppConfig.themeColors.primary,
                      marginBottom: "1.5rem"
                    }}
                    onClick={() => this.resetPassword()}
                  >
                    <span style={{ width: 100 }}>Recover email</span>
                  </Fab>
                  <div className="d-flex justify-content-center align-items-center">
                    <p
                      className="fs-12 fw-light"
                      style={{ color: "rgba(0,0,0,0.4)" }}
                    >
                      Back to
                      <a
                        className="ml-5 fw-semi-bold"
                        onClick={() => this.props.history.push("/login")}
                      >
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="login_placeholder">
          <video
            src="https://ak5.picdn.net/shutterstock/videos/1015322305/preview/stock-footage-creative-business-team-having-meeting-at-the-office-successful-deal-business-partners-concluding.mp4"
            loop
            autoPlay
            type="video/mp4"
            style={{
              minHeight: "100%",
              minWidth: "100%",
              position: "absolute",
              top: 0,
              bottom: 0,
              overflow: "hidden"
            }}
          />

          <div
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <h1
                className="mb-0 text-black"
                style={{ fontSize: 32, color: "white" }}
              >
                Make your life easier
              </h1>
              <h1
                className=" mb-0 text-black"
                style={{ fontSize: 32, color: "white" }}
              >
                No more papers
              </h1>

              <h1
                className="mb-0 text-black"
                style={{ fontSize: 32, color: "white" }}
              >
                Digitise your workflow
              </h1>
              <h1
                className=" mb-0 text-black"
                style={{ fontSize: 32, color: "white" }}
              >
                Say goodbye to papers
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
} // map state to props
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      userResetPassword,
      handleRegErrorForm
    }
  )(forgetpassword)
);

const emptyField = {
  borderBottom: "0.3px solid rgba(0,0,0,0.5)",
  borderRadius: 0,
  padding: 0,
  boxShadow: "none",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  fontWeight: "300",
  fontSize: "16px",
  color: "#ebedf2"
};

const EmailStyle = {
  borderBottom: "0.3px solid rgba(0,0,0,0.5)",
  borderRadius: 0,
  padding: 0,
  boxShadow: "none",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  fontWeight: "500",
  fontSize: "18px",
  color: "black"
};
