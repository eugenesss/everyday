/**
 * App.js Layout Start Here
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

// rct theme provider
import RctThemeProvider from "./RctThemeProvider";

//Horizontal Layout
import HorizontalLayout from "./HorizontalLayout";
import Login from "Routes/login";
import NotFound from "./error_pages/Err404";

//Get Roles Actions
import { getAllRoles, getAllUsers, getAllHierarchies } from "Actions"

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

class App extends Component {

  componentWillMount() {
    if(this.props.roles.length == 0)
      this.props.getAllRoles()
    if(this.props.hierarchies.length == 0)
      this.props.getAllHierarchies()
    if(!this.props.me.id)
      this.props.getAllUsers()
  }

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
        <Route path={"/404"} exact component={NotFound} />
      </RctThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser, rolesState, usersState, hierarchiesState }) => {
  const { user } = authUser;
  const { roles } = rolesState;
  const { me } = usersState;
  const { hierarchies } = hierarchiesState;
  return { user, roles, me, hierarchies };
};

export default connect(
  mapStateToProps,
  { getAllRoles, getAllUsers, getAllHierarchies }
)(App);
