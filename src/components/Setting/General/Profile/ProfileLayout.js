import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import UserBlock from "./UserBlock";
import UserFeedBlock from "./UserFeedBlock";


const styles = () => ({
  bannerStyle: {
    overflow: "hidden",
    objectFit: "cover"
  },
  userFeedBlock: {
    display: "block"
  }
});

class ProfileLayout extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    //this.props.updateUserStart(this.props.userView);
  }

  render() {
    const { classes, userInfo, usersLoading } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col lg={4}>
            <UserBlock
              user={userInfo}
              uploadFile={e => {
                console.log(e.target.files[0]);
              }}
            />
          </Col>
          <Col lg={8} className={classes.userFeedBlock}>
            <UserFeedBlock />
          </Col>
        </Row>
        {usersLoading && <RctSectionLoader />}
      </React.Fragment>
    );
  }
}

ProfileLayout.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ authUser }) => {
  const { userInfo, usersLoading } = authUser;
  return { userInfo, usersLoading };
};

export default connect(
  mapStateToProps
)(withStyles(styles)(ProfileLayout));
