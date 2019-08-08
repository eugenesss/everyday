import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, withRouter } from "react-router-dom";

import navLinks from "./Menu/NavLinks";

// Right Nav
import Notifications from "Components/Header/RightNav/Notifications";
import UserDrawer from "Components/Header/RightNav/UserDrawer";

// Menu
import MainMenu from "./Menu/MainMenu";
import SubMenu from "./Menu/SubMenu";

function getChildRoute(location) {
  const currentRoute = navLinks.find(link =>
    location.pathname.includes(link.baseUrl)
  );
  return currentRoute ? currentRoute.child_routes : [];
}
function getActiveSubMenuKey(currentLocation, childRoutes) {
  for (let i = 0; i < childRoutes.length; i++) {
    if (childRoutes[i].path == currentLocation) return i;
  }
}

function Header(props) {
  const { location } = props;
  const childRoutes = getChildRoute(location);
  const activeSubMenuKey = getActiveSubMenuKey(location.pathname, childRoutes);
  const [subMenuKey, setSubMenuKey] = React.useState(activeSubMenuKey);

  function handleChange(e, newValue) {
    setSubMenuKey(newValue);
  }
  function changeMainLink() {
    setSubMenuKey(0);
  }

  return (
    <React.Fragment>
      <AppBar position="static" className="rct-header">
        <Toolbar className="d-flex justify-content-between w-100">
          <div className="d-flex">
            <div className="site-logo">
              <Link to="/" className="logo-mini">
                <img
                  src={require("Assets/img/appLogo_yellow.png")}
                  alt="site logo"
                  width="120"
                />
              </Link>
            </div>
            <MainMenu
              resetSubLink={changeMainLink}
              location={location}
              navLinks={navLinks}
            />
          </div>
          <ul className="navbar-right app-bar-right list-inline mb-0">
            <Notifications />
            <UserDrawer />
          </ul>
        </Toolbar>
      </AppBar>
      {childRoutes.length > 0 && (
        <SubMenu
          subMenuKey={subMenuKey}
          handleChange={handleChange}
          childRoutes={childRoutes}
          active={activeSubMenuKey}
        />
      )}
    </React.Fragment>
  );
}

export default withRouter(Header);
