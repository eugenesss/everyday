/**
 * App Header
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import screenfull from "screenfull";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

// components
import QuickLinks from "./QuickLinks";
import QuickAdd from "./QuickAdd";
import Notifications from "./Notifications";
import UserBlock from "./UserBlock";
// import ToDo from "./ToDo";
import MiniCalendar from "./MiniCalendar";

class Header extends Component {
  state = {
    customizer: false,
    isMobileSearchFormVisible: false
  };

  // toggle screen full
  toggleScreenFull() {
    screenfull.toggle();
  }

  render() {
    return (
      <AppBar position="static" className="rct-header">
        <Toolbar className="d-flex justify-content-between w-100 pl-0">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <Link to="/" className="logo-mini">
                <img
                  src={require("Assets/img/appLogo_yellow.png")}
                  className="mr-15"
                  alt="site logo"
                  width="120"
                />
              </Link>
            </div>
            <ul className="list-inline mb-0 navbar-left">
              <QuickAdd />
              <QuickLinks />
            </ul>
          </div>
          <ul className="navbar-right list-inline mb-0">
            <Notifications />
            {/* <ToDo /> */}
            <MiniCalendar />
            <li className="list-inline-item">
              <Tooltip title="Settings" placement="bottom">
                <IconButton
                  className="text-white"
                  aria-label="settings"
                  href="/app/settings"
                >
                  <i className="zmdi zmdi-settings" />
                </IconButton>
              </Tooltip>
            </li>
            <UserBlock />
            <li className="list-inline-item">
              <Tooltip title="Full Screen" placement="bottom">
                <IconButton
                  className="text-white"
                  aria-label="fullScreen"
                  onClick={() => this.toggleScreenFull()}
                >
                  <i className="zmdi zmdi-crop-free" />
                </IconButton>
              </Tooltip>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
};

export default withRouter(connect(mapStateToProps)(Header));
