/**
 * Login Page
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, withRouter, } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import QueueAnim from "rc-queue-anim";

// app config
import AppConfig from "Constants/AppConfig";

// redux action
import { signInUserWithEmailPassword, userResentEmail} from "Actions";

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
    }
  };


  routeChange(element) {
    let path = ""
    switch (element) {
      case "register":
        path = `/register`;
        this.props.history.push(path);
        break

      case "forget":
        path = `/forgetpassword`;
        this.props.history.push(path);
        break
      default:break
    }
  }


  resentVerificationEmail = () => {
    this.setState({emailAddress: "",password: ""})
    this.props.userResentEmail(this.props.user)
  }

  render() {
    const { emailAddress, password } = this.state;
    const { loading, error } = this.props;

  
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
                    <Form onSubmit={this.onUserLogin}>
                      <FormGroup className="has-wrapper">
                        <Input
                          type="email"
                          value={emailAddress}
                          name="emailAddress"
                          id="emailAddress"
                          className="has-input input-lg"
                          placeholder="Enter Email Address"
                          onChange={event =>
                            this.setState({ emailAddress: event.target.value })
                          }
                        />
                        <span className="has-icon">
                          <i className="ti-email" />
                        </span>
                      </FormGroup>
                      
                      {error != "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && 
                        <FormGroup className="has-wrapper">
                          <Input
                            value={password}
                            type="Password"
                            name="password"
                            id="password"
                            className="has-input input-lg"
                            placeholder="Password"
                            onChange={event =>
                              this.setState({ password: event.target.value })
                            }
                          />
                          <span className="has-icon">
                            <i className="ti-lock" />
                          </span>
                        </FormGroup>
                      }

                      {error != "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && 
                        <FormGroup className="mb-15">
                          <Button
                            color="primary"
                            className="btn-block text-white w-100"
                            variant="contained"
                            size="large"
                            disabled={!emailAddress && !password}
                            type="submit"
                          >
                            Sign In
                          </Button>

                          <Button
                            color="primary"
                            className="btn-block text-white w-100"
                            variant="contained"
                            size="large"
                            type="submit"
                            // disabled={!email && !password}
                            onClick={()=> this.routeChange('register')}
                          >
                            Create An Account Here
                          </Button>

                          <Button
                            color="secondary"
                            className="btn-block text-white w-100"
                            variant="contained"
                            size="large"
                            type="submit"
                            // disabled={!email && !password}
                            onClick={()=> this.routeChange('forget')}
                          >
                            Forgot Password
                          </Button>
                        </FormGroup>
                      }

                      {error == "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && 
                        <FormGroup className="mb-15">
                          
                          <Button
                            color="primary"
                            className="btn-block text-white w-100"
                            variant="contained"
                            size="large"
                            onClick={()=> this.resentVerificationEmail()}
                          >
                            Resend verification email
                          </Button>

                        </FormGroup>
                      }

                    </Form>
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
  const { user, loading, error } = authUser;
  return { user, loading , error};
};
/*
export default withRouter(connect(null)(Signin));
const mapStateToProps = ({ authUser }) => {
	const { user, loading } = authUser;
	return { user, loading }
}
*/
export default withRouter(connect(
  mapStateToProps,
  {
    signInUserWithEmailPassword,
    userResentEmail
  }
)(Signin));
