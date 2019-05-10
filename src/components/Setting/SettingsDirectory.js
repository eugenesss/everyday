import React, { Component } from "react";
import { connect } from "react-redux";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    height: `calc(100vh - 200px)`,
    overflow: "hidden"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class SettingsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        openGen: true,
        openUser: false,
        openAcc: false,
        openCron: false,
    }
  }
  
  handleClick = (item) => {
    switch (item) {
      case "gen":
        this.setState(state => ({ openGen: !state.openGen }));
        break;
      case "user":
        this.setState(state => ({ openUser: !state.openUser }));
        break;
      case "acc":
        this.setState(state => ({ openAcc: !state.openAcc }));
        break;
      case "cron":
        this.setState(state => ({ openCron: !state.openCron }));
        break;
    }
  };

  handleClickItem(path) {
    this.props.history.push(path)
  }

  render() {
    const { classes, location } = this.props;
    return (
      <List
        component="nav"
        className={classes.root}
      >
        <ListItem button onClick={() => this.handleClick("gen")}>
          <ListItemText inset primary={"General"} />
          {this.state.openGen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openGen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/general/personal-information')} selected={location.pathname === '/app/settings/general/personal-information'}>
              <ListItemText inset secondary="Personal Information" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/general/company-details')} selected={location.pathname === '/app/settings/general/company-details'}>
              <ListItemText inset secondary="Company Details" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => this.handleClick("user")}>
          <ListItemText inset primary="User & Controls" />
          {this.state.openUser ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openUser} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/users-and-controls/users')} selected={location.pathname === '/app/settings/users-and-controls/users'}>
              <ListItemText inset secondary="Users" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/users-and-controls/roles-and-permissions')} selected={location.pathname === '/app/settings/users-and-controls/roles-and-permissions'}>
              <ListItemText inset secondary="Roles & Permissions" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => this.handleClick("acc")}>
          <ListItemText inset primary="Accounting" />
          {this.state.openAcc ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openAcc} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/general')} selected={location.pathname === '/app/settings/accounting/general'}>
              <ListItemText inset secondary="General" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/quotation')} selected={location.pathname === '/app/settings/accounting/quotation'}>
              <ListItemText inset secondary="Quotation" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/invoice')} selected={location.pathname === '/app/settings/accounting/invoice'}>
              <ListItemText inset secondary="Invoice" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/credit-note')} selected={location.pathname === '/app/settings/accounting/credit-note'}>
              <ListItemText inset secondary="Credit Note" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => this.handleClick("cron")}>
          <ListItemText inset primary="Cron Job" />
          {this.state.openCron ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openCron} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/cron-job/lead-reminders')} selected={location.pathname === '/app/settings/cron-job/lead-reminders'}>
              <ListItemText inset secondary="Lead Reminders" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/cron-job/quotation-reminders')} selected={location.pathname === '/app/settings/cron-job/quotation-reminders'}>
              <ListItemText inset secondary="Quotation Reminders" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    )
  }
}

SettingsDirectory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  connect( null ) (
    withStyles(styles)
    (SettingsDirectory)
  )
);
