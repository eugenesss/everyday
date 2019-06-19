import React from "react";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

const VerticalContainer = props => {
  return (
    <RctCollapsibleCard fullBlock>
      <SwipeableViews
        axis={"x"}
        index={props.activeIndex}
        onChangeIndex={index => props.handleChange(index)}
      >
        {props.children.map((child, key) => {
          return <TabContainer key={key}>{child}</TabContainer>;
        })}
      </SwipeableViews>
    </RctCollapsibleCard>
  );
};

export default VerticalContainer;
