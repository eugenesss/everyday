/**
 * Notification Component
 */
import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Badge } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import SingleNotification from "Components/Everyday/Notification/SingleNotification";

class Notifications extends Component {
  state = {
    notifications: null,
    shake: false,
    newNotifications: 0
  };

  componentDidMount() {
    //this.getNotifications();
  }

  render() {
    const { classes } = this.props;
    const { notifications, newNotifications, shake } = this.state;
    return (
      <UncontrolledDropdown
        nav
        className="list-inline-item notification-dropdown"
      >
        <DropdownToggle nav className="p-0">
          <Tooltip title="Notifications" placement="bottom">
            <IconButton className={shake && "shake"} aria-label="bell">
              <i
                className={
                  "zmdi zmdi-notifications-active text-white " + classes.icon
                }
              />
              {newNotifications > 0 && (
                <Badge
                  color="danger"
                  className="badge-xs badge-top-right rct-notify"
                >
                  {newNotifications}
                </Badge>
              )}
            </IconButton>
          </Tooltip>
        </DropdownToggle>
        <DropdownMenu right>
          <div className="dropdown-content">
            <div className="dropdown-top d-flex justify-content-between rounded-top bg-primary">
              <span className="text-white font-weight-bold">Notifications</span>
              {newNotifications > 0 && (
                <Badge color="warning">{newNotifications} NEW</Badge>
              )}
            </div>
            <Scrollbars
              className="rct-scroll"
              autoHeight
              autoHeightMin={300}
              autoHeightMax={300}
            >
              <ul className="list-unstyled dropdown-list">
                {notifications &&
                  notifications.map((notification, key) => (
                    <SingleNotification key={key} notification={notification} />
                  ))}
              </ul>
            </Scrollbars>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default Notifications;
