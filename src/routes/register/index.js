import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

import QueueAnim from "rc-queue-anim";

// app config
import AppConfig from "Constants/AppConfig";
import RegisterSteps from "./Components/RegisterSteps";

class RegisterPage extends Component {


  routeChange = () => {
    let path = `/login`;
    this.props.history.push(path);
  }



  render() {
    const { loading } = this.props;

    // const loading = true
    console.log(loading)
    return (

        <div className="login_index">

            {/* {loading && <RctPageLoader />} */}

                <div className="register_placeholder">
                  {/* Placeholder Image */}
                  {/* <video src={VideoSource} width="600" height="300" controls="controls" autoplay="true" type="video/mp4"/> */}
                  <video 
                    src='https://ak5.picdn.net/shutterstock/videos/1015322305/preview/stock-footage-creative-business-team-having-meeting-at-the-office-successful-deal-business-partners-concluding.mp4'
                    loop autoPlay type="video/mp4"
                    style={{
                      height: '100%',
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                    }}
                  />
                </div>

                {loading && 
                  <div className="register_module">
                      <div style={{overflow:'auto', width: '100%'}}>
                        <RctPageLoader />
                      </div>
                  </div>
                }

                {!loading && 
                  <div className="register_module">
                    <div style={{overflow:'auto', width: '100%'}}>
                      <RegisterSteps
                        history={this.routeChange}
                      />
                    </div>
                  </div>
                }

        </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { register } = authUser;
  const { loading } = register;
  return { loading };
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