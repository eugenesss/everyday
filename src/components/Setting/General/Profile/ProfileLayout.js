import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import UserBlock from "./UserBlock";
import UserFeedBlock from "./UserFeedBlock"

import { getAllUsers, updateUserStart } from "Actions" //AuthUser

const styles = () => ({
  bannerStyle: {
    overflow: "hidden",
    objectFit: "cover"
  },
  userFeedBlock: {
    display: "block",
  }
});

class ProfileLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    this.props.getAllUsers() //AuthUser
  }

  componentDidMount() {
    this.props.updateUserStart(this.props.userView)
  }

  render() {
    const { classes, userView, usersLoading } = this.props
    return (
      <React.Fragment>
        {/* <Row>
          <img src={require('Assets/img/profile-bg.jpg')} alt="profile banner" width="1920" height="300" className={classes.bannerStyle}/>
        </Row> */}
        <Row>
          <Col lg={4}>
            <UserBlock 
              user={userView}
              uploadFile ={(e) => {console.log(e.target.files[0])}}
            />
          </Col>
          <Col lg={8} className={classes.userFeedBlock}>
            <UserFeedBlock/>
          </Col>
        </Row>
        {usersLoading && <RctSectionLoader/>}
      </React.Fragment>
    );
  }
}


ProfileLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ usersState, uploadFile  }) => {
  const { me, usersLoading } = usersState;
  return { me, usersLoading };
};

export default connect(
  mapStateToProps,
  { getAllUsers, updateUserStart }
)(withStyles(styles)(ProfileLayout));
