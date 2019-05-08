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

class DrawerWrapper extends Component {
  state = {
    anchor: "left",
    view: "",
    reportState: { deal: false }
  };
  toggleViewChange(view) {
    this.setState({ view: view });
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
    const { classes } = this.props;
    const { anchor, view } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar className="bg-warning">
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
            anchor={anchor}
          >
            <div className={classes.drawerHeader} />
            <Divider />
            {/* <DashboardView toggleChange={this.toggleViewChange.bind(this)} />
            <Divider />
            <ReportView
              openNestedReport={this.openNestedReport.bind(this)}
              reportState={this.state.reportState}
              toggleChange={this.toggleViewChange.bind(this)}
            /> */}
          </Drawer>
          <main className={classes.content}>
            <Scrollbars
              className="rct-scroll"
              autoHide
              ref="chatScroll"
              style={{ height: "calc(100vh - 180px)" }}
            >
              {/*  <ReportContent view={view} /> */}
            </Scrollbars>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerWrapper);
