import React from "react";
import { withRouter } from "react-router-dom";
import IntlMessages from "Util/IntlMessages";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppConfig from "Constants/AppConfig";

const StyledTabs = withStyles({
  flexContainer: {
    justifyContent: "center"
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 30,
      width: "100%",
      backgroundColor: AppConfig.themeColors.primary
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    color: "#a7a7a7",
    fontSize: theme.typography.pxToRem(14),
    "&:focus": {
      opacity: 1
    },
    "&$selected": {
      color: AppConfig.themeColors.primary
    }
  },
  selected: {}
}))(props => <Tab disableRipple disableFocusRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: AppConfig.themeColors.white,
    boxShadow: "0 2px 0px 0 rgba(0, 0, 0, 0.09)"
  },
  typography: {
    padding: theme.spacing(3)
  }
}));

function SubMenu(props) {
  const classes = useStyles();
  const { childRoutes, history, subMenuKey, handleChange } = props;

  return (
    <AppBar className={classes.root} position="static">
      <StyledTabs value={subMenuKey} onChange={handleChange}>
        {childRoutes.length > 0 &&
          childRoutes.map((link, index) => (
            <StyledTab
              key={index}
              label={<IntlMessages id={link.title} />}
              onClick={() => history.push(link.path)}
            />
          ))}
      </StyledTabs>
    </AppBar>
  );
}

export default withRouter(SubMenu);
