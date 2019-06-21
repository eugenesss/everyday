import React from "react";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

function TabContainer(props) {
  return (
    <Typography
      component="div"
      style={{ padding: props.fullBlock ? "" : "24" }}
    >
      {props.children}
    </Typography>
  );
}

const VerticalContainer = ({
  activeIndex,
  handleChange,
  children,
  fullBlock
}) => {
  return (
    <RctCollapsibleCard fullBlock={fullBlock}>
      <SwipeableViews
        axis={"x"}
        index={activeIndex}
        onChangeIndex={index => handleChange(index)}
      >
        {children.map((child, key) => {
          return (
            <TabContainer fullBlock={fullBlock} key={key}>
              {child}
            </TabContainer>
          );
        })}
      </SwipeableViews>
    </RctCollapsibleCard>
  );
};

export default VerticalContainer;
