




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
import { signInUserWithEmailPassword } from "Actions";

class forgetpassword extends Component {

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  state = {
    emailAddress: "",
  };

  /**
   * On User Login
   */
  
  routeChange(element) {
    let path = `/login`;
    this.props.history.push(path);
  }



  render() {
    const { email } = this.state;
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
                    style={{ padding: "5% 5%" }}
                  >
                
                    <div style={{display:'flex', flex: 1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <h1>Your email has been verified!</h1>
                        <p>Please click below to login into your everyday!</p>
                        <Button
                          color="primary"
                          className="btn-block text-white w-100"
                          variant="contained"
                          size="large"
                          type="submit"
                          // disabled={!email && !password}
                          onClick={()=> this.routeChange('forget')}
                        >
                          Log In Now
                        </Button>
                    </div>

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
    signInUserWithEmailPassword
  }
)(forgetpassword));

