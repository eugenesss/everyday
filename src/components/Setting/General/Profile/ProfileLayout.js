import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import UserBlock from "./UserBlock";
import UserFeedBlock from "./UserFeedBlock"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  bannerStyle: {
    overflow: "hidden",
    objectFit: "cover"
  },
  userBlock: {
    marginTop: -50
  },
  userFeedBlock: {
    display: "block",
    marginTop: 20
  }
});

class ProfileLayout extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Row>
          <img src={require('Assets/img/profile-bg.jpg')} alt="profile banner" width="1920" height="300" className={classes.bannerStyle}/>
        </Row>
        <Row>
          <Col lg={4} className={classes.userBlock}>
            <UserBlock/>
          </Col>
          <Col lg={8} className={classes.userFeedBlock}>
            <UserFeedBlock/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}


ProfileLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  null,
  { }
)(withStyles(styles)(ProfileLayout));
