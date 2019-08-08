import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { ExitToApp, Close, Settings } from "@material-ui/icons";

// Logout
import { logoutUser } from "Actions";
import Auth from "../../../../Auth/Auth";
import Calendar from '../../../Widgets/Calendar/CalendarLayout'
const useStyles = makeStyles({
  list: {
    padding: "20px 40px"
  }
});

function UserDrawerContent(props) {
  const classes = useStyles();
  const toggleDrawer = props.toggleDrawer;
  const { user } = props;
  return (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer()}
    >
      <div className="row">
        <div className="col-12 text-right">
          <div>
            <Tooltip title="Logout" placement="bottom">
              <IconButton
                aria-label="logout"
                className="ml-10"
                onClick={() => {
                  const token = new Auth().retrieveAccessToken();
                  props.logoutUser(token);
                }}
              >
                <ExitToApp style={{ fontSize: "20px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings" placement="bottom">
              <Link to="/app/settings">
                <IconButton
                  aria-label="settings"
                  className="ml-10"
                  onClick={toggleDrawer()}
                >
                  <Settings style={{ fontSize: "20px" }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Close" placement="bottom">
              <IconButton
                aria-label="close"
                className="ml-10"
                onClick={toggleDrawer()}
              >
                <Close style={{ fontSize: "20px" }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="row mt-30">
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


      <div className="row mt-30">
        {/* <div className="col-12">
          <p className="text-muted fw-300">Your Calendar</p>
        </div> */}

        <Calendar/>
      </div>
      {/* <div className="row mt-30">
        <div className="col-12">
          <p className="text-muted fw-300">Your Upcoming Events</p>



        </div>
      </div> */}



    </div>
  );
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(UserDrawerContent);
