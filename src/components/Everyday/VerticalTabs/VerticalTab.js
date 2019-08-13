import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import BgCard from "Components/Everyday/BgCard";
import AppConfig from "Constants/AppConfig";

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
    minHeight: "100px"
  },
  labelIcon: {
    fontSize: "14px"
  },
  selected: {
    backgroundColor: styledBy("selectedcolor", {
      crm: AppConfig.themeColors.primary,
      accounting: AppConfig.themeColors.accounting
    }),
    color: "white"
  }
})(({ classes, ...other }) => <Tab classes={classes} {...other} />);

const VerticalTab = props => {
  return (
    <BgCard fullBlock>
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
              selectedcolor={props.selectedcolor}
            />
          );
        })}
      </VerticalTabs>
    </BgCard>
  );
};

export default VerticalTab;
