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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


import QueueAnim from "rc-queue-anim";

// app config
import AppConfig from "Constants/AppConfig";

// redux action
import { signInUserWithEmailPassword, userResentEmail, handleRegErrorForm} from "Actions";


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
      this.props.handleRegErrorForm('Please type your email address and password')
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
                <div className="col-sm-3 col-md-3 col-lg-3" />
                <div className="col-sm-4 col-md-6 col-lg-6">

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

                  <div className="session-body text-center" style={{borderRadius: 15, paddingLeft: '3rem', paddingRight: '3rem', }}>
                    <Form onSubmit={this.onUserLogin}>

                      <FormGroup className="has-wrapper">
                        <Input
                          type="email"
                          value={emailAddress}
                          style={emailAddress? EmailStyle : emptyField}
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
                      
                      {error != "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && 
                        <div style={{display:'flex', flexDirection:'column', marginBottom:'6rem'}}>
                          <FormGroup className="has-wrapper" style={{marginBottom:'0.5rem'}}>
                            <Input
                              value={password}
                              style={password? PasswordStyle : emptyField}
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
                              <i className="ti-eye" />
                            </span>
                          </FormGroup>

                          <div onClick={() => this.routeChange('forget')} style={{textAlign: 'right', color: AppConfig.themeColors.danger, fontSize: 14, fontWeight:'500'}}>Forget Password?</div>
                        </div>
                      }

                      {error != "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && 
                        <FormGroup className="mb-15">
                     
                          <Fab
                            className="text-white"
                            size="large"
                            style={{backgroundColor : AppConfig.themeColors.primary, marginBottom: '1.5rem'}}
                            type="submit"
                          >
                            <Icon>trending_flat</Icon>
                          </Fab>
                          

                          <div onClick={() => this.routeChange('register')} style={{display:'flex', flexDirection:'row', justifyContent:"center", alignItems:'center'}}>
                            <div style={{color: 'rgba(0,0,0,0.5)', fontWeight: 300, fontSize: 14}}>Not signed up yet?</div>
                            <div style={{color: "black", fontSize: 14, fontWeight:'500', marginLeft: 5}}>Sign Up</div>
                          </div>

           
                        </FormGroup>
                      }

                      {error == "LOGIN_FAILED_EMAIL_NOT_VERIFIED" && 
                        <FormGroup className="mb-15">
                          
                          <Fab
                            className="text-white"
                            size="large"
                            style={{backgroundColor : AppConfig.themeColors.primary, marginBottom: '1.5rem', marginTop: '2rem'}}
                            onClick={()=> this.resentVerificationEmail()}
                          >
                            <Icon>trending_flat</Icon>
                          </Fab>

                          <div onClick={() => this.routeChange('register')} style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center'}}>
                            <div style={{color: 'rgba(0,0,0,0.5)', fontWeight: 300, fontSize: 14}}>You have signed up with us before</div>
                            <div style={{color: "black", fontSize: 14, fontWeight:'400', marginLeft: 5}}>Resend verification email</div>
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
                      }

                    </Form>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3" />
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
    userResentEmail,
    handleRegErrorForm
  }
)(Signin));


const emptyField = {
  borderBottom: '0.3px solid rgba(0,0,0,0.5)', borderRadius: 0, padding: 0,
  boxShadow: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
  fontWeight: '300', fontSize: '16px', color : '#ebedf2',
}

const PasswordStyle = {
  borderBottom: '0.3px solid rgba(0,0,0,0.5)', borderRadius: 0, padding: 0,
  boxShadow: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
  fontWeight: '500', fontSize: '18px', color : 'black', letterSpacing: '8px'
}

const EmailStyle = {
  borderBottom: '0.3px solid rgba(0,0,0,0.5)', borderRadius: 0, padding: 0,
  boxShadow: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
  fontWeight: '500', fontSize: '18px', color : 'black',
}