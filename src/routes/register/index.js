import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";


// app config
import { appLogo } from "Constants/AppConfig";
import RegisterSteps from "./Components/RegisterSteps";

class RegisterPage extends Component {


  routeChange = () => {
    let path = `/login`;
    this.props.history.push(path);
  }



  render() {
    const { loading, success } = this.props;

    // const loading = true
    // console.log("loading", loading)
    // console.log("success", success)

    return (

        <div className="login_index">

            {/* {loading && <RctPageLoader />} */}

                <div className="register_placeholder" style={{flexDirection:'column', justifyContent:'center'}}>
                  {/* Placeholder Image */}
                  {/* <video src={VideoSource} width="600" height="300" controls="controls" autoplay="true" type="video/mp4"/> */}
                  <img
                    src={require("Assets/img/appSignUp_yellow.png")}
                    alt="site logo"
                    style={{
                        height: '35%',
                        marginBottom: 25,
                    }}
                  />
             
                  <h2 className="text-center">
                      One Time Setup 
                  </h2>
                  <p className="session-head fw-light text-center mb-30 fs-14 text-muted">
                    Digitalise your workprocesses to cloud
                    <br />
                    Accessable anywhere and anytime
                  </p>

                </div>


                {/* {loading && 
                  <div className="register_module">
                    <div style={{overflow:'auto', width: '100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                      <Link to="/" className="logo-mini" style={{marginBottom: 25}}>
                        <img
                          src={require("Assets/img/appLogo_orig_light.png")}
                          alt="site logo"
                          width="150"
                        />
                      </Link>
                      <RctPageLoader/>
                    </div>
                  </div>
                } */}

                <div className="register_module">
                    <div style={{overflow:'auto', width: '100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                      <Link to="/" className="logo-mini">
                        <img
                          src={require("Assets/img/appLogo_orig_light.png")}
                          alt="site logo"
                          width="150"
                        />
                      </Link>

                      <p className="session-head fw-light text-center mb-30 fs-14 text-muted" style={{margin: 5}}>
                        Work-life has never been better
                      </p>

                      <RegisterSteps
                        history={this.routeChange}
                      />
                    </div>
                </div>
                

        </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { register } = authUser;
  const { loading, success } = register;
  return { loading, success };
};

export default connect(mapStateToProps)(RegisterPage);

  {/* <div className="session-body" style={{ padding: "2% 4%" }}>
  </div> */}

  // <h1 className="mb-20">
  //                     <Link to="/">
  //                       <img
  //                         src={AppConfig.appLogo}
  //                         alt="session-logo"
  //                         className="img-fluid"
  //                         width="180"
  //                       />
  //                     </Link>
  //                   </h1>