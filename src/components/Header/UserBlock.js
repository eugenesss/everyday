import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';


// import Moment from "moment";
// import UserAvatar from "Components/User/UserAvatar";
import { RctCard } from "Components/RctCard";
import Auth from '../../Auth/Auth'

import { logoutUser } from "Actions";


// const useStyles = makeStyles(theme => ({
//   root: {
//     height: 180,
//   },
//   wrapper: {
//     width: 100 + theme.spacing(2),
//   },
//   paper: {
//     zIndex: 1,
//     position: 'relative',
//     margin: theme.spacing(1),
//   },
//   svg: {
//     width: 100,
//     height: 100,
//   },
//   polygon: {
//     fill: theme.palette.common.white,
//     stroke: theme.palette.divider,
//     strokeWidth: 1,
//   },
// }));



class UserBlock extends Component {

 
 

  state = {
    buttonLoading: false,
    checked: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  
  
  _handleChange = () => {
    this.setState({checked: !this.state.checked})
  }

  render() {
  
    const { location, user, classes } = this.props;
    const { buttonLoading } = this.state;

    return (
      <UncontrolledDropdown nav className="list-inline-item cart-dropdown" style={{position:'relative'}}>
        
        <IconButton className="text-white" aria-label="user" onClick={this._handleChange}>
          <i className={"zmdi zmdi-face " + classes.icon} />
        </IconButton>
{/* 
        <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit style={{ zIndex: 10, border: '1px solid black', position:'absolute', right: 0, bottom: 0, top: 20, width: 250}}>
          <Paper elevation={4} style={{}}>
            <div>

            </div>
          </Paper>
        </Slide> */}


        <DropdownMenu>
        <div className="dropdown-content">
          <Fragment>
            <RctCard customClasses="profile-head mb-0">
              <div className="profile-top border-bottom">
                <div className="user-image text-center mb-15 mt-30">
              
                  <img
                    src={require("Assets/avatars/user-37.jpg")}
                    alt="user profile"
                    className="rounded-circle bordered"
                    width="120"
                    height="120"
                  />
                </div>
                <div className="user-list-content">
                  <div className="text-center">
                    <h3 className="fw-bold">{user && user.fullName}</h3>
                    <div className="social-list clearfix mb-30">
                      <ul className="list-inline d-inline-block mb-10">
                        <li className="list-inline-item">
                          <Button
                            variant="contained"
                            color="primary"
                            className="btn bg-primary text-white"
                            onClick={() =>
                              this.props.history.push(
                                `/app/settings/general/my-profile`
                              )
                            }
                          >
                            View Profile
                          </Button>
                        </li>
                        <li className="list-inline-item">
                          <Button
                            variant="contained"
                            color="primary"
                            className="btn bg-danger text-white"
                            disabled={buttonLoading}
                            onClick={() => {
                              const token = new Auth().retrieveAccessToken()
                              this.props.logoutUser(token);
                            }}>
                            Logout
                            {buttonLoading && (
                              <CircularProgress
                                size={14}
                                style={{ position: "absolute" }}
                              />
                            )}
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </RctCard>
          </Fragment>
        </div>
        </DropdownMenu>

      </UncontrolledDropdown>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings, authUser }) => {
  const { user } = authUser;
  return { settings, user };
};

export default withRouter(
  connect(
    mapStateToProps,
    {logoutUser}
  )(UserBlock)
);






/*
<DropdownMenu>
<div className="dropdown-content">
  <Fragment>
    <RctCard customClasses="profile-head mb-0">
      <div className="profile-top border-bottom">
        <div className="user-image text-center mb-15 mt-30">
      
          <img
            src={require("Assets/avatars/user-37.jpg")}
            alt="user profile"
            className="rounded-circle bordered"
            width="120"
            height="120"
          />
        </div>
        <div className="user-list-content">
          <div className="text-center">
            <h3 className="fw-bold">{user && user.fullName}</h3>
            <div className="social-list clearfix mb-30">
              <ul className="list-inline d-inline-block mb-10">
                <li className="list-inline-item">
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn bg-primary text-white"
                    onClick={() =>
                      this.props.history.push(
                        `/app/settings/general/my-profile`
                      )
                    }
                  >
                    View Profile
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn bg-danger text-white"
                    disabled={buttonLoading}
                    onClick={() => {
                      const token = new Auth().retrieveAccessToken()
                      this.props.logoutUser(token);
                    }}>
                    Logout
                    {buttonLoading && (
                      <CircularProgress
                        size={14}
                        style={{ position: "absolute" }}
                      />
                    )}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </RctCard>
  </Fragment>
</div>
</DropdownMenu>
*/

{/*  <UserAvatar
      customClasses="img-fluid rounded-circle rct-notify mx-auto"
      user={user}
      size={80}
/> */}