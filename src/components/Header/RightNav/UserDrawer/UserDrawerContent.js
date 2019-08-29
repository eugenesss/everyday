import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { ExitToApp, Settings } from "@material-ui/icons";

// Logout
import { logoutUser } from "Actions";
import Auth from "../../../../Auth/Auth";

// Calendar widget
import Calendar from "Components/Widgets/Calendar/CalendarLayout";

function UserDrawerContent(props) {
  const toggleDrawer = props.toggleDrawer;
  const { user, history } = props;
  function toSettingPage() {
    history.push("/app/settings");
  }
  return (
    <div className="user-drawer" role="presentation" onKeyDown={toggleDrawer()}>
      <div className="row top-drawer">
        <div className="col-12">
          <div className="media">
            <div className="media-left mr-25">
              <img
                src={require("Assets/avatars/user-1.jpg")}
                className="img-fluid rounded-circle"
                alt="user profile"
                width="70"
              />
            </div>
            <div className="media-body my-auto">
              <h4 className="mb-5">Andre Hicks</h4>
              <span className="text-muted fs-14 mb-0 d-block">
                Sr. Develoepr @Oracle
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="row user-drawer-content">
        <Calendar />
      </div>

      <div className="drawer-footer">
        <hr />
        <div className="drawer-actions">
          <Button
            variant="text"
            aria-label="settings"
            onClick={() => toSettingPage()}
          >
            <Settings />
            Settings
          </Button>
          <Button
            aria-label="logout"
            onClick={() => {
              const token = new Auth().retrieveAccessToken();
              props.logoutUser(token);
            }}
          >
            <ExitToApp />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(UserDrawerContent)
);
