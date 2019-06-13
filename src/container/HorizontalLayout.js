/**
 * Horizontal App
 */
import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getAllRoles, getAllUsers, getAllHierarchies } from "Actions";

// horizontal layout
import RctHorizontalLayout from "Components/RctHorizontalLayout";

// router service
import routerService from "../services/_routerService";




class RctHorizontalApp extends Component {
  componentWillMount() {
    if (this.props.roles.length == 0) this.props.getAllRoles();
    if (this.props.hierarchies.length == 0) this.props.getAllHierarchies();
    //  if(!this.props.me.id)
    //  this.props.getAllUsers()
  }

  render() {
    const { match, location } = this.props;
    if (location.pathname === "/") {
      return <Redirect to={"/app/homebase"} />;
    }
    return (
      <RctHorizontalLayout>
        {routerService &&
          routerService.map((route, key) => (
            <Route
              key={key}
              path={`${match.url}/${route.path}`}
              component={route.component}
            />
          ))}
      </RctHorizontalLayout>
    );
  }
}

const mapStateToProps = ({
  authUser,
  rolesState,
  usersState,
  hierarchiesState
}) => {
  const { user } = authUser;
  const { roles } = rolesState;
  const { me } = usersState;
  const { hierarchies } = hierarchiesState;
  return { user, roles, me, hierarchies };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getAllRoles, getAllUsers, getAllHierarchies }
  )(RctHorizontalApp)
);
