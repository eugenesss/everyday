import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import SwipeableViews from 'react-swipeable-views';
import moment from 'moment';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { onChangeFeedView } from "Actions";

function TabContainer({ children, classes}) {
  return (
    <Typography component="div" className={classes.tabs}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  tabs: {
    marginLeft: 8,
  },
});

class UserFeedBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      match, classes,
      
      viewIndex,

      onChangeFeedView,
    } = this.props;
    console.log(viewIndex)
    return (
      <React.Fragment>
        <Row className={"align-items-center"}>
          <Col className={classes.tabs}>
            <AppBar position="static" color="default">
              <Tabs
                value={viewIndex}
                onChange={onChangeFeedView}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Feed"/>
                <Tab label="Settings"/>

              </Tabs>
            </AppBar>
          </Col>
        </Row>
        <Row >
          <Col>
            <SwipeableViews
              axis={'x'}
              index={viewIndex}
              onChangeIndex={onChangeFeedView}
            >
              <TabContainer classes={classes}>
                <div>asd</div>
              </TabContainer>
              <TabContainer classes={classes}>
                <div>qwe</div>
              </TabContainer>
            </SwipeableViews>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

UserFeedBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ profileState }) => {
  const { viewIndex } = profileState;
  return { viewIndex };
};

export default connect(
  mapStateToProps,
  { onChangeFeedView }
)(withStyles(styles)(UserFeedBlock));
