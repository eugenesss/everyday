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
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


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
      <div className="login_index">
          {loading && <LinearProgress />}
      
      {/*  
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
                          style={emailAddress? EmailStyle : emptyField}
                          className="has-input input-lg"
                          placeholder="Enter Email Address"
                          onChange={event => {
                            this.setState({ emailAddress: event.target.value })
                            this.setState({emailValidated: EmailValidator(event.target.value)})
                          }}
                          valid={ this.state.emailValidated === 'has-success' }
                          invalid={ this.state.emailValidated === 'has-danger' }
                        />
                        // {/* <span className="has-icon">
                        //   <i className="ti-email" />
                        // </span> *
                        <FormFeedback >Oh noes! You need to input a valid email addresss!</FormFeedback>
                        <FormFeedback valid>We will look for your delicious email!</FormFeedback>
                      </FormGroup>
                  
                      <Fab
                        className="text-white"
                        size="large"
                        style={{backgroundColor : AppConfig.themeColors.primary, marginBottom: '1.5rem', marginTop: '3rem'}}
                        onClick={()=> this.resetPassword()}
                      >
                        <Icon>trending_flat</Icon>
                      </Fab>
                      
                      <div onClick={() => this.routeChange('register')} style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center'}}>
                        <div style={{color: 'rgba(0,0,0,0.5)', fontWeight: 300, fontSize: 14}}>Let us know your email address</div>
                        <div style={{color: 'rgba(0,0,0,0.5)', fontWeight: 300, fontSize: 14}}>We will send a verification email to you</div>
                      </div>
                    
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2" />
              </div>
            </div>
          </div>
      
        */}        

          <div className="login_module">
            <div className="session-body text-center" style={{paddingLeft: 40, paddingRight: 40, width: '100%', overflow: 'auto'}} >

                {/* <h2 className="font-weight-bold text-white">
                  Sign in to {AppConfig.brandName}
                </h2> */}
                <p className="mb-0 text-black" style={{textAlign:'left', paddingBottom: 10, fontSize: 20}}>
                  Lost your account?<br/>We've got you covered
                </p>
                <p className="session-head mb-0 text-black" style={{textAlign:'left', fontWeight: "300", paddingBottom: 20, fontSize: 12, color: 'rgba(0,0,0,0.4)'}}>
                  Enter your email address<br/>and you will receive a reset password link
                </p>

                <FormGroup className="has-wrapper">
                    <Input
                      type="email"
                      value={emailAddress}
                      name="emailAddress"
                      id="emailAddress"
                      style={emailAddress? EmailStyle : emptyField}
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
            
                <div style={{flex: 1, marginTop: 10, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly', display: 'flex'}}>
              
                  <Fab
                    variant="extended"
                    className="text-white"
                    size="medium"
                    style={{
                      backgroundColor: AppConfig.themeColors.primary,
                      marginBottom: "1.5rem",
                    }}
                    // type="submit"
                    onClick={()=> {
                      let path = `/login`;
                      this.props.history.push(path);
                    }}
                  >
                    <span style={{width: 100,}}>Back to login</span>
                  </Fab>

                  <Fab
                    variant="extended"
                    className="text-white"
                    size="medium"
                    style={{
                      backgroundColor: AppConfig.themeColors.primary,
                      marginBottom: "1.5rem",
                    }}
                    // type="submit"
                    // onClick={()=> console.log('recover email')}
                    onClick={()=> this.resetPassword()}
                  >
                    <span style={{width: 100,}}>Recover email</span>
                  </Fab>
  
                </div>

            </div>
          </div>

          <div className="login_placeholder">
                  <video 
                    src='https://ak5.picdn.net/shutterstock/videos/1015322305/preview/stock-footage-creative-business-team-having-meeting-at-the-office-successful-deal-business-partners-concluding.mp4'
                    loop autoPlay type="video/mp4"
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
                        Goodbye to papers
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

export default withRouter(connect(
  mapStateToProps,
  {
    userResetPassword, handleRegErrorForm
  }
)(forgetpassword));


const emptyField = {
  borderBottom: '0.3px solid rgba(0,0,0,0.5)', borderRadius: 0, padding: 0,
  boxShadow: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
  fontWeight: '300', fontSize: '16px', color : '#ebedf2',
}

const EmailStyle = {
  borderBottom: '0.3px solid rgba(0,0,0,0.5)', borderRadius: 0, padding: 0,
  boxShadow: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
  fontWeight: '500', fontSize: '18px', color : 'black',
}