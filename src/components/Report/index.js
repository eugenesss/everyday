import React, { Component } from "react";
import { connect } from "react-redux";

//Page Req
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Scrollbars } from "react-custom-scrollbars";

import { AllReports } from "./ListData";
import ReportViewComponent from "./ReportViewComponent";
import { changeReportView, openNestedView } from "Actions";

import { DateRangePicker } from "react-dates";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: "100%",
    height: `calc(100vh - 100px)`,
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
  drawerHeader: { ...theme.mixins.toolbar, background: "#3c537b" },
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
  render() {
    const { classes } = this.props;
    const { title, nestedView, componentToRender } = this.props.reportState;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar className={classes.toolBar}>
              <Typography variant="h6" color="inherit" noWrap>
                {title}
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
            <AllReports
              nestedView={nestedView}
              openNestedView={this.props.openNestedView}
              changeReportView={this.props.changeReportView}
            />
          </Drawer>
          <main className={classes.content}>
            <Scrollbars
              className="rct-scroll"
              autoHide
              ref="chatScroll"
              style={{ height: "calc(100vh - 160px)" }}
            >
              <div className="p-20">
                <ReportViewComponent componentToRender={componentToRender} />
              </div>
            </Scrollbars>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reportState }) => {
  return { reportState };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { changeReportView, openNestedView }
  )(ReportDrawer)
);
