import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column"
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const styledBy = (property, mapping) => props => mapping[props[property]];
const MyTab = withStyles({
  root: {
    padding: "2.7rem 1rem",
    minHeight: "100px"
  },
  labelIcon: {
    fontSize: "14px"
  },
  selected: {
    backgroundColor: styledBy("color", {
      default: "tomato",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
    })
  }
})(({ classes, ...other }) => <Tab classes={classes} {...other} />);

const VerticalTab = props => {
  return (
    <RctCollapsibleCard fullBlock>
      <VerticalTabs
        value={props.activeIndex}
        onChange={props.handleChange}
        variant="fullWidth"
      >
        {props.children.map((child, key) => {
          return (
            <MyTab
              key={key}
              icon={<i className={`zmdi-hc-3x zmdi ${child.icon}`} />}
              label={child.label}
              color="default"
            />
          );
        })}
      </VerticalTabs>
    </RctCollapsibleCard>
  );
};

export default VerticalTab;
