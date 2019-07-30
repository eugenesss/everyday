import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import navLinks from "./Menu/NavLinks";

// Right Nav
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import QuickAdd from "./RightNav/QuickAdd";
import { Settings } from "@material-ui/icons";
import UserBlock from "./RightNav/UserBlock";
import MiniCalendar from "./RightNav/MiniCalendar";

// Menu
import MainMenu from "./Menu/MainNav";
import SubNav from "./Menu/SubNav";

function NavBar(props) {
  function getChildRoute() {
    const currentRoute = navLinks.find(link =>
      props.location.pathname.includes(link.baseUrl)
    );
    return currentRoute ? currentRoute.child_routes : [];
  }
  const { location } = props;
  return (
    <React.Fragment>
      <AppBar position="static" className="rct-header">
        <Toolbar className="d-flex justify-content-between w-100">
          <div className="site-logo">
            <Link to="/" className="logo-mini">
              <img
                src={require("Assets/img/appLogo_yellow.png")}
                alt="site logo"
                width="120"
              />
            </Link>
          </div>
          <MainMenu location={location} navLinks={navLinks} />
          <ul className="navbar-right list-inline mb-0">
            {/* <QuickAdd />
            <MiniCalendar /> */}
            <li className="list-inline-item">
              <Tooltip title="Settings" placement="bottom">
                <Link to="/app/settings">
                  <IconButton aria-label="settings">
                    <Settings style={{ fontSize: "20px" }} />
                  </IconButton>
                </Link>
              </Tooltip>
            </li>
            <UserBlock />
          </ul>
        </Toolbar>
      </AppBar>
      <SubNav childRoutes={getChildRoute()} />
    </React.Fragment>
  );
}

export default withRouter(NavBar);
