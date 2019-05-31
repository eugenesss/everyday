/**
 * App Header
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

// components
import QuickLinks from "./QuickLinks";
import QuickAdd from "./QuickAdd";
import Notifications from "./Notifications";
import UserBlock from "./UserBlock";
// import ToDo from "./ToDo";
import MiniCalendar from "./MiniCalendar";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  icon: {
    height: 24,
    width: 24
  },
  calendar: {
    width: "auto"
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
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
            {/* <li className="list-inline-item">
              <Tooltip title="Chat" placement="bottom">
                <IconButton
                  className="text-white"
                  aria-label="chat"
                  href="/app/chat"
                >
                  <i className="zmdi zmdi-comments" />
                </IconButton>
              </Tooltip>
            </li> */}
            <Notifications classes={classes} />
            <MiniCalendar classes={classes} />
            <li className="list-inline-item">
              <Tooltip title="Settings" placement="bottom">
                <IconButton
                  className="text-white"
                  aria-label="settings"
                  href="/app/settings"
                >
                  <i className={"zmdi zmdi-settings " + classes.icon} />
                </IconButton>
              </Tooltip>
            </li>
            <UserBlock classes={classes} />
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Header)));
