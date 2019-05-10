import React, { Component } from "react";
//Page Req
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Scrollbars } from "react-custom-scrollbars";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";

import DrawerListCollapsible from "./ListComponent/DrawerListCollapsible";
import DrawerListItem from "./ListComponent/DrawerListItem";

// Sub Components
/* import { DashboardView, ReportView } from "./listData";
import ReportContent from "./ReportContent"; */

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: "100%",
    height: `calc(100vh - 200px)`,
    zIndex: -1,
    marginBottom: 20,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    //zIndex: theme.zIndex.drawer + 1,
    position: "absolute",
    width: `calc(100% - ${drawerWidth}px)`,
    zIndex: 90
  },
  drawerPaper: {
    zIndex: 90,
    position: "relative",
    height: "100%",
    width: drawerWidth
  },
  toolBar: { background: "#3c537b" },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: theme.spacing.unit * 2,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  }
});

class ReportDrawer extends Component {
  state = {
    view: "",
    reportState: { sales: false, leads: false, deals: false },
    reportComponent: ""
  };
  viewChange(view) {
    this.setState({ view: view, reportComponent: view });
    //action to change view component
  }
  openNestedReport(nestedList) {
    this.setState({
      reportState: {
        ...this.state.reportState,
        [nestedList]: !this.state.reportState[nestedList]
      }
    });
  }

  render() {
    const { classes, children } = this.props;
    const { view, reportState } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar className={classes.toolBar}>
              <Typography variant="h6" color="inherit" noWrap>
                {view}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader} />
            <Divider />
            <List subheader={<ListSubheader>All Reports</ListSubheader>}>
              <DrawerListCollapsible
                icon="zmdi-case"
                title="Deals"
                state={reportState.deals}
                openNested={() => this.openNestedReport("deals")}
              >
                <DrawerListItem
                  onClickListItem={() => this.viewChange("Deals Report")}
                  title="deals report"
                  secondary
                />
              </DrawerListCollapsible>
              <DrawerListCollapsible
                icon="zmdi-account-circle"
                title="Leads"
                state={reportState.leads}
                openNested={() => this.openNestedReport("leads")}
              >
                <DrawerListItem
                  onClickListItem={() => this.viewChange("Leads Report")}
                  title="leads report"
                  secondary
                />
              </DrawerListCollapsible>
              <DrawerListCollapsible
                icon="zmdi-money-box"
                title="Sales"
                state={reportState.sales}
                openNested={() => this.openNestedReport("sales")}
              >
                <DrawerListItem
                  onClickListItem={() => this.viewChange("Sales Report")}
                  title="Invoice Report"
                  secondary
                />
                <DrawerListItem
                  onClickListItem={() => this.viewChange("Sales Report")}
                  title="Total Income"
                  secondary
                />
                <DrawerListItem
                  onClickListItem={() => this.viewChange("Sales Report")}
                  title="Proposal Report"
                  secondary
                />
                <DrawerListItem
                  onClickListItem={() => this.viewChange("Sales Report")}
                  title="Total Value of Customers"
                  secondary
                />
              </DrawerListCollapsible>
              <DrawerListItem
                onClickListItem={() => this.viewChange("Individual Report")}
                title="Individual"
                icon="zmdi-account"
              />
            </List>
          </Drawer>
          <main className={classes.content}>
            <Scrollbars
              className="rct-scroll"
              autoHide
              ref="chatScroll"
              style={{ height: "calc(100vh - 180px)" }}
            >
              {this.state.reportComponent}
            </Scrollbars>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ReportDrawer);
