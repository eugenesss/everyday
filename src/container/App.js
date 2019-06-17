/**
 * App.js Layout Start Here
 */
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";

// rct theme provider
import RctThemeProvider from "./RctThemeProvider";

//Horizontal Layout
import HorizontalLayout from "./HorizontalLayout";
import Login from "Routes/login";
import Register from "Routes/register";
import ForgetPassword from '../routes/forgetpassword/forgetpassword'
import Verified from '../routes/verified/verified'

import NotFound from "./error_pages/Err404";


import Auth from '../Auth/Auth'

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

class App extends Component {
  render() {

    const { location, match, user } = this.props;


    // check if user is authenticated, if not redirect to login

    switch (new Auth().isAuthenticated()) {
      case false:
          if (location.pathname === "/") { return <Redirect to={"/login"} /> }
      case true:
          if (location.pathname === "/") { return <Redirect to={"/app/homebase"} /> }
      default:break
    }

  
    // if (location.pathname === "/") {
    //   return <Redirect to={"/app/homebase"} />;
    // }


    return (
      <RctThemeProvider>
        <NotificationContainer />
        <InitialPath
          path={`${match.url}app`}
          authUser={user}
          component={HorizontalLayout}
        />

        {/* Added switch to match URL Link */}
        <Switch>
          <Route path={`/login`} exact component={Login} />
          <Route path={`/register`} exact component={Register} />
          <Route path={`/forgetpassword`} exact component={ForgetPassword} />
          <Route path={`/verified`} exact component={Verified} />




          {/* <Route path={"/404"} exact component={NotFound} /> */}
          <Route component={NotFound} />
        </Switch>

      </RctThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

// export default App;

export default connect(
  mapStateToProps,
)(App);


