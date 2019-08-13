import React, { useState } from "react";

import BgCard from "Components/Everyday/BgCard";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";

function TabContainer({ children }) {
  return <Typography component="div">{children}</Typography>;
}

function TabsWrapper(props) {
  const [activeIndex, setactiveIndex] = useState(0);

  //Tabs Header
  function handleChange(value) {
    setactiveIndex(value);
  }

  const { children } = props;
  return (
    <BgCard
      heading={
        <Tabs
          value={activeIndex}
          onChange={(e, value) => handleChange(value)}
          variant="fullWidth"
          textColor="inherit"
          indicatorColor="primary"
        >
          {children.length ? (
            children.map((child, key) => (
              <Tab
                key={key}
                icon={<i className={`zmdi-hc-2x zmdi ${child.props.icon}`} />}
                label={child.props.label}
              />
            ))
          ) : (
            <Tab
              icon={<i className={`zmdi-hc-2x zmdi ${children.props.icon}`} />}
              label={children.props.label}
            />
          )}
        </Tabs>
      }
    >
      <SwipeableViews
        axis={"x"}
        index={activeIndex}
        onChangeIndex={index => handleChange(index)}
      >
        {children.length ? (
          children.map((child, key) => (
            <TabContainer key={key}>
              <div className="px-40 py-10">{child}</div>
            </TabContainer>
          ))
        ) : (
          <TabContainer>
            <div className="px-40 py-10">{children}</div>
          </TabContainer>
        )}
      </SwipeableViews>
    </BgCard>
  );
}

export default TabsWrapper;
