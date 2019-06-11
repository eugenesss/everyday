/**
 * App.js Layout Start Here
 */
import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

// rct theme provider
import RctThemeProvider from "./RctThemeProvider";

//Horizontal Layout
import HorizontalLayout from "./HorizontalLayout";
import Login from "Routes/login";
import Register from "Routes/register";
import NotFound from "./error_pages/Err404";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

class App extends Component {
  render() {
    const { location, match, user } = this.props;
    if (location.pathname === "/") {
      return <Redirect to={"/app/homebase"} />;
    }
    return (
      <RctThemeProvider>
        <NotificationContainer />
        <InitialPath
          path={`${match.url}app`}
          authUser={user}
          component={HorizontalLayout}
        />
        <Route path={`/login`} exact component={Login} />
        <Route path={`/register`} exact component={Register} />
        <Route path={"/404"} exact component={NotFound} />
      </RctThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default App;
