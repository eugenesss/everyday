import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    padding: 10
  },
  nested: {
    paddingLeft: "0 !important"
  },
  listItem: {
    paddingLeft: "0 !important",
    paddingRight: 0
  },
  paper: {
    marginBottom: 24
  }
});

class SettingsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: true,
      user: true,
      crm: true,
      accounting: true,
      reminder: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = item => {
    this.setState({ [item]: !this.state[item] });
  };

  handleClickItem(path) {
    this.props.history.push(path);
  }

  render() {
    const { classes, location } = this.props;
    return (
      <Paper className={classes.paper}>
        <Scrollbars className="rct-scroll" autoHeight autoHeightMin={"100vh"}>
          <List component="nav" className={classes.root}>
            <ListItem button onClick={() => this.handleClick("general")}>
              <ListItemText
                inset
                primary={"General"}
                className={classes.listItem}
              />
              {this.state.general ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.general} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem("/app/settings/general/my-profile")
                  }
                  selected={
                    location.pathname === "/app/settings/general/my-profile"
                  }
                >
                  <ListItemText inset secondary={"My Profile"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem(
                      "/app/settings/general/company-details"
                    )
                  }
                  selected={
                    location.pathname ===
                    "/app/settings/general/company-details"
                  }
                >
                  <ListItemText inset secondary={"Company Details"} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => this.handleClick("user")}>
              <ListItemText
                inset
                primary={"User & Controls"}
                className={classes.listItem}
              />
              {this.state.user ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.user} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem(
                      "/app/settings/users-and-controls/users"
                    )
                  }
                  selected={
                    location.pathname ===
                    "/app/settings/users-and-controls/users"
                  }
                >
                  <ListItemText inset secondary={"Users"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem(
                      "/app/settings/users-and-controls/roles-and-permissions"
                    )
                  }
                  selected={
                    location.pathname ===
                    "/app/settings/users-and-controls/roles-and-permissions"
                  }
                >
                  <ListItemText inset secondary={"Roles & Permissions"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem(
                      "/app/settings/users-and-controls/groups"
                    )
                  }
                  selected={
                    location.pathname ===
                    "/app/settings/users-and-controls/groups"
                  }
                >
                  <ListItemText inset secondary={"Groups"} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => this.handleClick("crm")}>
              <ListItemText
                inset
                primary={"CRM"}
                className={classes.listItem}
              />
              {this.state.crm ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.crm} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() => this.handleClickItem("/app/settings/crm/team")}
                  selected={location.pathname === "/app/settings/crm/team"}
                >
                  <ListItemText inset secondary={"Team"} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => this.handleClick("accounting")}>
              <ListItemText
                inset
                primary={"Accounting"}
                className={classes.listItem}
              />
              {this.state.accounting ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.accounting} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem("/app/settings/accounting/general")
                  }
                  selected={
                    location.pathname === "/app/settings/accounting/general"
                  }
                >
                  <ListItemText inset secondary={"General"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem("/app/settings/accounting/quotation")
                  }
                  selected={
                    location.pathname === "/app/settings/accounting/quotation"
                  }
                >
                  <ListItemText inset secondary={"Quotation"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem("/app/settings/accounting/invoice")
                  }
                  selected={
                    location.pathname === "/app/settings/accounting/invoice"
                  }
                >
                  <ListItemText inset secondary={"Invoice"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem("/app/settings/accounting/credit-note")
                  }
                  selected={
                    location.pathname === "/app/settings/accounting/credit-note"
                  }
                >
                  <ListItemText inset secondary={"Credit Note"} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => this.handleClick("reminder")}>
              <ListItemText
                inset
                primary={"Reminders"}
                className={classes.listItem}
              />
              {this.state.reminder ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.reminder} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem(
                      "/app/settings/reminders/lead-reminders"
                    )
                  }
                  selected={
                    location.pathname ===
                    "/app/settings/reminders/lead-reminders"
                  }
                >
                  <ListItemText inset secondary={"Lead Reminders"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() =>
                    this.handleClickItem(
                      "/app/settings/reminders/quotation-reminders"
                    )
                  }
                  selected={
                    location.pathname ===
                    "/app/settings/reminders/quotation-reminders"
                  }
                >
                  <ListItemText inset secondary={"Quotation Reminders"} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Scrollbars>
      </Paper>
    );
  }
}

SettingsDirectory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(connect(null)(withStyles(styles)(SettingsDirectory)));
