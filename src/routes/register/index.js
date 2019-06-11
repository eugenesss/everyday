import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import QueueAnim from "rc-queue-anim";

// app config
import AppConfig from "Constants/AppConfig";

import RegisterSteps from "./Components/RegisterSteps";

class RegisterPage extends Component {
  render() {
    const { loading } = this.props;
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper">
          {loading && <LinearProgress />}
          <div className="session-inner-wrapper">
            <div className="container">
              <div className="row row-eq-height">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="session-head mb-30 text-center">
                    <h1 className="mb-20">
                      <Link to="/">
                        <img
                          src={AppConfig.appLogo}
                          alt="session-logo"
                          className="img-fluid"
                          width="180"
                        />
                      </Link>
                    </h1>
                    <h2 className="font-weight-bold text-white">
                      Get Started with{" "}
                      <span className="text-everyday-sec">
                        {AppConfig.brandName}
                      </span>
                    </h2>
                    <p className="mb-0 text-white">
                      Most powerful CRM in SG, some say Batam
                    </p>
                  </div>
                  <div className="session-body" style={{ padding: "2% 4%" }}>
                    <RegisterSteps />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
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
