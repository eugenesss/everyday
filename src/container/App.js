import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";

// rct theme provider
import RctThemeProvider from "./RctThemeProvider";

//Horizontal Layout
import HorizontalLayout from "./HorizontalLayout";
import Login from "Routes/login";
import Register from "Routes/register";
import ForgetPassword from "../routes/forgetpassword/forgetpassword";

import NotFound from "./error_pages/Err404";

import Auth from "../Auth/Auth";
import SystemDialogs from "Components/Everyday/SystemDialogs";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 *
 */
const InitialPath = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

function App(props) {
  const { location, match, loggedInUser } = props;

  // check if user is authenticated, if not redirect to login
  switch (new Auth().isAuthenticated()) {
    case false:
      if (location.pathname === "/") {
        return <Redirect to={"/login"} />;
      }
    case true:
      if (location.pathname === "/") {
        return <Redirect to={"/app/homebase"} />;
      }
    default:
      break;
  }

  return (
    <RctThemeProvider>
      <NotificationContainer />
      <SystemDialogs />
      <Switch>
        <InitialPath
          path={`${match.url}app`}
          authUser={loggedInUser}
          component={HorizontalLayout}
        />
        <Route path={`/login`} exact component={Login} />
        <Route path={`/register`} exact component={Register} />
        <Route path={`/forgetpassword`} exact component={ForgetPassword} />

        <Route component={NotFound} />
      </Switch>
    </RctThemeProvider>
  );
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { loggedInUser } = authUser;
  return { loggedInUser };
};

// export default App;

export default connect(mapStateToProps)(App);
