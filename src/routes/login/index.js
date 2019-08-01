/**
 * Login Page
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

import QueueAnim from "rc-queue-anim";

// app config
import AppConfig from "Constants/AppConfig";

// redux action
import {
  signInUserWithEmailPassword,
  userResentEmail,
  handleRegErrorForm
} from "Actions";

class Signin extends Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  state = {
    emailAddress: "",
    password: ""
  };

  /**
   * On User Login
   */
  onUserLogin = e => {
    e.preventDefault();
    if (this.state.emailAddress !== "" && this.state.password !== "") {
      this.props.signInUserWithEmailPassword(this.state, this.props.history);
    } else {
      this.props.handleRegErrorForm(
        "Please type your email address and password"
      );
    }
  };

  routeChange(element) {
    let path = "";
    switch (element) {
      case "register":
        path = `/register`;
        this.props.history.push(path);
        break;

      case "forget":
        path = `/forgetpassword`;
        this.props.history.push(path);
        break;
      default:
        break;
    }
  }

  resentVerificationEmail = () => {
    this.setState({ emailAddress: "", password: "" });
    this.props.userResentEmail(this.props.user);
  };

  render() {
    const { emailAddress, password } = this.state;
    const { loading, error } = this.props;

    return (
        <div className="login_index">

          {loading && <LinearProgress />}
          
                       
              <div className="login_module">
                <div className="session-body text-center" style={{paddingLeft: 40, paddingRight: 40, width: '100%', overflow: 'auto'}} >

                    {/* <h2 className="font-weight-bold text-white">
                      Sign in to {AppConfig.brandName}
                    </h2> */}
                    <p className="mb-0 text-black" style={{textAlign:'left', paddingBottom: 10, fontSize: 20}}>
                      Get your free<br/>Everyday account now.
                    </p>
                    <p className="session-head mb-0 text-black" style={{textAlign:'left', fontWeight: "300", paddingBottom: 20, fontSize: 12, color: 'rgba(0,0,0,0.4)'}}>
                      Try Everyday Business free for 30 days.<br/>Everyday basic free for unlimited time
                    </p>

                    <Form onSubmit={this.onUserLogin}>
                      <FormGroup className="has-wrapper">
                        <Input
                          type="email"
                          value={emailAddress}
                          style={emailAddress ? EmailStyle : emptyField}
                          name="emailAddress"
                          id="emailAddress"
                          className="has-input input-lg"
                          placeholder="Enter Email Address"
                          onChange={event =>
                            this.setState({ emailAddress: event.target.value })
                          }
                        />
                        {/* <span className="has-icon">
                          <i className="ti-email" />
                        </span> */}
                      </FormGroup>

                      {error != "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "3rem"
                          }}
                        >
                          <FormGroup
                            className="has-wrapper"
                            style={{ marginBottom: "0.5rem" }}
                          >
                            <Input
                              value={password}
                              style={password ? PasswordStyle : emptyField}
                              type="Password"
                              name="password"
                              id="password"
                              className="has-input input-lg"
                              placeholder="Password"
                              onChange={event =>
                                this.setState({ password: event.target.value })
                              }
                              // style={{caretColor:'black', }}
                            />

                            <span className="has-icon" style={{top: 6}}>
                              <i className="ti-eye" />
                            </span>
                          </FormGroup>

                          <div
                            onClick={() => this.routeChange("forget")}
                            style={{
                              textAlign: "right",
                              // color: AppConfig.themeColors.danger,
                              color: 'rgba(0,0,0,0.4)',
                              fontSize: 12,
                              fontWeight: "300",
                            }}
                          >
                            Forget Password?
                          </div>
                        </div>
                      )}

                      {error != "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && (
                        <FormGroup className="mb-15">
                          <Fab
                            variant="extended"
                            className="text-white"
                            size="medium"
                            style={{
                              backgroundColor: AppConfig.themeColors.primary,
                              marginBottom: "1.5rem"
                            }}
                            type="submit"
                          >
                            <span style={{width: 120}}>Sign in</span>
                          </Fab>

                          {/* <Fab
                            variant="extended"
                            className="text-white"
                            size="large"
                            style={{
                              backgroundColor: AppConfig.themeColors.primary,
                              marginBottom: "1.5rem",
                              marginTop: "2rem"
                            }}
                            onClick={() => this.resentVerificationEmail()}
                          >
                            <Icon>trending_flat</Icon>
                          </Fab> */}

                          <div
                            onClick={() => this.routeChange("register")}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <div
                              style={{
                                color: "rgba(0,0,0,0.4)",
                                fontWeight: "300",
                                fontSize: 12
                              }}
                            >
                              Not signed up yet?
                            </div>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.4)",
                                fontSize: 12,
                                fontWeight: "500",
                                marginLeft: 5
                              }}
                            >
                              Sign Up
                            </div>
                          </div>
                        </FormGroup>
                      )}

                      {error == "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && (
                        <FormGroup className="mb-15">
                          <Fab
                            variant="extended"
                            className="text-white"
                            size="large"
                            style={{
                              backgroundColor: AppConfig.themeColors.primary,
                              marginBottom: "1.5rem",
                              marginTop: "2rem"
                            }}
                            onClick={() => this.resentVerificationEmail()}
                          >
                            <Icon>trending_flat</Icon>
                          </Fab>

                          {/* <Fab
                            variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="Add"
                            className={classes.margin}
                          >
                            <NavigationIcon className={classes.extendedIcon} />
                            Extended
                          </Fab> */}





                          <div
                            onClick={() => this.routeChange("register")}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <div
                              style={{
                                color: "rgba(0,0,0,0.5)",
                                fontWeight: 300,
                                fontSize: 14
                              }}
                            >
                              You have signed up with us before
                            </div>
                            <div
                              style={{
                                color: "black",
                                fontSize: 14,
                                fontWeight: "400",
                                marginLeft: 5
                              }}
                            >
                              Resend verification email
                            </div>
                          </div>
                          {/* <Button
                            color="primary"
                            className="btn-block text-white w-100"
                            variant="contained"
                            size="large"
                            onClick={()=> this.resentVerificationEmail()}
                          >
                            Resend verification email
                          </Button> */}
                        </FormGroup>
                      )}
                    </Form>
               
                </div>
              </div>

              <div className="login_placeholder">
                  <video 
                    src='https://ak5.picdn.net/shutterstock/videos/1015322305/preview/stock-footage-creative-business-team-having-meeting-at-the-office-successful-deal-business-partners-concluding.mp4'
                    loop={true} autoPlay type="video/mp4"
                    style={{
                      minHeight: '100%',
                      minWidth: '100%',
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      overflow:'hidden'
                     
                    }}
                  />

                  <div style={{position:'relative', height: '100%', width:'100%', backgroundColor: 'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>

                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                      <h1 className="mb-0 text-black" style={{fontSize: 32, color: 'white'}}>
                        Make your life easier
                      </h1>
                      <h1 className=" mb-0 text-black" style={{fontSize: 32, color: 'white'}}>
                        No more papers
                      </h1>

                      <h1 className="mb-0 text-black" style={{fontSize: 32, color: 'white'}}>
                        Digitise your workflow
                      </h1>
                      <h1 className=" mb-0 text-black" style={{fontSize: 32, color: 'white'}}>
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
  const { user, loading, error } = authUser;
  return { user, loading, error };
};
/*
export default withRouter(connect(null)(Signin));
const mapStateToProps = ({ authUser }) => {
	const { user, loading } = authUser;
	return { user, loading }
}
*/
export default withRouter(
  connect(
    mapStateToProps,
    {
      signInUserWithEmailPassword,
      userResentEmail,
      handleRegErrorForm
    }
  )(Signin)
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
  fontSize: "12px",
  color: "#ebedf2",
  caretColor: "black",
  height: 35,
};

const PasswordStyle = {
  borderBottom: "0.3px solid rgba(0,0,0,0.5)",
  borderRadius: 0,
  padding: 0,
  boxShadow: "none",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  fontWeight: "400",
  fontSize: "14px",
  color: "black",
  letterSpacing: "8px",
  caretColor: "black",
  height: 35,

};

const EmailStyle = {
  borderBottom: "0.3px solid rgba(0,0,0,0.5)",
  borderRadius: 0,
  padding: 0,
  boxShadow: "none",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  fontWeight: "400",
  fontSize: "14px",
  color: "black",
  caretColor: "black",
  height: 35,

};




// ipad size for width 768px
// mini 768px for sign up and placeholder

// less than or equal to 767px display only sign up